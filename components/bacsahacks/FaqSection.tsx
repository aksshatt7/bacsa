"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root
const AccordionItem = AccordionPrimitive.Item

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "flex w-full items-center justify-between rounded-2xl sm:rounded-full bg-white/30 px-4 sm:px-6 py-4 sm:py-5 text-left transition-all hover:bg-white/40 border border-white/30 data-[state=open]:bg-white/40 [&[data-state=open]_svg]:rotate-45",
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("px-6 pb-6 pt-2", className)}>{children}</div>
  </AccordionPrimitive.Content>
)

const faqData = [
  {
    id: "what-is-bacsa-hacks",
    question: "What is BACSA Hacks?",
    answer:
      "BACSA Hacks is a student-led hackathon held at the University of Toronto. It brings together students from diverse academic backgrounds to collaborate, innovate, and build impactful projects over an exciting weekend.",
  },
  {
    id: "what-is-bacsa",
    question: "What is BACSA?",
    answer:
      "The Biotechnology and Computer Science Association (BACSA) is a club at the University of Toronto that brings together passionate students from biotechnology and computer science to create innovative solutions for real-world challenges. We foster collaborative research projects, organize cutting-edge workshops, and host networking events that bridge the gap between biological sciences and computational technologies.",
  },
  {
    id: "where-when",
    question: "Where and when will it be held?",
    answer:
      "BACSA Hacks is happening on the 7th March and will be held at the University of Toronto Scarborough Campus at the Instructional Centre. Registration begins at 8:30 am at IC-200.",
  },
  {
    id: "duration",
    question: "What is the duration of the hackathon?",
    answer:
      "It will be a 11-hour hackathon, starting from 10:30am to 9:40pm. The registration starts at 8:30pm.",
  },
  {
    id: "tracks-themes",
    question: "Tracks/Themes at the Hackathon",
    answer:
      "The hackathon will feature 2 unique tracks, an Open Track providing more flexibility on themes and a Closed Track that explores a specific type of challenge. The exact themes will be announced closer to the event.",
  },
  {
    id: "team-size",
    question: "How many people can I have in my team?",
    answer:
      "Teams will be limited to a maximum number of 4 members.",
  },
  {
    id: "find-team",
    question: "How will I find my team members?",
    answer:
      "Approved participants will be invited to a discord server prior to the event where they can connect with peers and form teams. A form will be made available on the day of the hackathon to officially register your team.",
  },
  {
    id: "what-to-bring",
    question: "What should I bring to the hackathon?",
    answer:
      "You should bring your laptops, chargers and some valid identification to the hackathon. Participants are also recommended to bring headphones, water bottles, any necessary medication and personal items for comfort. Meals, snacks, and workspace will be provided throughout the event.",
  },
  {
    id: "who-should-participate",
    question: "Who should participate?",
    answer:
      "Any students passionate about innovation and creativity in the fields of biotechnology or computer science, regardless of experience or skill level are welcome to join!",
  },
  {
    id: "beginner-friendly",
    question: "Is the hackathon beginner-friendly?",
    answer:
      "Yes this hackathon is open to all skill levels including beginners with limited experience. We will be providing workshops and mentorships throughout the event to help you develop your projects!",
  },
  {
    id: "far-away",
    question: "Can I attend if I live far away?",
    answer:
      "Yes, as long as you are registered, you are welcome to attend. However BACSA will not be providing travel reimbursements or accommodations.",
  },
  {
    id: "not-uoft",
    question: "What if I'm not a UofT student?",
    answer:
      "Being a UofT student is not a must, so you are welcome to join.",
  },
]

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full bg-gradient-to-b from-teal-100 via-teal-200 to-teal-300 py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1000px] px-6">
        {/* Heading */}
        <h2 className="text-center text-[36px] sm:text-[48px] md:text-[64px] font-extrabold tracking-tight text-slate-900">
          FAQ
        </h2>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-white/50 transition-colors [&[data-state=open]]:bg-white/70">
                      <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-900 transition-transform duration-200" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="ml-10 sm:ml-12 text-sm sm:text-base md:text-lg leading-relaxed text-slate-800">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
