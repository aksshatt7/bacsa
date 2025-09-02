import { Download, ExternalLink, BookOpen, Video, FileText, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resources() {
  const documents = [
    {
      title: "BACSA Membership Guide",
      description: "Complete guide to joining and participating in BACSA activities.",
      type: "PDF",
      size: "2.3 MB",
      icon: FileText,
    },
    {
      title: "Bioinformatics Toolkit",
      description: "Essential tools and software for bioinformatics research.",
      type: "PDF",
      size: "1.8 MB",
      icon: BookOpen,
    },
    {
      title: "Career Pathways in Biotech",
      description: "Comprehensive overview of career opportunities in biotechnology.",
      type: "PDF",
      size: "3.1 MB",
      icon: FileText,
    },
  ]

  const links = [
    {
      title: "University of Toronto Bioinformatics",
      description: "Official UofT bioinformatics program information and resources.",
      url: "https://bioinformatics.utoronto.ca",
      category: "Academic",
    },
    {
      title: "Compute Canada",
      description: "High-performance computing resources for research.",
      url: "https://www.computecanada.ca",
      category: "Research",
    },
    {
      title: "BioConductor",
      description: "Open source software for bioinformatics and computational biology.",
      url: "https://bioconductor.org",
      category: "Tools",
    },
    {
      title: "Nature Biotechnology",
      description: "Leading journal in biotechnology research and applications.",
      url: "https://nature.com/nbt",
      category: "Publications",
    },
  ]

  const tutorials = [
    {
      title: "Introduction to Python for Bioinformatics",
      description: "Learn Python programming fundamentals for biological data analysis.",
      duration: "2 hours",
      level: "Beginner",
    },
    {
      title: "Machine Learning in Drug Discovery",
      description: "Apply ML techniques to pharmaceutical research and development.",
      duration: "3 hours",
      level: "Intermediate",
    },
    {
      title: "Genomic Data Analysis with R",
      description: "Statistical analysis of genomic datasets using R programming.",
      duration: "2.5 hours",
      level: "Intermediate",
    },
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our collection of guides, tools, tutorials, and useful links to support your journey in
              biotechnology and computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Documents & Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center mr-4">
                    <doc.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600">{doc.type}</span>
                    <p className="text-sm text-gray-500">{doc.size}</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{doc.description}</p>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Useful Links</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {links.map((link, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {link.category}
                  </span>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{link.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{link.description}</p>

                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Video Tutorials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tutorial.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {tutorial.duration}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tutorial.level === "Beginner" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tutorial.level}
                  </span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Video className="mr-2 h-4 w-4" />
                  Watch Tutorial
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
