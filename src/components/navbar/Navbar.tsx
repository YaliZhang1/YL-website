import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// 定义 DropDownMenu 类型
interface DropDownMenu {
  title: string;
  description: string;
  href: string;
}

// 注意：如果使用本地资源，建议将 logo 放入 /public 或通过 import 引入
// 示例：import logo from './assets/shadcnblockscom-icon.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);
  const [isMobileDropDownMenuOpen, setIsMobileDropDownMenuOpen] =
    useState<boolean>(false);

  const dropDownMenu: DropDownMenu[] = [
    {
      title: "Intelligent Robot System",
      description:
        "Self-service ordering, personalized recommendations, fast payment.",
      href: "/intelligent-robot-system", // 如果需要，更新为有效路由
    },
    {
      title: "Smart elderly care system",
      description: "Health monitoring, safety, social engagement.",
      href: "/smart-elderly-care", // 如果需要，更新为有效路由
    },
  ];

  return (
    <>
      {/* 备用样式 - 确保 Tailwind 失效时的显示效果 */}
      {/* <style dangerouslySetInnerHTML={{ __html: FALLBACK_STYLES }} /> */}

      <section className="py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                className="flex items-center gap-2 hover:opacity-80 transition-colors"
              >
                <img
                  src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                  className="h-8 w-8"
                  alt="Shadcn UI Navbar"
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropDownMenuOpen(!isDropDownMenuOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Software Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isDropDownMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropDownMenuOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    style={{ width: "384px", padding: "12px" }}
                  >
                    <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                      {dropDownMenu.map((feature, index) => (
                        <Link
                          key={index}
                          to={feature.href}
                          className="block rounded-md hover:bg-gray-50 transition-colors"
                          style={{ padding: "12px" }}
                        >
                          <p className="font-semibold text-gray-900 mb-1 text-sm">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-600">
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
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="hidden md:flex items-center gap-4">
                <Link to="/signin" className="btn-light-big">
                  Login
                </Link>
                <Link to="/contact" className="btn-dark-big">
                  Contact
                </Link>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                style={{ padding: "8px" }}
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-white z-50"
              style={{ padding: "16px" }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col gap-4">
                  <Link to="/" className="flex items-center gap-2">
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                      className="h-8 w-8"
                      alt="Shadcnblocks"
                    />
                  </Link>
                  <Link
                    to="/"
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors
              "
                  >
                    Home
                  </Link>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  style={{ padding: "8px" }}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <div
                  className="border-b border-gray-200"
                  style={{ paddingBottom: "16px" }}
                >
                  <button
                    onClick={() =>
                      setIsMobileDropDownMenuOpen(!isMobileDropDownMenuOpen)
                    }
                    className="flex items-center justify-between w-full font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ textAlign: "left", fontSize: "16px" }}
                  >
                    Software Products
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
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
                          className="block rounded-md hover:bg-gray-50 transition-colors"
                          style={{ padding: "12px" }}
                        >
                          <p className="font-semibold text-gray-900 mb-1">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-600">
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
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/about"
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    About Us
                  </Link>
                </div>

                <div className=" space-y-4 flex flex-col ">
                  <Link to="/signin" className="btn-light-small">
                    Login
                  </Link>
                  <Link to="/contact" className="btn-dark-small">
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
            className="fixed inset-0 z-40"
            onClick={() => {
              setIsDropDownMenuOpen(false);
              setIsMenuOpen(false);
            }}
          />
        )}
      </section>
    </>
  );
};

export default Navbar;
