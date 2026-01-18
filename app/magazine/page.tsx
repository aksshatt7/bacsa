// app/magazine/page.tsx
import MagazineCard, { type MagazineEdition } from "@/components/magazine";

const editions: MagazineEdition[] = [
  {
    title: "Omnibus",
    description:
      "BACSA Research Projects 2024-2025",
    coverSrc: "/magazine-covers/omnibusbacsa.png",
    pdfHref: "/magazines/omnibus.pdf",
  },
];

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-white pt-24">
     {/* Header */}
      <section className="border-b bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Magazine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore BACSAs magazine editions, featuring selected papers from the BACSA Research Project. These issues highlight student-driven research, innovation, and interdisciplinary work across biotechnology and computer science ! </p>
        </div>
      </section>

      {/* Grid of edition cards */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Editions
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {editions.map((edition) => (
            <MagazineCard key={edition.title} edition={edition} />
          ))}
        </div>
      </section>
    </main>
  );
}
