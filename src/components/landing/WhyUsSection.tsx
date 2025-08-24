
import React, { useState, useEffect } from "react";
import {
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  Target,
} from "lucide-react";

// 优势图标映射
const whyChooseUsIcons = {
  "Proven Expertise": Award,
  "Nordic Quality": Shield,
  "Fast Delivery": Clock,
  "Personal Touch": HeartHandshake,
  "Innovation First": Lightbulb,
  "Results Focused": Target,
};

// 优势详细内容
const whyChooseUsContent = {
  "Proven Expertise":
    "15+ years delivering scalable solutions across Nordic markets with deep technical knowledge",
  "Nordic Quality":
    "Scandinavian standards of excellence, transparency, and sustainable development practices",
  "Fast Delivery":
    "Agile methodologies ensuring rapid deployment without compromising quality or reliability",
  "Personal Touch":
    "Direct communication with senior developers, no bureaucracy, just honest partnerships",
  "Innovation First":
    "Cutting-edge technologies and forward-thinking approaches to solve complex challenges",
  "Results Focused":
    "Data-driven solutions that deliver measurable business impact and long-term value",
};

// 优势卡片组件
const WhyChooseUsCard = ({ advantage, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = whyChooseUsIcons[advantage] || Award;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200 + index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        group relative p-8 rounded-2xl border border-gray-100/50 
        bg-gradient-to-br from-white/80 to-gray-50/30 backdrop-blur-sm
        hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-500/10
        transition-all duration-500 ease-out h-full
        ${isHovered ? "transform -translate-y-2" : ""}
      `}
      >
        {/* 背景光效 */}
        <div
          className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-blue-50/40 to-indigo-50/20
          transition-opacity duration-500
        `}
        />

        {/* 内容区域 */}
        <div className="relative z-10">
          <div className="flex flex-row mb-4 items-center space-x-3 ">
            <div
              className={`
            inline-flex p-3 rounded-xl
            bg-gradient-to-br from-blue-50 to-indigo-50
            group-hover:from-blue-100 group-hover:to-indigo-100
            transition-all duration-300
            ${isHovered ? "scale-110" : ""}
          `}
            >
              <Icon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="card-title  group-hover:text-blue-700 transition-colors duration-300">
              {advantage}
            </h3>
          </div>
          <p className="card-subtitle font-normal">
            {whyChooseUsContent[advantage]}
          </p>
        </div>

        {/* 底部装饰线 */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export const WhyUsSection = () => {
  const advantages = [
    "Proven Expertise",
    "Nordic Quality",
    "Fast Delivery",
    "Personal Touch",
    "Innovation First",
    "Results Focused",
  ];

  return (
    <section className="pt-16 pb-32 bg-nordic-bg text-nordic-text ">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto   relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-nordic-text mb-6 leading-tight">
            Built on
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mx-3">
              Nordic Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine Scandinavian design principles with cutting-edge
            technology to deliver solutions that are both beautiful and
            functional.
          </p>
        </div>

        {/* 卡片网格 */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={advantage} className="h-full card-title">
              <WhyChooseUsCard advantage={advantage} index={index} />
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};
