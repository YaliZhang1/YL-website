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
    <>
      {/* 内联样式确保基本布局 */}
      <style jsx>{`
        .navbar-container {
          padding: 16px 0;
          border-bottom: 1px solid #e5e7eb;
          width: 100%;
        }
        .navbar-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .navbar-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 60px;
        }
        .logo-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: 24px;
        }
        .action-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .desktop-buttons {
          display: none;
          align-items: center;
          gap: 16px;
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background: white;
          cursor: pointer;
        }
        
        /* 响应式 */
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
          .desktop-buttons {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
        
        .btn-primary {
          padding: 8px 16px;
          background: black;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .btn-outline {
          padding: 8px 16px;
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .nav-link {
          padding: 8px 12px;
          color: #374151;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }
        .nav-link:hover {
          color: #111827;
        }
      `}</style>

      <section className="navbar-container">
        <div className="navbar-content">
          <nav className="navbar-flex">
            {/* Logo */}
            <div className="logo-section">
              <a
                href="https://www.shadcnblocks.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                <img
                  src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                  style={{ height: '32px', width: '32px' }}
                  alt="Shadcn UI Navbar"
                />
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                  Shadcnblocks.com
                </span>
              </a>
            </div>

            {/* 中间导航 */}
            <div className="nav-links">
              {/* Features Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="nav-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  Features
                  <ChevronDown size={16} style={{ transform: isFeaturesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                
                {isFeaturesOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '8px',
                    width: '384px',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb',
                    padding: '12px',
                    zIndex: 50
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          style={{
                            display: 'block',
                            padding: '12px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s'
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          <p style={{ fontWeight: '600', color: '#111827', margin: '0 0 4px 0', fontSize: '14px' }}>
                            {feature.title}
                          </p>
                          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
                            {feature.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="nav-link">Products</a>
              <a href="#" className="nav-link">Resources</a>
              <a href="#" className="nav-link">Contact</a>
            </div>

            {/* 右侧按钮 */}
            <div className="action-buttons">
              {/* 桌面端按钮 */}
              <div className="desktop-buttons">
                <button className="btn-outline">Sign in</button>
                <button className="btn-primary">Start for free</button>
              </div>

              {/* 移动端菜单按钮 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </nav>

          {/* 移动端菜单 */}
          {isMenuOpen && (
            <div style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'white',
              zIndex: 50,
              padding: '16px'
            }}>
              {/* 移动端头部 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
                <a
                  href="https://www.shadcnblocks.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                    style={{ height: '32px', width: '32px' }}
                    alt="Shadcnblocks"
                  />
                  <span style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                    Shadcnblocks.com
                  </span>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    padding: '8px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    background: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* 移动端导航 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Features 手风琴 */}
                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
                  <button
                    onClick={() => setIsMobileFeaturesOpen(!isMobileFeaturesOpen)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#111827',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Features
                    <ChevronDown size={16} style={{ transform: isMobileFeaturesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  
                  {isMobileFeaturesOpen && (
                    <div style={{ marginTop: '16px', display: 'grid', gap: '8px', gridTemplateColumns: '1fr 1fr' }}>
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          style={{
                            display: 'block',
                            padding: '12px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s'
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                          <p style={{ fontWeight: '600', color: '#111827', margin: '0 0 4px 0', fontSize: '14px' }}>
                            {feature.title}
                          </p>
                          <p style={{ fontSize: '12px', color: '#6b7280', margin: '0' }}>
                            {feature.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="#" style={{ fontSize: '16px', fontWeight: '500', color: '#111827', textDecoration: 'none' }}>
                    Products
                  </a>
                  <a href="#" style={{ fontSize: '16px', fontWeight: '500', color: '#111827', textDecoration: 'none' }}>
                    Resources
                  </a>
                  <a href="#" style={{ fontSize: '16px', fontWeight: '500', color: '#111827', textDecoration: 'none' }}>
                    Contact
                  </a>
                </div>

                {/* 移动端按钮 */}
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <button style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#374151',
                    background: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    Sign in
                  </button>
                  <button style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'white',
                    background: 'black',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}>
                    Start for free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 点击外部关闭下拉菜单 */}
        {(isFeaturesOpen || isMenuOpen) && (
          <div 
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: 40
            }}
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

export default Navbar;