import Link from "next/link"
import { Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react"
import { LogoImage } from "./logo-image"

export function Footer() {
  return (
    <footer className="bg-bacsa-cloud-burst text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <LogoImage variant="white" size="lg" className="mb-6" />
            <p className="brand-body text-gray-300 mb-6 max-w-md leading-relaxed">
              THE BIOTECHNOLOGY AND COMPUTER SCIENCE ASSOCIATION AT THE UNIVERSITY OF TORONTO.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bacsa.uoft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bacsa-mountain-meadow transition-colors"
                aria-label="Follow BACSA on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/your-discord-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bacsa-mountain-meadow transition-colors"
                aria-label="Join BACSA Discord server"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/bacsa-uoft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bacsa-mountain-meadow transition-colors"
                aria-label="Follow BACSA on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/bacsa-uoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bacsa-mountain-meadow transition-colors"
                aria-label="View BACSA on GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Streamlined */}
          <div>
            <h3 className="brand-title text-lg mb-6 text-white">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="brand-body text-gray-300 hover:text-bacsa-mountain-meadow transition-colors"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="brand-body text-gray-300 hover:text-bacsa-mountain-meadow transition-colors"
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/magazine"
                  className="brand-body text-gray-300 hover:text-bacsa-mountain-meadow transition-colors"
                >
                  MAGAZINE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="brand-body text-gray-300 hover:text-bacsa-mountain-meadow transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="brand-title text-lg mb-6 text-white">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-center brand-body text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-bacsa-mountain-meadow" />
                bacsa.uoft@gmail.com
              </li>
              <li className="flex items-center brand-body text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-bacsa-botticelli" />
                University of Toronto
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bacsa-royal-blue mt-12 pt-8 text-center">
          <p className="brand-body text-gray-400 text-sm mb-2">
            &copy; {new Date().getFullYear()} BACSA - BIOTECHNOLOGY AND COMPUTER SCIENCE ASSOCIATION. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
