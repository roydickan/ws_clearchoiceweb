import { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Clear Choice Services",
  description:
    "Schedule your free manufacturing assessment. Get a clear picture of your OEM readiness and a prioritized roadmap to certification.",
};

const expectations = [
  "30-minute discovery call — We'll learn about your operation, goals, and challenges",
  "Readiness assessment — We'll identify your gaps and opportunities",
  "Custom roadmap — You'll receive a prioritized action plan",
  "No obligation — If we're not the right fit, we'll tell you",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let&apos;s Talk About Your Manufacturing Future
            </h1>
            <p className="text-lg text-slate-300">
              Your free assessment takes 30 minutes. You&apos;ll walk away with
              clarity on your OEM readiness, a prioritized roadmap, and specific
              opportunities in your target industries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Schedule Your Free Assessment
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5 text-orange-500" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5 text-orange-500" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>Mon-Fri: 8:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Calendar Embed Placeholder */}
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <p className="text-slate-600 mb-4">
                  Prefer to schedule directly?
                </p>
                <a
                  href={siteConfig.contact.scheduling}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                >
                  Open Scheduling Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
