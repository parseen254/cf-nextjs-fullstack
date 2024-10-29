import { eq } from 'drizzle-orm'
import { getDB } from '@/db'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { users } from '@/db/schema'

// Assuming you have a users table in your schema

export async function getUserFromDb(email: string) {
    const { env } = getRequestContext();
    const db = getDB(env.DB)


    const result = await db
        .select()
        .from(users)
        .where(
            eq(users.email, email)
        )
        .limit(1)

    return result[0] || null
}