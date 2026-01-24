import LandingHacks from "@/components/landinghacks";

export default function BACSAHacksPage() {
  return (
    <main className="bg-white">
      <LandingHacks
        title="BACSAHacks"
        dateLabel="March 7th, 2026"
        ctaText="Sign up"
        ctaHref="/events/bacsahacks/signup"
        imageSrc="/hackathon/bacsahacks-hero.png"
        descriptionTitle="About BACSAHacks"
        descriptionText={"Description of\nhackathon"}
      />
    </main>
  );
}
