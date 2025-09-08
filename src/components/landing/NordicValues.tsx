import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  Target,
} from "lucide-react";

const whyChooseUsIcons = {
  "Proven Expertise": Award,
  "Nordic Quality": Shield,
  "Fast Delivery": Clock,
  "Personal Touch": HeartHandshake,
  "Innovation First": Lightbulb,
  "Results Focused": Target,
};

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

const WhyChooseUsCard = ({ advantage, index, triggerAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const Icon = whyChooseUsIcons[advantage] || Award;

  useEffect(() => {
    if (triggerAnimation && !shouldAnimate) {
      const timer = setTimeout(() => setShouldAnimate(true), 200 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [triggerAnimation, index, shouldAnimate]);

  return (
    <div
      className={`transition-all duration-700  transform ${
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        group relative p-8 rounded-2xl border border-gray-100/50 
        bg-gradient-to-br from-white/80 to-gray-50/30 dark:from-black/80 dark:to-gray-200/10  backdrop-blur-sm
        hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-500/10
        transition-all duration-500 ease-out h-full
        ${isHovered ? "transform -translate-y-2" : ""}
      `}
      >
        {/* Background light effect */}
        <div
          className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-blue-100/40 to-indigo-50/20
          transition-opacity duration-500
        `}
        />

        {/* Content Area */}
        <div className="relative z-10">
          <div className="flex flex-row mb-4 items-center space-x-3 ">
            <div
              className={`
            inline-flex p-3 rounded-xl
            bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950
            group-hover:from-blue-100 group-hover:to-indigo-100 
            transition-all duration-300
            ${isHovered ? "scale-110" : ""}
          `}
            >
              <Icon className="w-7 h-7 text-blue-600 " />
            </div>
            <h3 className="card-title  group-hover:text-blue-700 transition-colors duration-300">
              {advantage}
            </h3>
          </div>
          <p className="card-subtitle font-normal leading-relaxed">
            {whyChooseUsContent[advantage]}
          </p>
        </div>
      </div>
    </div>
  );
};

export function WhyUsSection() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const sectionRef = useRef(null);

  const advantages = [
    "Proven Expertise",
    "Nordic Quality",
    "Fast Delivery",
    "Personal Touch",
    "Innovation First",
    "Results Focused",
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerAnimation(true);
          }
        });
      },
      {
        threshold: 0.1, // Fires when 10% of the section enters the viewport
        rootMargin: "-50px 0px", // Optional: Adjust the trigger boundaries
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-32 bg-nordic-bg text-nordic-text "
    >
      {/* Background decoration*/}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto   relative z-10">
        {/* Title Area */}
        <div className="text-center mb-16">
          <h2 className="section-title text-text ">
            Built on
            <span className="color-section-title">Nordic Values</span>
          </h2>
          <p
            className={`text-base md:text-xl w-[90%]  lg:[100%] xl:max-w-5xl  text-nordic-muted  mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${
              triggerAnimation
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            We combine Scandinavian design principles with cutting-edge
            technology to deliver solutions that are both beautiful and
            functional.
          </p>
        </div>

        {/* Card Grid */}
        <div className=" mx-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={advantage} className="h-full card-title ">
              <WhyChooseUsCard
                advantage={advantage}
                index={index}
                triggerAnimation={triggerAnimation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
