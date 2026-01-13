"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-slate-900">
            Clear Choice<span className="text-orange-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border p-2 min-w-[240px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center space-x-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <Button asChild>
            <Link href="/contact">Get Assessment</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-slate-600 hover:text-slate-900"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Free Assessment
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
