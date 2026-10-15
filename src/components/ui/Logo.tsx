import Link from "next/link";

/** The italic-T monogram + wordmark, shared by header and footer. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="#home" className={`group flex items-center gap-3 whitespace-nowrap ${className}`}>
      <span
        aria-hidden
        className="grid h-12 w-10 -rotate-15 place-items-center rounded-[50%] border border-brand font-display text-4xl italic leading-none text-brand transition-transform duration-500 group-hover:-rotate-[5deg] max-md:h-9 max-md:w-8 max-md:text-3xl"
      >
        T
      </span>
      <span className="text-xl font-semibold leading-tight max-md:text-lg">
        Threads <b className="text-brand">&amp; Arts</b>
        <small className="block text-[8px] font-normal tracking-[0.2em] max-md:text-[6px]">
          EMBROIDERY DIGITIZING STUDIO
        </small>
      </span>
    </Link>
  );
}
