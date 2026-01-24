import Link from "next/link";
import Image from "next/image";

type LandingHacksProps = {
  title?: string;
  dateLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  descriptionTitle?: string;
  descriptionText?: string;
};

export default function LandingHacks({
  title = "BACSAHacks",
  dateLabel = "Date",
  ctaText = "Sign up",
  ctaHref = "/events",
  imageSrc = "/hackathon/bacsahacks-hero.png",
  descriptionTitle = "Description",
  descriptionText = "Description of\nhackathon",
}: LandingHacksProps) {
  return (
    <section className="w-full">
      {/* HERO — full viewport */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="BACSAHacks hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Bottom fade into teal */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent via-teal-500/50 to-teal-500" />

        {/* Hero content */}
        <div className="relative z-12 mx-auto h-full max-w-6xl px-12">
          {/* 🔽 PUSH TEXT DOWN MORE */}
          <div className="pt-44 md:pt-52">
            <h1
              className="text-[64px] font-extrabold leading-[0.95] tracking-tight text-slate-900 md:text-[92px]"
              style={{
                textShadow: "10px 10px 0px rgba(45, 212, 191, 0.45)",
              }}
            >
              {title}
            </h1>

            <div className="mt-8 text-[28px] font-extrabold text-black md:text-[32px]">
              {dateLabel}
            </div>

            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-teal-500 px-10 py-4 text-[20px] font-semibold text-white shadow-sm transition hover:bg-teal-600"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* DESCRIPTION — only visible after scroll */}
      <div className="relative bg-teal-500 text-center">
        {/* Smooth top fade */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-teal-500/70 to-teal-500" />

      <div className="mx-auto flex min-h-[650px] max-w-5xl flex-col items-center px-6 pt-24 pb-32">
          <h2 className="text-[64px] font-extrabold tracking-tight text-white md:text-[88px]">
            {descriptionTitle}
          </h2>

          <p className="mt-10 whitespace-pre-line text-[26px] font-medium leading-relaxed text-teal-50 md:text-[34px]">
            {descriptionText}
          </p>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-200/70 to-transparent" />
      </div>
    </section>
  );
}
