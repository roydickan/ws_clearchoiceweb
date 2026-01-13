import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, services, industries } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Clear Choice<span className="text-red-600">.</span>
            </h3>
            <p className="text-sm text-slate-400">
              Empowering North Carolina&apos;s Manufacturing Renaissance
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Industries We Serve
            </h4>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry} className="text-sm">
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Strategic Partner: {siteConfig.partner.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Clear Choice Services, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
