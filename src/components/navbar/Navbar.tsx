import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  className?: string;
  mode?: "light" | "dark";
  showMenuItems?: boolean;
}

export default function Navbar({
  className,
  showMenuItems = true,
}: NavbarProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: null,
      subItems: [
        { name: "Am I Compliant", path: "/am-i-compliant" },
        { name: "DORA Supplier Aggregator", path: "https://dora.regnora.com/" },
      ],
    },
    {
      name: "Resources",
      path: null,
      subItems: [
        { name: "Is ISO Just Bureaucracy?", path: "/iso" },
        // { name: "What's Wrong With Compliance?", path: "/compliance" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Login", path: "https://app.regnora.com/" },
    { name: "Contact", path: "/contact" },
  ];

  let logo: React.ReactNode;
  let colorVisible: string;
  let linkFontWeight: string;
  let navClassName = className || "font-sans";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (itemName: string) => {
    setOpenSubMenu(openSubMenu === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  return (
    <nav
      className={cn(
        " h-20 fixed top-0 left-0 w-full z-[9999] shadow-sm text-lg",
        navClassName
      )}
    >
      I'm navbar.
    </nav>
  );
}
