"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-xl">
      <div className="container flex h-12 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/ccmg-logo-450-red.png.webp"
            alt="Clear Choice Services"
            width={120}
            height={32}
            className="h-7 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation - Apple Style */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button className="text-xs font-normal text-white/80 hover:text-white transition-colors">
                  {item.name}
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 min-w-[280px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
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
                className="text-xs font-normal text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center">
          <Button 
            asChild 
            size="sm"
            className="bg-white text-black hover:bg-white/90 rounded-full text-xs px-4 h-8"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-black/95 backdrop-blur-xl border-none">
            <nav className="flex flex-col space-y-1 mt-12">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <span className="block px-4 py-3 text-lg font-medium text-white/60">
                      {item.name}
                    </span>
                    <div className="space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-2xl font-semibold text-white hover:text-red-500 transition-colors"
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
                    className="block px-4 py-3 text-2xl font-semibold text-white hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-8 px-4">
                <Button asChild className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 text-base">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
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
