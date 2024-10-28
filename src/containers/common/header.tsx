import AuthModal from "../auth/auth-modal";
import { CloudIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

type Props = {};

export default function Header({}: Props) {
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
        <AuthModal />
        <ModeToggle />
      </div>
    </header>
  );
}
