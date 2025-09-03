"use client"
import { Users, Target, Award, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We foster creativity and cutting-edge thinking at the intersection of biotechnology and computer science.",
      bgColor: "bg-bacsa-mountain-meadow", // Teal color matching BACSA brand
    },
    {
      icon: Users,
      title: "People",
      description: "We build strong connections among students, faculty, and industry professionals.",
      bgColor: "bg-bacsa-botticelli", // Blue color matching BACSA brand
    },
    {
      icon: Award,
      title: "Knowledge",
      description: "We strive for excellence in education, research, and professional development.",
      bgColor: "bg-bacsa-royal-blue", // Royal blue matching BACSA brand
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We aim to make a positive difference in healthcare, research, and technology.",
      bgColor: "bg-bacsa-cloud-burst", // Dark blue matching BACSA brand
    },
  ]

  const coPresidents = [
    {
      id: "co-president-1",
      name: "Astrid Chavez Chavira",
      role: "Co-President",
      program: "Computer Science & Biology",
      year: "4th Year",
      bio: "As Co-President and Co-Founder of BACSA, I am committed to building an interdisciplinary community that bridges academics and industry. Through our Research Project, Hackathon, and workshops, we create opportunities for collaboration and hands-on experience. Get involved!",
      photo: "/images/astrid-chavez-photo.jpg",
      isPresident: true,
    },
    {
      id: "co-president-2",
      name: "Nathan Padua",
      role: "Co-President",
      program: "Biochemistry & Neuroscience",
      year: "4th Year",
      bio: "Passionate about fostering interdisciplinary collaboration and creating opportunities for students in biotech and CS.",
      photo: "/images/nathan-padua-photo.jpg",
      isPresident: true,
    },
  ]

  const executiveTeam = [
    {
      id: "vpbtch",
      name: "Allisha Saini",
      role: "VP Biotechnology",
      program: "Environmental Science",
      year: "3rd Year",
      bio: "I am on a journey trying to figure out what I want to do with a STEM degree, and I realized now that there are so many options outside just medical school and research. I wanted to share these ideas with people who are still deciding on what to do after their undergrad.",
      photo: "/images/allisha-saini-photo.jpg",
      isPresident: false,
    },
    {
      id: "vpcs",
      name: "Aksshatt Bariar",
      role: "VP Computer Science",
      program: "Computer Science Specialist",
      year: "3rd Year",
      bio: "Organizing engaging workshops, panels, and networking events to connect students with industry professionals.",
      photo: "/images/aksshatt-bariar-photo.png",
      isPresident: false,
    },
    {
      id: "vpfin",
      name: "Camila Galarza",
      role: "VP Finance",
      program: "International Business",
      year: "Graduate",
      bio: "My name is Camila, I graduated in International Business and I currently work at TD Bank. I joined BACSA because I admire its innovative way of combining biotechnology and computer science, and I want to contribute my financial skills to support the club's growth!",
      photo: "/images/camila-galarza-photo.jpg",
      isPresident: false,
    },
  ]

  const additionalTeam = [
    {
      id: "vpia",
      name: "George Alexopoulos",
      role: "VP Internal Affairs",
      program: "Neuroscience Specialist",
      year: "4th Year",
      bio: "Hey everyone! My name is George and I'm a 4th year student at UTSC in the Specialist in Neuroscience program! This is my first year working with BACSA, and I'm excited to get involved with all the events planned for this year!",
      isPresident: false,
    },
    {
      id: "vpmark",
      name: "Camila Bolio Ramírez",
      role: "VP Marketing",
      program: "Neuroscience, Human Biology, & Psychology",
      year: "4th Year",
      bio: "As a Neuroscience, Human Biology, and Psychology student, I am passionate about interdisciplinary learning. Through BACSA, I aim to foster a supportive space for students to explore biotech and computer science, connect across campuses, and grow together.",
      photo: "/images/camila-bolio-photo.jpg",
      isPresident: false,
    },
    {
      id: "vprsch",
      name: "Jean Jung",
      role: "VP Research",
      program: "Bioinformatics & Computer Science & Immunology",
      year: "3rd Year",
      bio: "As VP of Research, I will lead the 2025_26 BACSA Research Project, creating opportunities that unite computer science and life science students at UofT. My focus is on academic rigor, mentorship, and collaboration while fostering a supportive community of student researchers.",
      photo: "/images/jean-jung-photo.jpg",
      isPresident: false,
    },
  ]

  const TeamMemberCard = ({ member }: { member: any }) => {
    return (
      <div className="group relative w-full h-80 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Front Side - Always Visible */}
        <div className="absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
          {member.photo ? (
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gradient-to-r from-blue-500 to-teal-400">
              <img
                src={member.photo || "/placeholder.svg"}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl">
                {member.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </span>
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{member.role}</p>
          <p className="text-sm text-gray-600 mb-1">{member.program}</p>
          <p className="text-sm text-gray-500">{member.year}</p>
        </div>

        {/* Back Side - Bio Only - Shows on Hover with Brand Colors */}
        <div
          className={`absolute inset-0 w-full h-full p-8 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            member.isPresident
              ? "bg-bacsa-mountain-meadow" // Light green for presidents
              : "bg-bacsa-cloud-burst" // Dark blue for other executives
          }`}
        >
          <p className="text-lg leading-relaxed drop-shadow-sm font-medium">{member.bio}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of students is committed to advancing the intersection of biotechnology and computer
              science at the University of Toronto.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                BACSA exists to bridge the gap between biotechnology and computer science, creating a vibrant community
                where students can explore the intersection of these rapidly evolving fields.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide opportunities for academic growth, professional development, and meaningful connections that
                prepare our members for successful careers in bioinformatics, computational biology, healthcare
                technology, and beyond.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <Image
                    src="/images/bacsa-bc-logo.png"
                    alt="BACSA BC Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation • People • Knowledge</h3>
                <p className="text-gray-600">
                  Our core values guide everything we do, from organizing events to supporting our members' growth.
                </p>
              </div>
            </div>
          </div>

          {/* Values - Updated with BACSA brand colors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className={`w-16 h-16 ${value.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the students leading BACSA's mission to bridge biotechnology and computer science
            </p>
          </div>

          {/* Co-Presidents Row - 2 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {coPresidents.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Executive Team Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {executiveTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Additional Team Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
