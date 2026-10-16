import Image from "next/image";
import Link from "next/link";

/** The brand logo + wordmark, shared by header and footer. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="#home" className={`group flex items-center gap-3 whitespace-nowrap ${className}`}>
      <Image
        src="/assets/brand/logo.png"
        alt="Threads & Arts"
        width={40}
        height={40}
        className="h-10 w-auto max-md:h-8 transition-transform duration-500 group-hover:scale-105"
      />
      <span className="text-xl font-semibold leading-tight max-md:text-lg">
        Threads <b className="text-brand">&amp; Arts</b>
        <small className="block text-[8px] font-normal tracking-[0.2em] max-md:text-[6px]">
          EMBROIDERY DIGITIZING STUDIO
        </small>
      </span>
    </Link>
  );
}
