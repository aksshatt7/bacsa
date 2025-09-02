"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      title: "Guest Speaker Workshop",
      date: "September 30, 2025",
      time: "5:00 PM - 7:00 PM",
      location: "TBD",
      description:
        "Guest Lecture + Networking event. Helps students think about different pathways they can take in biotech field with personal journey insights and career advice.",
      type: "Guest Speaker",
      capacity: "Open to all students",
      color: "bg-bacsa-mountain-meadow/10 text-bacsa-mountain-meadow border-bacsa-mountain-meadow/20",
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
      color: "bg-bacsa-botticelli/10 text-bacsa-botticelli border-bacsa-botticelli/20",
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
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-4 py-2 text-sm font-montserrat font-bold rounded-full border ${event.color}`}>
                    {event.type}
                  </span>
                </div>

                <h3 className="brand-title text-xl text-bacsa-cloud-burst mb-4">{event.title}</h3>

                <p className="brand-body text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                <div className="space-y-3 text-sm text-gray-500 mb-8">
                  <div className="flex items-center font-montserrat">
                    <Calendar className="h-4 w-4 mr-3 text-bacsa-mountain-meadow" />
                    {event.date}
                  </div>
                  <div className="flex items-center font-montserrat">
                    <Clock className="h-4 w-4 mr-3 text-bacsa-botticelli" />
                    {event.time}
                  </div>
                  <div className="flex items-center font-montserrat">
                    <MapPin className="h-4 w-4 mr-3 text-bacsa-royal-blue" />
                    {event.location}
                  </div>
                  <div className="flex items-center font-montserrat">
                    <Users className="h-4 w-4 mr-3 text-bacsa-mountain-meadow" />
                    {event.capacity}
                  </div>
                </div>

                <Button className="w-full bg-bacsa-gradient hover:opacity-90 text-white font-montserrat font-semibold rounded-lg">
                  Register Now
                </Button>
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
