import LandingHacks from "@/components/landinghacks";
import SponsorsSection from "@/components/bacsahacks/SponsorsSection";
import FaqSection from "@/components/bacsahacks/FaqSection";

export default function BACSAHacksPage() {
  return (
    <main className="bg-white">
      <LandingHacks
        title="BACSAHacks"
        dateLabel="March 7th, 2026"
        ctaText="Sign up"
        ctaHref="https://luma.com/1xswzvk9"
        imageSrc="/hackathon/bacsahacks-hero.png"
        descriptionTitle="About BACSAHacks"
        descriptionText={`BACSA Hacks is a one-day, in-person hackathon hosted by the Biotech and Computer Science Association (BACSA) at the University of Toronto, bringing together students passionate about technology, biology, and innovation. Teams will collaborate to build creative, data-driven solutions tackling real-world challenges in health, disease detection, and forensics, with guidance from workshops, mentors, and hands-on activities throughout the day. Whether you're a beginner or an experienced hacker, BACSA Hacks is designed to be an exciting, welcoming space to learn, build, and connect.`}
      />
      <SponsorsSection />
      <FaqSection />
    </main>
  );
}
