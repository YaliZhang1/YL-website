import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// 备用样式常量 - 可以折叠隐藏
const FALLBACK_STYLES = `*, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; } .flex { display: flex !important; } .items-center { align-items: center !important; } .justify-between { justify-content: space-between !important; } .hidden { display: none !important; } .block { display: block !important; } .w-full { width: 100% !important; } .h-8 { height: 2rem !important; } .w-8 { width: 2rem !important; } .gap-2 { gap: 0.5rem !important; } .gap-4 { gap: 1rem !important; } .gap-6 { gap: 1.5rem !important; } .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; } .py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; } .px-3 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; } .py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; } .text-lg { font-size: 1.125rem !important; } .text-sm { font-size: 0.875rem !important; } .font-semibold { font-weight: 600 !important; } .font-medium { font-weight: 500 !important; } .text-gray-900 { color: rgb(17 24 39) !important; } .text-gray-700 { color: rgb(55 65 81) !important; } .text-gray-600 { color: rgb(75 85 99) !important; } .text-white { color: rgb(255 255 255) !important; } .bg-white { background-color: rgb(255 255 255) !important; } .bg-black { background-color: rgb(0 0 0) !important; } .bg-gray-50 { background-color: rgb(249 250 251) !important; } .border { border-width: 1px !important; } .border-b { border-bottom-width: 1px !important; } .border-gray-200 { border-color: rgb(229 231 235) !important; } .border-gray-300 { border-color: rgb(209 213 219) !important; } .rounded-md { border-radius: 0.375rem !important; } .rounded-lg { border-radius: 0.5rem !important; } .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important; } .max-w-7xl { max-width: 80rem !important; } .mx-auto { margin-left: auto !important; margin-right: auto !important; } .relative { position: relative !important; } .absolute { position: absolute !important; } .fixed { position: fixed !important; } .inset-0 { top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important; } .top-full { top: 100% !important; } .left-0 { left: 0 !important; } .mt-2 { margin-top: 0.5rem !important; } .mb-1 { margin-bottom: 0.25rem !important; } .mb-8 { margin-bottom: 2rem !important; } .mt-4 { margin-top: 1rem !important; } .mt-8 { margin-top: 2rem !important; } .grid { display: grid !important; } .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } .space-y-4 > * + * { margin-top: 1rem !important; } .flex-col { flex-direction: column !important; } .flex-shrink-0 { flex-shrink: 0 !important; } .z-40 { z-index: 40 !important; } .z-50 { z-index: 50 !important; } .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke !important; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important; transition-duration: 150ms !important; } .transition-transform { transition-property: transform !important; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important; transition-duration: 150ms !important; } .rotate-180 { transform: rotate(180deg) !important; } .cursor-pointer { cursor: pointer !important; } .hover\\:opacity-80:hover { opacity: 0.8 !important; } .hover\\:text-gray-900:hover { color: rgb(17 24 39) !important; } .hover\\:bg-gray-50:hover { background-color: rgb(249 250 251) !important; } .hover\\:bg-gray-800:hover { background-color: rgb(31 41 55) !important; } .hover\\:text-gray-700:hover { color: rgb(55 65 81) !important; } @media (min-width: 768px) { .md\\:hidden { display: none !important; } .md\\:flex { display: flex !important; } .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }`;

const NavbarClean = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);

  const features = [
    { title: "Dashboard", description: "Overview of your activity", href: "#" },
    { title: "Analytics", description: "Track your performance", href: "#" },
    { title: "Settings", description: "Configure your preferences", href: "#" },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    { title: "Storage", description: "Manage your files", href: "#" },
    { title: "Support", description: "Get help when needed", href: "#" },
  ];

  return (
    <>
      {/* 备用样式 - 确保 Tailwind 失效时的显示效果 */}
      <style dangerouslySetInnerHTML={{ __html: FALLBACK_STYLES }} />

      <section className="py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a
                href="https://www.shadcnblocks.com"
                className="flex items-center gap-2 hover:opacity-80 transition-colors"
              >
                <img
                  src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                  className="h-8 w-8"
                  alt="Shadcn UI Navbar"
                />
                <span className="text-lg font-semibold text-gray-900">
                  Shadcnblocks.com
                </span>
              </a>
            </div>

            {/* 导航菜单 */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative">
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Features
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isFeaturesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isFeaturesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    style={{ width: "384px", padding: "12px" }}
                  >
                    <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          className="block rounded-md hover:bg-gray-50 transition-colors"
                          style={{ padding: "12px" }}
                        >
                          <p className="font-semibold text-gray-900 mb-1 text-sm">
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

              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* 右侧按钮 */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="hidden md:flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Sign in
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                  Start for free
                </button>
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

          {/* 移动端菜单 */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-white z-50"
              style={{ padding: "16px" }}
            >
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
                  <span className="text-lg font-semibold text-gray-900">
                    Shadcnblocks.com
                  </span>
                </a>
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
                      setIsMobileFeaturesOpen(!isMobileFeaturesOpen)
                    }
                    className="flex items-center justify-between w-full font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ textAlign: "left", fontSize: "16px" }}
                  >
                    Features
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isMobileFeaturesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isMobileFeaturesOpen && (
                    <div
                      className="mt-4 grid md:grid-cols-2"
                      style={{ gap: "8px" }}
                    >
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          className="block rounded-md hover:bg-gray-50 transition-colors"
                          style={{ padding: "12px" }}
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
                  <a
                    href="#"
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="block font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    Contact
                  </a>
                </div>

                <div className="mt-8 space-y-4">
                  <button
                    className="w-full font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    style={{ padding: "12px 16px", fontSize: "16px" }}
                  >
                    Sign in
                  </button>
                  <button
                    className="w-full font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors"
                    style={{ padding: "12px 16px", fontSize: "16px" }}
                  >
                    Start for free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 遮罩层 */}
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
    </>
  );
};

export default NavbarClean;
