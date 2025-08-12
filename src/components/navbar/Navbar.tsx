// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Link, useLocation } from "react-router-dom";

// interface NavbarProps {
//   className?: string;
//   mode?: "light" | "dark";
//   showMenuItems?: boolean;
// }

// export default function Navbar({
//   className,
//   showMenuItems = true,
// }: NavbarProps) {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

//   const navItems = [
//     { name: "Home", path: "/" },
//     {
//       name: "Products",
//       path: null,
//       subItems: [
//         { name: "Am I Compliant", path: "/am-i-compliant" },
//         { name: "DORA Supplier Aggregator", path: "https://dora.regnora.com/" },
//       ],
//     },
//     {
//       name: "Resources",
//       path: null,
//       subItems: [
//         { name: "Is ISO Just Bureaucracy?", path: "/iso" },
//         // { name: "What's Wrong With Compliance?", path: "/compliance" },
//       ],
//     },
//     { name: "About Us", path: "/about" },
//     { name: "Login", path: "https://app.regnora.com/" },
//     { name: "Contact", path: "/contact" },
//   ];

//   let logo: React.ReactNode;
//   let colorVisible: string;
//   let linkFontWeight: string;
//   let navClassName = className || "font-sans";

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setOpenSubMenu(null);
//   };

//   const toggleSubMenu = (itemName: string) => {
//     setOpenSubMenu(openSubMenu === itemName ? null : itemName);
//   };

//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//     setOpenSubMenu(null);
//   };

//   return (
//     <nav
//       className={cn(
//         " h-20 fixed top-0 left-0 w-full z-[9999] shadow-sm text-lg",
//         navClassName
//       )}
//     >
//       I'm navbar.
//     </nav>
//   );
// }
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);

  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics", 
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences", 
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className="py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
              className="h-8 w-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Shadcnblocks.com
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Features
                <ChevronDown className={`h-4 w-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFeaturesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50">
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <a
                        key={index}
                        href={feature.href}
                        className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <p className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
              Start for free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="p-4">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <a
                  href="https://www.shadcnblocks.com"
                  className="flex items-center gap-2"
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                    className="h-8 w-8"
                    alt="Shadcnblocks"
                  />
                  <span className="text-lg font-semibold tracking-tight text-gray-900">
                    Shadcnblocks.com
                  </span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                {/* Features Accordion */}
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setIsMobileFeaturesOpen(!isMobileFeaturesOpen)}
                    className="flex items-center justify-between w-full text-left text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    Features
                    <ChevronDown className={`h-4 w-4 transition-transform ${isMobileFeaturesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileFeaturesOpen && (
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <p className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <a href="#" className="block text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Products
                  </a>
                  <a href="#" className="block text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Resources
                  </a>
                  <a href="#" className="block text-base font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    Contact
                  </a>
                </div>

                {/* Mobile Action Buttons */}
                <div className="mt-8 space-y-4">
                  <button className="w-full px-4 py-3 text-base font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Sign in
                  </button>
                  <button className="w-full px-4 py-3 text-base font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                    Start for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(isFeaturesOpen || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsFeaturesOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </section>
  );
};

export default Navbar;