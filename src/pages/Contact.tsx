import Navbar from "@/components/navbar/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import Layout from "@/layouts/Layout";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  User,
  Building,
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe,
  Heart,
  Linkedin,
  Github,
  Twitter,
  Coffee,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
      budget: "",
      timeline: "",
    });
  };

  const services = [
    "Custom Development",
    "IT Outsourcing",
    "Executive Recruitment",
    "System Design",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "€10k - €25k",
    "€25k - €50k",
    "€50k - €100k",
    "€100k - €250k",
    "€250k+",
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@nordictech.com",
      action: "Send Email",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+46 8 123 456 789",
      action: "Call Now",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Coffee,
      title: "Meet in Person",
      description: "Visit our Stockholm office",
      contact: "Kungsgatan 12, Stockholm",
      action: "Get Directions",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];
  return (
    <div className="min-h-screen pt-24 pb-16 bg-nordic-bg text-nordic-text relative overflow-hidden">
      <Layout>
        <Navbar />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl translate-x-32" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -translate-y-40" />

        <div className="relative z-10">
          {/* 头部区域 */}
          <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pt-20 pb-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold  mb-6 leading-tight">
                Let's Build
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mx-3">
                  Something Great
                </span>
                Together
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your vision into reality? We'd love to hear
                about your project and explore how we can help you achieve your
                goals.
              </p>
            </div>
          </div>

          {/* 主要内容区域 */}
          <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pb-20">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* 左侧 - 联系表单 */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/50 p-8 md:p-12 shadow-xl shadow-gray-900/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>

                  {isSubmitted && (
                    <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-xl flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <p className="text-green-800 font-medium">
                          Message sent successfully!
                        </p>
                        <p className="text-green-600 text-sm">
                          We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* 姓名 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField("")}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                            focusedField === "name"
                              ? "border-blue-300 ring-4 ring-blue-50 shadow-lg shadow-blue-500/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* 邮箱 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField("")}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                            focusedField === "email"
                              ? "border-blue-300 ring-4 ring-blue-50 shadow-lg shadow-blue-500/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* 公司 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField("")}
                          className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                            focusedField === "company"
                              ? "border-blue-300 ring-4 ring-blue-50 shadow-lg shadow-blue-500/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* 服务类型 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          handleInputChange("service", e.target.value)
                        }
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 appearance-none bg-white ${
                          focusedField === "service"
                            ? "border-blue-300 ring-4 ring-blue-50 shadow-lg shadow-blue-500/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* 预算 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 时间线 */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          handleInputChange("timeline", e.target.value)
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 消息 */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                        focusedField === "message"
                          ? "border-blue-300 ring-4 ring-blue-50 shadow-lg shadow-blue-500/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* 提交按钮 */}
                  <button
                    onClick={handleSubmit}
                    className="group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* 右侧 - 联系信息 */}
              <div className="space-y-8">
                {/* 联系方式 */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {method.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-gray-800">
                              {method.contact}
                            </p>
                            <div className="flex items-center mt-2 text-sm text-blue-600 group-hover:text-blue-700">
                              <span>{method.action}</span>
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 办公时间 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 shadow-lg shadow-gray-900/5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 mr-3">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 社交媒体 */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 shadow-lg shadow-gray-900/5">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Follow Us
                  </h3>
                  <div className="flex space-x-3">
                    {[
                      {
                        icon: Linkedin,
                        color: "hover:bg-blue-50 hover:text-blue-600",
                      },
                      {
                        icon: Github,
                        color: "hover:bg-gray-50 hover:text-gray-800",
                      },
                      {
                        icon: Twitter,
                        color: "hover:bg-blue-50 hover:text-blue-400",
                      },
                    ].map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <div
                          key={index}
                          className={`p-3 bg-gray-50 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 text-gray-500 ${social.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 快速响应承诺 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50 p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Quick Response Guarantee
                      </h4>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        We typically respond to all inquiries within 4 hours
                        during business hours. For urgent matters, don't
                        hesitate to call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </Layout>
    </div>
  );
}
