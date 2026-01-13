"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const industries = [
  { value: "automotive", label: "Automotive / EV Manufacturing" },
  { value: "aerospace", label: "Aerospace & Aviation" },
  { value: "medical", label: "Life Sciences & Medical Devices" },
  { value: "energy", label: "Energy & Clean Tech" },
  { value: "electronics", label: "Electronics & Semiconductors" },
  { value: "other", label: "Other Manufacturing" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you! We'll be in touch within 24 hours.", {
      description: "Check your email for confirmation.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <Input
            id="name"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(919) 555-0123"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-700">
            Company Name *
          </label>
          <Input
            id="company"
            required
            placeholder="Your Manufacturing Co."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="industry" className="text-sm font-medium text-slate-700">
          Industry *
        </label>
        <Select
          value={formData.industry}
          onValueChange={(value) => setFormData({ ...formData, industry: value })}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry.value} value={industry.value}>
                {industry.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          How can we help? *
        </label>
        <Textarea
          id="message"
          required
          placeholder="Tell us about your manufacturing challenges and goals..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-red-600 hover:bg-red-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Schedule My Free Assessment"
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to be contacted about our services.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
