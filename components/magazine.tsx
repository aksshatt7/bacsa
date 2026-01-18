// components/magazine.tsx
import Image from "next/image";
import Link from "next/link";

export type MagazineEdition = {
  title: string;
  description: string;
  coverSrc: string;
  pdfHref: string;
};

export default function MagazineCard({ edition }: { edition: MagazineEdition }) {
  return (
    <Link
      href={edition.pdfHref}
      target="_blank"
      className="group relative block w-full"
    >
      <article className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
        {/* Cover image */}
        <div className="relative h-44 w-full bg-neutral-100">
          <Image
            src={edition.coverSrc}
            alt={edition.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-5 pb-5 pt-4">
          <h3 className="line-clamp-2 text-[18px] font-semibold leading-snug text-neutral-900">
            {edition.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-neutral-500">
            {edition.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
