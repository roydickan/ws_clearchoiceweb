import Link from "next/link";
import { services } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200">
      <div className="container py-8">
        {/* Links Grid - Apple Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
          <div>
            <h4 className="text-xs font-semibold text-black mb-4">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-xs text-gray-500 hover:text-black transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-xs text-gray-500 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gray-500 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-black mb-4">Industries</h4>
            <ul className="space-y-3">
              <li className="text-xs text-gray-500">Automotive</li>
              <li className="text-xs text-gray-500">Aerospace</li>
              <li className="text-xs text-gray-500">Life Sciences</li>
              <li className="text-xs text-gray-500">Energy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:roy@clearchoice.biz" className="text-xs text-gray-500 hover:text-black transition-colors">
                  roy@clearchoice.biz
                </a>
              </li>
              <li>
                <a href="tel:+19192059269" className="text-xs text-gray-500 hover:text-black transition-colors">
                  (919) 205-9269
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Apple Style */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Clear Choice Services, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
