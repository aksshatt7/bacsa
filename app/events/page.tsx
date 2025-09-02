import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Guest Speaker Workshop",
      date: "September 30, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Guest Lecture + Networking event. Helps students think about different pathways they can take in biotech field. Features personal journey into biotech, current projects, and advice to students.",
      type: "Guest Speaker",
      capacity: "Open to all students",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Biotech Workshop",
      date: "October 4, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Interactive biotech workshop featuring case studies, current trends like CRISPR and AI in genomics, with hands-on activities and networking opportunities.",
      type: "Workshop",
      capacity: "Open to all students",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Bioinformatics with Python",
      date: "October 15, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Introduce participants to bioinformatics programming using Python, covering Biopython, parsing DNA/RNA/protein data, and handling FASTA files.",
      type: "Coding Workshop",
      capacity: "25-40 students",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "AI in Personalized Medicine",
      date: "November 19, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Explore how AI and machine learning are transforming diagnostics, patient care, and treatment personalization in modern medicine.",
      type: "Guest Lecture",
      capacity: "40-60 students",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Building ML Models for Biotech & Health",
      date: "February 2026",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Teach participants how to preprocess biomedical datasets and build basic ML models for health-related applications.",
      type: "Coding Workshop",
      capacity: "25-40 students",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Tech x Biotech Startups",
      date: "March 2026",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Highlight the intersection of CS and biotech, exploring entrepreneurship, digital health innovation, and synthetic biology.",
      type: "Guest Lecture",
      capacity: "40-60 students",
      color: "bg-green-100 text-green-800",
    },
  ]

  const pastEvents = [
    {
      title: "Machine Learning in Drug Discovery",
      date: "February 20, 2024",
      description: "Explored how ML algorithms are revolutionizing pharmaceutical research.",
      attendees: 45,
    },
    {
      title: "Genomics Data Analysis Workshop",
      date: "February 10, 2024",
      description: "Hands-on session with real genomic datasets and analysis tools.",
      attendees: 32,
    },
    {
      title: "Career Fair: Biotech & CS",
      date: "January 25, 2024",
      description: "Connected students with leading companies in biotechnology and computer science.",
      attendees: 120,
    },
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us for workshops, panels, hackathons, and networking events designed to advance your career in
              biotechnology and computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${event.color}`}>{event.type}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.capacity}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {event.attendees} attendees
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
