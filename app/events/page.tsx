import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Events() {
  const upcomingEvents = [
    {
      title: "Social",
      date: "Wednesday, January 28, 2026",
      time: "TBD",
      location: "TBD",
      description:
        "Kick off the semester with BACSA! Join us for a casual social event to meet fellow students interested in biotechnology and applied sciences. Network, connect, and learn about upcoming opportunities.",
      type: "Social",
      capacity: "Open to all students",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "CS Workshop (Online)",
      date: "February 9-13, 2026",
      time: "TBD",
      location: "Online",
      description:
        "A virtual workshop introducing computational tools and programming concepts essential for biotechnology. Learn foundational skills in data analysis and coding applications for the life sciences.",
      type: "Workshop",
      capacity: "Open to all students",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Biotech Workshop",
      date: "Monday, February 23, 2026",
      time: "TBD",
      location: "TBD",
      description:
        "Dive into current biotechnology trends and innovations. This interactive workshop covers emerging topics like CRISPR, AI in genomics, and hands-on activities to explore real-world applications.",
      type: "Workshop",
      capacity: "Open to all students",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Hackathon",
      date: "Saturday, March 7, 2026",
      time: "TBD",
      location: "TBD",
      description:
        "Collaborate with peers to solve real-world biotechnology challenges in this exciting hackathon. Form teams, brainstorm innovative solutions, and compete for prizes while building valuable skills.",
      type: "Hackathon",
      capacity: "Open to all students",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Research Conference",
      date: "Saturday, March 21, 2026",
      time: "TBD",
      location: "TBD",
      description:
        "Showcase and celebrate student research in biotechnology and applied sciences. Present your work, hear from peers, and engage with faculty mentors at this annual research conference.",
      type: "Conference",
      capacity: "Open to all students",
      color: "bg-blue-100 text-blue-800",
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
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-[520px]"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${event.color}`}>{event.type}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 min-h-[3.5rem] flex items-center">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed flex-1 min-h-[6rem]">{event.description}</p>

                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{event.capacity}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
