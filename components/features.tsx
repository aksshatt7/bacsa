import { Dna, Code, Users, Lightbulb, GraduationCap, Network } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Dna,
      title: "BIOTECHNOLOGY FOCUS",
      description:
        "EXPLORE CUTTING-EDGE RESEARCH IN GENOMICS, BIOINFORMATICS, AND COMPUTATIONAL BIOLOGY WITH INDUSTRY-LEADING TOOLS AND METHODOLOGIES.",
      color: "bg-bacsa-mountain-meadow",
    },
    {
      icon: Code,
      title: "COMPUTER SCIENCE EXCELLENCE",
      description:
        "MASTER ALGORITHMS, DATA STRUCTURES, AND SOFTWARE ENGINEERING PRINCIPLES THROUGH HANDS-ON PROJECTS AND EXPERT GUIDANCE.",
      color: "bg-bacsa-botticelli",
    },
    {
      icon: Users,
      title: "COMMUNITY BUILDING",
      description:
        "CONNECT WITH LIKE-MINDED PEERS AND BUILD LASTING PROFESSIONAL RELATIONSHIPS THAT WILL ADVANCE YOUR CAREER.",
      color: "bg-bacsa-royal-blue",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION HUB",
      description:
        "PARTICIPATE IN HACKATHONS, RESEARCH PROJECTS, AND STARTUP INITIATIVES THAT PUSH THE BOUNDARIES OF BOTH FIELDS.",
      color: "bg-bacsa-mountain-meadow",
    },
    {
      icon: GraduationCap,
      title: "ACADEMIC SUPPORT",
      description: "ACCESS TUTORING, STUDY GROUPS, AND ACADEMIC RESOURCES DESIGNED TO HELP YOU EXCEL IN YOUR STUDIES.",
      color: "bg-bacsa-botticelli",
    },
    {
      icon: Network,
      title: "INDUSTRY CONNECTIONS",
      description:
        "NETWORK WITH INDUSTRY PROFESSIONALS AND EXPLORE INTERNSHIP, CO-OP, AND FULL-TIME CAREER OPPORTUNITIES.",
      color: "bg-bacsa-royal-blue",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-title text-4xl md:text-5xl text-bacsa-cloud-burst mb-6">WHAT WE OFFER</h2>
          <p className="brand-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            COMPREHENSIVE PROGRAMS AND OPPORTUNITIES FOR STUDENTS IN BIOTECHNOLOGY AND COMPUTER SCIENCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="brand-title text-xl text-bacsa-cloud-burst mb-4">{feature.title}</h3>
              <p className="brand-body text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
