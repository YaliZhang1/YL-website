//#region
// import React, { useState, useEffect } from "react";
// import { ArrowRight, Code, Users, Search, Settings } from "lucide-react";
// import { GlowCard } from "@/components/ui/spotlight-card";
// import { motion } from "framer-motion";

// // 服务图标映射
// const whyUsIcons = {
//   "Custom Development": Code,
//   "IT Outsourcing": Settings,
//   "Executive Recruitment": Search,
//   "System Design": Users,
// };

// // 服务卡片组件
// const WhyUsCard: React.FC<{
//   whyUs: string;
//   index: number;
// }> = ({ whyUs, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const Icon = whyUsIcons[whyUs] || Code;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 800 + index * 100);
//     return () => clearTimeout(timer);
//   }, [index]);

//   return (
//     <div
//       className={`transition-all duration-800 ${
//         isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/*  用 GlowCard 包裹内容,这里的customGlowColor可以换成任何你喜欢的颜色比如：glowColor="nordic-primary"/glowColor="brand-primary"/customGlowColor="#6d99db" */}
//       <GlowCard customGlowColor="var(--nordic-dark)">
//         <div className="flex items-center space-x-4 p-6 rounded-lg">
//           <div className="flex-shrink-0">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center">
//               <Icon className="w-6 h-6 text-nordic-primary" />
//             </div>
//           </div>
//           <div className="flex-grow">
//             <h3 className="font-medium text-nordic-text group-hover:text-nordic-primary transition-colors duration-300">
//               {whyUs}
//             </h3>
//           </div>
//           <div className="flex-shrink-0">
//             <ArrowRight
//               className={`w-5 h-5 text-nordic-primary/60 transition-all duration-300 ${
//                 isHovered ? "translate-x-1 opacity-100" : "opacity-60"
//               }`}
//             />
//           </div>
//         </div>
//       </GlowCard>
//     </div>
//   );
// };

// export const WhyUsSection: React.FC = () => {
//   const whyUsOptions = [
//     "Custom Development",
//     "IT Outsourcing",
//     "Executive Recruitment",
//     "System Design",
//   ];

//   return (
//     <section className="py-16 bg-nordic-bg text-nordic-text relative">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[130rem]">
//         <h2 className="section-title text-nordic-text mb-16 overflow-visible">
//           <p className="mx-auto text-center leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-[37.5rem] lg:max-w-[60rem] tracking-tight">
//             Why Us
//           </p>
//         </h2>
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
//             {whyUsOptions.map((whyUs, index) => (
//               <motion.div className="h-full">
//                 <div className="p-6 flex flex-col justify-between h-full">
//                   <WhyUsCard index={index} whyUs={whyUs} key={whyUs} />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
//#endregion
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

        {/* 图标区域 */}
        <div className="relative z-10 mb-6">
          <div
            className={`
            inline-flex p-4 rounded-xl
            bg-gradient-to-br from-blue-50 to-indigo-50
            group-hover:from-blue-100 group-hover:to-indigo-100
            transition-all duration-300
            ${isHovered ? "scale-110" : ""}
          `}
          >
            <Icon className="w-7 h-7 text-blue-600" />
          </div>
        </div>

        {/* 内容区域 */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
            {advantage}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
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
    <section className="py-16  bg-nordic-bg text-nordic-text ">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24  relative z-10">
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
            <div key={advantage} className="h-full">
              <WhyChooseUsCard advantage={advantage} index={index} />
            </div>
          ))}
        </div>

        {/* 底部统计区域 */}
        <div className="mt-20 pt-12 border-t border-gray-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Nordic Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
