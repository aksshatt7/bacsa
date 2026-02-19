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
  title = "BACSA Hacks",
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
          alt="BACSA Hacks hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Bottom fade into teal */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent via-teal-500/50 to-teal-500" />

        {/* Hero content */}
        <div className="relative z-12 mx-auto h-full max-w-6xl px-4 sm:px-8 md:px-12">
          <div className="pt-32 sm:pt-40 md:pt-52">
            <h1
              className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[92px] font-extrabold leading-[0.95] tracking-tight text-slate-900"
              style={{
                textShadow: "10px 10px 0px rgba(45, 212, 191, 0.45)",
              }}
            >
              {title}
            </h1>

            <div className="mt-6 sm:mt-8 text-[20px] sm:text-[24px] md:text-[32px] font-extrabold text-black">
              {dateLabel}
            </div>

            <Link
              href={ctaHref}
              className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-teal-500 px-8 sm:px-10 py-3 sm:py-4 text-[16px] sm:text-[20px] font-semibold text-white shadow-sm transition hover:bg-teal-600"
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

      <div className="mx-auto flex min-h-[400px] sm:min-h-[650px] max-w-5xl flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-32">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[88px] font-extrabold tracking-tight text-white text-center">
            {descriptionTitle}
          </h2>

          <p className="mt-6 sm:mt-10 whitespace-pre-line text-[16px] sm:text-[20px] md:text-[26px] lg:text-[34px] font-medium leading-relaxed text-teal-50">
            {descriptionText}
          </p>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-200/70 to-transparent" />
      </div>
    </section>
  );
}
