"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Made Much Bigger and More Prominent */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/images/bacsa-logo-official.png"
                alt="BACSA - Biotechnology And Computer Science Association"
                className="h-16 w-auto object-contain transition-transform duration-200 hover:scale-105 drop-shadow-md"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Streamlined menu items */}
          <div className="hidden lg:flex items-center justify-end space-x-8 flex-1 ml-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              Home
            </Link>
             <Link
              href="/bacsahacks"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              BACSAHacks
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              About Us
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              Events
            </Link>
            <Link
              href="/magazine"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              Magazine
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-bacsa-mountain-meadow transition-colors duration-200 font-medium text-base brand-body"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-bacsa-mountain-meadow"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/bacsahacks"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                BACSAHacks
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/magazine"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                Magazine
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-bacsa-mountain-meadow hover:bg-gray-50 transition-colors duration-200 font-medium brand-body"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
