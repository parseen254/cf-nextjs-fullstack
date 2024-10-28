import type { NextRequest } from 'next/server'
import { getDB } from '@/db'
import { getRequestContext } from '@cloudflare/next-on-pages'
import { tasks } from '@/db/schema'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { env } = getRequestContext();

  const result = await getDB(env.DB).select().from(tasks);

  return new Response(JSON.stringify({ tasks: result }, null, '\t'))
}
