import Navbar from "@/components/navbar/Navbar";
import Layout from "@/layouts/Layout";
import { FooterSection } from "@/components/landing/FooterSection";
import { CTA } from "@/components/CTA";

import React, { useState, useEffect } from "react";
import {
  Code,
  Users,
  UserCheck,
  Settings,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom Development",
    description:
      "Bespoke software solutions tailored to your unique business requirements with Swedish precision and Nordic innovation.",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=faces,center&auto=format&q=80",
    features: [
      "Full-stack development",
      "Mobile applications",
      "Web platforms",
      "API development",
      "Legacy modernization",
    ],
    gradient: "from-nordic-primary to-nordic-secondary",
    hoverGradient: "hover:from-nordic-secondary hover:to-nordic-dark",
  },
  {
    id: 2,
    title: "IT Outsourcing",
    description:
      "Complete IT infrastructure management and support services delivered with Nordic reliability and excellence.",
    icon: Settings,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    features: [
      "24/7 monitoring",
      "Cloud management",
      "DevOps services",
      "Infrastructure scaling",
      "Security compliance",
    ],
    gradient: "from-nordic-secondary to-nordic-dark",
    hoverGradient: "hover:from-nordic-dark hover:to-nordic-darker",
  },
  {
    id: 3,
    title: "Executive Recruitment",
    description:
      "Strategic talent acquisition for technology leadership roles with deep understanding of Nordic work culture.",
    icon: UserCheck,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=faces,center&auto=format&q=80",
    features: [
      "C-level recruitment",
      "Tech leadership",
      "Cultural fit assessment",
      "Executive coaching",
      "Retention strategies",
    ],
    gradient: "from-nordic-dark to-nordic-darker",
    hoverGradient: "hover:from-nordic-darker hover:to-slate-900",
  },
  {
    id: 4,
    title: "System Design",
    description:
      "Architectural planning and system design services for scalable, maintainable, and efficient technology solutions.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    features: [
      "Solution architecture",
      "Scalability planning",
      "Performance optimization",
      "Security architecture",
      "Technology consulting",
    ],
    gradient: "from-nordic-primary/80 to-nordic-secondary/80",
    hoverGradient: "hover:from-nordic-primary hover:to-nordic-secondary",
  },
];

// Animation Service Card Component
const ServiceCard: React.FC<{
  service: (typeof services)[0];
  index: number;
}> = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: "var(--nordic-card-bg)",
        borderColor: "rgba(109, 153, 219, 0.2)",
      }}
    >
      {/* 背景渐变效果 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* 图片区域 */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* 图片上的渐变遮罩 */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`}
        />

        {/* 浮动图标 */}
        <div className="absolute top-6 left-6">
          <div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} ${service.hoverGradient} transition-all duration-300 group-hover:scale-110 shadow-lg backdrop-blur-sm bg-opacity-90`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* 服务编号 */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-medium text-lg">
          {String(service.id).padStart(2, "0")}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="relative p-8">
        <h3 className="text-2xl font-light text-nordic-text mb-4 group-hover:text-nordic-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-lg text-nordic-muted leading-relaxed mb-6 group-hover:text-nordic-text transition-colors duration-300">
          {service.description}
        </p>

        {/* 功能特性列表 */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-nordic-muted group-hover:text-nordic-text transition-colors duration-300"
            >
              <Check className="w-5 h-5 text-nordic-primary mr-3 flex-shrink-0" />
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>

       
      </div>

      {/* 装饰性光效 */}
      <div className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br from-nordic-primary/20 to-nordic-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    </div>
  );
};

// 浮动装饰元素
const FloatingDecoration: React.FC<{
  delay: number;
  position: { top: string; left: string };
}> = ({ delay, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-nordic-primary/5 to-nordic-secondary/5 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        top: position.top,
        left: position.left,
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}ms`,
      }}
    />
  );
};

export default function OurServices() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--nordic-bg)", color: "var(--nordic-text)" }}
    >
      <Layout>
        <Navbar />
        <main className="relative overflow-hidden pt-24">
          {/*Background decorative elements */}
          <FloatingDecoration
            delay={1000}
            position={{ top: "15%", left: "10%" }}
          />
          <FloatingDecoration
            delay={1500}
            position={{ top: "60%", right: "15%" }}
          />
          <FloatingDecoration
            delay={2000}
            position={{ top: "80%", left: "20%" }}
          />

          {/* 主要内容 */}
          <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[130rem] relative z-10 py-20">
            {/* 页面标题部分 */}
            <div className="text-center mb-20">
             

              {/* 主标题 */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
                <span className="text-nordic-primary">Precision-Driven</span>
                <br />
                <span className="font-medium text-nordic-secondary">
                  Solutions
                </span>
              </h1>

              {/* 副标题 */}
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto text-nordic-muted">
                Delivering world-class technology services with
                <span className="font-medium text-nordic-text">
                  {" "}
                  Swedish precision
                </span>{" "}
                and
                <span className="font-medium text-nordic-text">
                  {" "}
                  Nordic innovation
                </span>
                . From custom development to strategic consulting, we provide
                comprehensive solutions that drive your business forward.
              </p>
            </div>

            {/* 服务网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            
          </div>

          {/* 内联样式 */}
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}</style>
        </main>
        <CTA />
        <FooterSection />
      </Layout>
    </div>
  );
}
