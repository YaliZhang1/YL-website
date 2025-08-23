import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Users, Search, Settings } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";

// 服务图标映射
const whyUsIcons = {
  "Custom Development": Code,
  "IT Outsourcing": Settings,
  "Executive Recruitment": Search,
  "System Design": Users,
};

// 服务卡片组件
const WhyUsCard: React.FC<{
  whyUs: string;
  index: number;
}> = ({ whyUs, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = whyUsIcons[whyUs] || Code;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800 + index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transition-all duration-800 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*  用 GlowCard 包裹内容,这里的customGlowColor可以换成任何你喜欢的颜色比如：glowColor="nordic-primary"/glowColor="brand-primary"/customGlowColor="#6d99db" */}
      <GlowCard customGlowColor="var(--nordic-dark)">
        <div className="flex items-center space-x-4 p-6 rounded-lg">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-nordic-primary" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="font-medium text-nordic-text group-hover:text-nordic-primary transition-colors duration-300">
              {whyUs}
            </h3>
          </div>
          <div className="flex-shrink-0">
            <ArrowRight
              className={`w-5 h-5 text-nordic-primary/60 transition-all duration-300 ${
                isHovered ? "translate-x-1 opacity-100" : "opacity-60"
              }`}
            />
          </div>
        </div>
      </GlowCard>
    </div>
  );
};

export const WhyUsSection: React.FC = () => {
  const whyUsOptions = [
    "Custom Development",
    "IT Outsourcing",
    "Executive Recruitment",
    "System Design",
  ];

  return (
    <section className="py-16 bg-nordic-bg text-nordic-text relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[130rem]">
        <h2 className="section-title text-nordic-text mb-16 overflow-visible">
          <p className="mx-auto text-center leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-[37.5rem] lg:max-w-[60rem] tracking-tight">
            Why Us
          </p>
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {whyUsOptions.map((whyUs, index) => (
              <motion.div className="h-full">
                <div className="p-6 flex flex-col justify-between h-full">
                  <WhyUsCard index={index} whyUs={whyUs} key={whyUs} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
