"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Study Destinations",
    href: "/destinations",
    children: [
      { name: "Study in USA", href: "/study-in-usa" },
      { name: "Study in UK", href: "/study-in-uk" },
      { name: "Study in Canada", href: "/study-in-canada" },
      { name: "Study in Australia", href: "/study-in-australia" },
      { name: "Study in Germany", href: "/study-in-germany" },
      { name: "Study in Ireland", href: "/study-in-ireland" },
    ],
  },
  { name: "Universities", href: "/universities" },
  { name: "Services", href: "/services" },
  { name: "Test Prep", href: "/test-prep" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-charcoal-blue text-white py-2 text-sm">
        <div className="container-max flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@studyglobal.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Follow us:</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-soft-rose transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-soft-rose transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-soft-rose transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
        )}
      >
        <div className="container-max px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-slate-blue" />
              <span className="text-2xl font-bold gradient-text">
                StudyGlobal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-charcoal-blue hover:text-slate-blue font-medium transition-colors">
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-charcoal-blue hover:text-slate-blue hover:bg-gray-50 transition-colors font-medium"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-charcoal-blue hover:text-slate-blue font-medium transition-colors",
                        pathname === item.href && "text-slate-blue"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/evaluate">
                <Button
                  variant="outline"
                  className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                >
                  Free Evaluation
                </Button>
              </Link>
              <Link href="/book">
                <Button className="bg-slate-blue hover:bg-slate-blue/90">
                  Book Counseling
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-charcoal-blue hover:text-slate-blue font-medium transition-colors",
                        pathname === item.href && "text-slate-blue"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-sm text-gray-600 hover:text-slate-blue transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  <Link href="/evaluate">
                    <Button
                      variant="outline"
                      className="w-full border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                    >
                      Free Evaluation
                    </Button>
                  </Link>
                  <Link href="/book">
                    <Button className="w-full bg-slate-blue hover:bg-slate-blue/90">
                      Book Counseling
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
