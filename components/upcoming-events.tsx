"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      title: "Social",
      date: "Wednesday, January 28, 2026",
      time: "TBD",
      location: "TBD",
      description:
        "Kick off the semester with BACSA! Join us for a casual social event to meet fellow students interested in biotechnology and applied sciences. Network, connect, and learn about upcoming opportunities.",
      type: "Social",
      capacity: "Open to all students",
      color: "bg-bacsa-mountain-meadow/10 text-bacsa-mountain-meadow border-bacsa-mountain-meadow/20",
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
      color: "bg-bacsa-royal-blue/10 text-bacsa-royal-blue border-bacsa-royal-blue/20",
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
      color: "bg-bacsa-botticelli/10 text-bacsa-botticelli border-bacsa-botticelli/20",
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
      color: "bg-bacsa-mountain-meadow/10 text-bacsa-mountain-meadow border-bacsa-mountain-meadow/20",
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
      color: "bg-bacsa-royal-blue/10 text-bacsa-royal-blue border-bacsa-royal-blue/20",
    },
  ]

  const handleViewAllEvents = () => {
    window.location.href = "/events#upcoming-events"
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-title text-4xl md:text-5xl text-bacsa-cloud-burst mb-6">UPCOMING EVENTS</h2>
          <p className="brand-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JOIN US FOR WORKSHOPS, PANELS, AND NETWORKING EVENTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ height: "520px" }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Event Type Badge - Fixed Height */}
                <div className="flex items-center justify-between mb-6" style={{ height: "32px" }}>
                  <span className={`px-4 py-2 text-sm font-montserrat font-bold rounded-full border ${event.color}`}>
                    {event.type}
                  </span>
                </div>

                {/* Event Title - Fixed Height */}
                <div className="mb-4" style={{ height: "56px" }}>
                  <h3 className="brand-title text-xl text-bacsa-cloud-burst leading-tight line-clamp-2">
                    {event.title}
                  </h3>
                </div>

                {/* Event Description - Fixed Height */}
                <div className="mb-6" style={{ height: "120px" }}>
                  <p className="brand-body text-gray-600 leading-relaxed text-sm line-clamp-5">{event.description}</p>
                </div>

                {/* Event Details - Fixed Height */}
                <div className="space-y-3 text-sm text-gray-500 mb-8" style={{ height: "96px" }}>
                  <div className="flex items-center font-montserrat">
                    <Calendar className="h-4 w-4 mr-3 text-bacsa-mountain-meadow flex-shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center font-montserrat">
                    <Clock className="h-4 w-4 mr-3 text-bacsa-botticelli flex-shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                  <div className="flex items-center font-montserrat">
                    <MapPin className="h-4 w-4 mr-3 text-bacsa-royal-blue flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center font-montserrat">
                    <Users className="h-4 w-4 mr-3 text-bacsa-mountain-meadow flex-shrink-0" />
                    <span className="truncate">{event.capacity}</span>
                  </div>
                </div>

                {/* Register Button - Always at Bottom */}
                <div className="mt-auto">
                  <Button className="w-full bg-bacsa-gradient hover:opacity-90 text-white font-montserrat font-semibold rounded-lg h-12">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-bacsa-cloud-burst text-bacsa-cloud-burst hover:bg-bacsa-cloud-burst hover:text-white font-montserrat font-semibold rounded-lg bg-transparent"
            onClick={handleViewAllEvents}
          >
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
