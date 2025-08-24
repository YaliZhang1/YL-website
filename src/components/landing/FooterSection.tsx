import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Code,
  Users,
  Search,
  Settings,
  ArrowUp,
  Heart,
  Globe,
} from "lucide-react";

export const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Custom Development", icon: Code, link: "/ourServices" },
    { name: "IT Outsourcing", icon: Settings, link: "/ourServices" },
    { name: "Executive Recruitment", icon: Search, link: "/ourServices" },
    { name: "System Design", icon: Users, link: "/ourServices" },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Docker",
  ];

  return (
    <footer className=" bg-nordic-bg text-nordic-text bg-gradient-to-b from-gray-50/50 to-white relative  overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-x-32 translate-y-32" />

      <div className="relative z-10">
        {/* 主要内容区域 */}
        {/* 底部装饰渐变 */}

        <div className="h-[1px] bg-nordic-bg bg-gradient-to-r from-blue-800/50 via-indigo-800/50 to-blue-800/50" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24  pt-20 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* 公司信息 */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 mb-6">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-700">
                    Nordic Tech
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Delivering world-class technology solutions with Scandinavian
                  excellence. Building the future, one line of code at a time.
                </p>

                {/* 联系方式 */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">hello@nordictech.com</span>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">+46 8 123 456 789</span>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-sm">Stockholm, Sweden</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 服务 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3" />
                Services
              </h3>
              <div className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Link key={index} to={service.link} className="group block">
                      <div className="flex items-center text-gray-600 group-hover:text-blue-600 transition-all duration-300">
                        <Icon className="w-4 h-4 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {service.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 快速链接 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.link} className="group block">
                    <span className="text-sm text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 inline-block transition-all duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 订阅区域 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3" />
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest tech insights and
                Nordic innovation stories.
              </p>

              {/* 订阅输入 */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all duration-300 text-sm pr-12"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                {isSubscribed && (
                  <div className="mt-3 text-sm text-green-600 flex items-center animate-fadeIn">
                    <Heart className="w-4 h-4 mr-2" />
                    Thank you for subscribing!
                  </div>
                )}
              </div>

              {/* 社交媒体 */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: Linkedin,
                      color: "hover:text-blue-600",
                      bg: "hover:bg-blue-50",
                    },
                    {
                      icon: Github,
                      color: "hover:text-gray-800",
                      bg: "hover:bg-gray-50",
                    },
                    {
                      icon: Twitter,
                      color: "hover:text-blue-400",
                      bg: "hover:bg-blue-50",
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div
                        key={index}
                        className={`p-3 bg-gray-50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 text-gray-500 ${social.color} ${social.bg}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 分割线 */}
        <div className="mx-8 md:mx-16 lg:mx-24 max-w-7xl ">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
        {/* 底部版权区域 */}
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 flex items-center">
              © 2025 Nordic Tech. Crafted with
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              in Stockholm
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors duration-300"
              >
                Terms of Service
              </Link>

              {/* 返回顶部按钮 */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
