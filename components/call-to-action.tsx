import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Connect with fellow students, attend exclusive events, and advance your career in biotechnology and computer
          science.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Become a Member
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  )
}
