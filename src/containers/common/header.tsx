"use client";

import AuthModal from "@/containers/auth/signin-modal";
import { CloudIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/containers/common/mode-toggle";
import { UserDropdownMenu } from "../auth/user-dropdown-menu";
import { useSession } from "next-auth/react";

type Props = {};

export default function Header({}: Props) {
  const { data: session } = useSession();

  return (
    <header className="pt-12 px-8 lg:px-48 flex-col md:flex-row flex lg:items-center">
      <div className="flex-1 flex flex-col items-center md:items-start lg:items-center">
        <div className="flex-1">
          <Link href="/">
            <CloudIcon className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex-1">
          <p className="font-bold text-lg">Cloudflare Next.js Template</p>
        </div>
      </div>
      <div className="flex-0 flex mt-8 md:mt-0 justify-center gap-4 items-end">
        {!session && <AuthModal />}
        <ModeToggle />
        {session && <UserDropdownMenu session={session} />}
      </div>
    </header>
  );
}
