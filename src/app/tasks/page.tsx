// import type { NextRequest } from 'next/server'
// import { getDB } from '@/db'
// import { getRequestContext } from '@cloudflare/next-on-pages'
// import { tasks } from '@/db/schema'

export const runtime = "edge";

// export async function GET(request: NextRequest) {
//   const { env } = getRequestContext();

//   const result = await getDB(env.DB).select().from(tasks);

//   return new Response(JSON.stringify({ tasks: result }, null, '\t'))
// }
import React from "react";
import { auth } from "@/auth";
import { getDB } from "@/db";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { redirect } from "next/navigation";
import { tasks } from "@/db/schema";

type Props = {};

export default async function Tasks({}: Props) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const { env } = getRequestContext();
  const result = await getDB(env.DB).select().from(tasks);
  return (
    <div>
      Tasks
      {JSON.stringify({ session, result }, null, "\t")}
    </div>
  );
}
