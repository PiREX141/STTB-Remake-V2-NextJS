import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sttb-dark-blue text-white">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About STTB</h3>
            <p className="text-sm text-gray-300 mb-4">
              Sekolah Tinggi Teologi Bandung is a leading theological seminary dedicated to training leaders for Christian ministry and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sttb-secondary-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sttb-secondary-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-sttb-secondary-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/history" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions/apply" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics/programs" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Programs & Degrees
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/academics/curriculum" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="text-gray-300 hover:text-sttb-secondary-blue transition-colors">
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-sttb-secondary-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Jl. Durian No. 38<br />
                  Bandung 40264<br />
                  West Java, Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sttb-secondary-blue flex-shrink-0" />
                <span className="text-gray-300">+62 22 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-sttb-secondary-blue flex-shrink-0" />
                <span className="text-gray-300">info@sttb.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sttb-primary-blue mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Sekolah Tinggi Teologi Bandung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
