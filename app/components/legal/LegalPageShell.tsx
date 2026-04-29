import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function LegalPageShell({ title, description, children }: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-[#ececec] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[8px] bg-[#4141f5] px-6 py-6 text-white sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-[clamp(3rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.02em]">
              {title}
            </h1>
            <Link href="/" className="inline-flex items-center text-[18px] font-semibold text-white/90 hover:text-white">
              Retour à l'accueil
            </Link>
          </div>
          <p className="mt-4 max-w-[860px] text-[18px] leading-[1.35] text-white/85">{description}</p>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
