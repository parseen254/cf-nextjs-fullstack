import { accounts, sessions, users, verificationTokens } from "./db/schema"

import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Google from "next-auth/providers/google"
import NextAuth from "next-auth"
import { getDB } from "@/db";
import { getRequestContext } from '@cloudflare/next-on-pages'
import { sendVerificationRequest } from "@/lib/authSendRequest";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const db = getDB(getRequestContext().env.DB);
  return {
    providers: [
      Google,
      {
        id: "magic-link",
        name: "Email",
        type: "email",
        maxAge: 60 * 60 * 24, // Email link will expire in 24 hours
        sendVerificationRequest,
        from: "no-reply@parseen.dev",
      },
    ],
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    session: { strategy: "database" },
    trustHost: true,
  };
});