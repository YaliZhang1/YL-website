import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropDownMenu {
  title: string;
  description: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);
  const [isMobileDropDownMenuOpen, setIsMobileDropDownMenuOpen] =
    useState<boolean>(false);

  const location = useLocation();

  const dropDownMenu: DropDownMenu[] = [
    {
      title: "Intelligent Robot System",
      description:
        "Self-service ordering, personalized recommendations, fast payment.",
      href: "/intelligent-robot-system",
    },
    {
      title: "Smart elderly care system",
      description: "Health monitoring, safety, social engagement.",
      href: "/smart-elderly-care",
    },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  const isDropdownActive = () => {
    return dropDownMenu.some((item) => location.pathname === item.href);
  };

  return (
    <>
      <nav className="h-20 fixed top-0 left-0 w-full z-[9999] shadow-sm text-lg  py-4 border-b border-nordic-primary/20 bg-nordic-bg">
        <div className="container w-full  mx-auto max-w-8xl px-8 sm:px-8 h-full">
          <div className="flex items-center justify-between w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-32"
            >
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                {/* <Link
                  to="/"
                  className="flex items-center gap-2 hover:opacity-80 transition-colors"
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                    className="h-8 w-8"
                    alt="Shadcn UI Navbar"
                  />
                </Link> */}
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden md:flex items-center gap-6">
                <Link
                  to="/"
                  className={cn(
                    "navbar-item",
                    isActiveRoute("/") &&
                      "text-nordic-primary bg-nordic-primary/10"
                  )}
                >
                  Home
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsDropDownMenuOpen(!isDropDownMenuOpen)}
                    className={cn(
                      "flex items-center gap-1 navbar-item",
                      isDropdownActive() &&
                        "text-nordic-primary bg-nordic-primary/10"
                    )}
                  >
                    Software Products
                    <ChevronDown
                      size={18}
                      className={`transition-transform text-nordic-primary ${
                        isDropDownMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropDownMenuOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-nordic-cardBg rounded-lg shadow-lg border border-nordic-primary/20 z-50"
                      style={{ width: "384px", padding: "12px" }}
                    >
                      <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                        {dropDownMenu.map((feature, index) => (
                          <Link
                            key={index}
                            to={feature.href}
                            className={cn(
                              "block rounded-md hover:bg-nordic-primary/10 transition-colors",
                              isActiveRoute(feature.href) &&
                                "bg-nordic-primary/20 border border-nordic-primary/30"
                            )}
                            style={{ padding: "12px" }}
                          >
                            <p
                              className={cn(
                                "font-semibold text-nordic-text mb-1 text-sm",
                                isActiveRoute(feature.href)
                                  ? "text-nordic-primary"
                                  : "text-nordic-text"
                              )}
                            >
                              {feature.title}
                            </p>
                            <p className="text-sm text-nordic-muted">
                              {feature.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/ourServices"
                  className={cn(
                    "navbar-item",
                    isActiveRoute("/ourServices") &&
                      "text-nordic-primary bg-nordic-primary/10"
                  )}
                >
                  Our Services
                </Link>
                <Link
                  to="/about"
                  className={cn(
                    "navbar-item",
                    isActiveRoute("/about") &&
                      "text-nordic-primary bg-nordic-primary/10"
                  )}
                >
                  About Us
                </Link>
              </div>
            </motion.div>

            {/* Right Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="hidden md:flex items-center gap-4">
                  <ThemeToggle />
                  <Link
                    to="/signin"
                    className={cn(
                      "text-lg px-4 py-2 font-medium border border-nordic-primary/30 rounded-md hover:bg-nordic-primary/10 hover:text-nordic-text transition-colors",
                      isActiveRoute("/signin")
                        ? "text-nordic-primary bg-nordic-primary/10"
                        : "text-nordic-muted"
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className={cn(
                      "btn-blue-big",
                      isActiveRoute("/contact") && "text-card opacity-65"
                    )}
                  >
                    Contact
                  </Link>
                </div>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden border border-nordic-primary/30 rounded-md hover:bg-nordic-primary/10 transition-colors"
                  style={{ padding: "8px" }}
                >
                  {isMenuOpen ? (
                    <X size={16} className="text-nordic-text" />
                  ) : (
                    <Menu size={16} className="text-nordic-text" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-nordic-bg z-50"
              style={{ padding: "16px" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-4">
                  {/* <Link to="/" className="flex items-center gap-2">
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                      className="h-8 w-8"
                      alt="Shadcnblocks"
                    />
                  </Link> */}
                  <Link
                    to="/"
                    className={cn(
                      "block font-medium hover:text-nordic-primary transition-colors",
                      isActiveRoute("/")
                        ? "text-nordic-primary"
                        : "text-nordic-text"
                    )}
                  >
                    Home
                  </Link>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="border border-nordic-primary/30 rounded-md hover:bg-nordic-primary/10 transition-colors"
                  style={{ padding: "8px" }}
                >
                  <X size={16} className="text-nordic-text" />
                </button>
              </div>

              <div className="space-y-4">
                <div
                  className="border-b border-nordic-primary/20"
                  style={{ paddingBottom: "16px" }}
                >
                  <button
                    onClick={() =>
                      setIsMobileDropDownMenuOpen(!isMobileDropDownMenuOpen)
                    }
                    className={cn(
                      "flex items-center justify-between w-full font-medium hover:text-nordic-primary transition-colors",
                      isDropdownActive()
                        ? "text-nordic-primary"
                        : "text-nordic-text"
                    )}
                    style={{ textAlign: "left", fontSize: "16px" }}
                  >
                    Software Products
                    <ChevronDown
                      size={16}
                      className={`transition-transform text-nordic-primary ${
                        isMobileDropDownMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isMobileDropDownMenuOpen && (
                    <div
                      className="mt-4 grid md:grid-cols-2"
                      style={{ gap: "8px" }}
                    >
                      {dropDownMenu.map((feature, index) => (
                        <Link
                          key={index}
                          to={feature.href}
                          className={cn(
                            "block rounded-md hover:bg-nordic-primary/10 transition-colors",
                            isActiveRoute(feature.href) &&
                              "bg-nordic-primary/20"
                          )}
                          style={{ padding: "12px" }}
                        >
                          <p
                            className={cn(
                              "font-semibold mb-1",
                              isActiveRoute(feature.href)
                                ? "text-nordic-primary"
                                : "text-nordic-text"
                            )}
                          >
                            {feature.title}
                          </p>
                          <p className="text-sm text-nordic-muted">
                            {feature.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <Link
                    to="/ourServices"
                    className={cn(
                      "block font-medium hover:text-nordic-primary transition-colors",
                      isActiveRoute("/ourServices")
                        ? "text-nordic-primary"
                        : "text-nordic-text"
                    )}
                    style={{ fontSize: "16px" }}
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/about"
                    className={cn(
                      "block font-medium hover:text-nordic-primary transition-colors",
                      isActiveRoute("/about")
                        ? "text-nordic-primary"
                        : "text-nordic-text"
                    )}
                    style={{ fontSize: "16px" }}
                  >
                    About Us
                  </Link>
                </div>

                <div className="space-y-4 flex flex-col">
                  <ThemeToggle />
                  <Link
                    to="/signin"
                    className={cn(
                      "text-lg flex justify-center w-24 font-medium border border-nordic-primary/30 rounded-md hover:bg-nordic-primary/10 hover:text-nordic-text transition-colors px-4 py-2",
                      isActiveRoute("/signin")
                        ? "text-nordic-primary bg-nordic-primary/10"
                        : "text-nordic-muted"
                    )}
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className={cn(
                      "btn-blue-small",
                      isActiveRoute("/contact") && "opacity-90"
                    )}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overlay */}
        {(isDropDownMenuOpen || isMenuOpen) && (
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => {
              setIsDropDownMenuOpen(false);
              setIsMenuOpen(false);
            }}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
