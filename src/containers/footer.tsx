import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 min-h-10 items-center px-4 lg:px-48 border-t">
      <div className="flex-1 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cloudflare Next.js Template. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
