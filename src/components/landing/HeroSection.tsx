
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ModalForm } from "@/components/ui/ModalForm";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const FloatingCard: React.FC<{
  children: React.ReactNode;
  delay?: number;
  rotation?: number;
  shadowColor?: string;
}> = ({
  children,
  delay = 0,
  rotation = 0,
  shadowColor = "rgba(109, 153, 219, 0.2)", // 使用nordic-primary的rgba值
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transform: `rotate(${rotation}deg) ${
          isVisible ? "translateY(0)" : "translateY(32px)"
        }`,
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(0deg) translateY(-4px)`;
        e.currentTarget.style.boxShadow = `0 20px 60px ${shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation}deg) translateY(0px)`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </div>
  );
};

// 动画按钮（使用 Tailwind 类）
const AnimatedButton: React.FC<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}> = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const baseClasses =
    "px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 flex items-center group";
  
  const primaryClasses = `${baseClasses} text-white hover:shadow-lg transform hover:scale-[1.02] bg-gradient-to-br from-nordic-primary to-nordic-secondary`;
  const secondaryClasses = `${baseClasses} border-2 border-nordic-primary text-nordic-primary bg-transparent hover:shadow-lg transform hover:scale-[1.02] hover:bg-nordic-primary hover:text-white transition-colors`;

  const classes = variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button
      className={`${classes} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"meeting" | "form">("form");
  const [formData, setFormData] = useState({ email: "", message: "" });

  const services = ["Custom Development", "IT Outsourcing", "System Design"];

  const openModal = (type: "meeting" | "form") => {
    setModalType(type);
    setShowModal(true);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ email: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nordic-bg text-nordic-text">
        {/* 背景圆形渐变装饰 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-nordic-primary to-nordic-secondary"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-nordic-secondary to-nordic-dark"
            style={{
              animation: "float 6s ease-in-out infinite reverse",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-nordic-light to-nordic-primary"
            style={{
              animation: "float 8s ease-in-out infinite",
              animationDelay: "4s",
            }}
          />
        </div>

        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[130rem] relative z-10">
          <motion.div className="space-y-6" {...fadeIn}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-20">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {services.map((t, i) => (
                    <span
                      key={`std-${i}`}
                      className="px-4 py-2 rounded-full text-sm font-light border border-nordic-primary/25 bg-nordic-primary/10 text-nordic-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-5xl md:text-7xl font-light leading-tight mb-12"
                  style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
                >
                  <span className="text-nordic-primary">
                    Precision in
                  </span>
                  <br />
                  <span className="font-medium text-nordic-secondary">
                    Technology
                  </span>
                </h1>

                <p
                  className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl text-nordic-muted"
                  style={{
                    animation: "fadeInUp 1s ease-out 0.6s forwards",
                  }}
                >
                  Swedish IT excellence through custom software development,
                  strategic outsourcing, and innovative solutions built with{" "}
                  <span className="font-medium text-nordic-text">
                    Nordic precision
                  </span>
                  .
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <AnimatedButton onClick={() => openModal("form")}>
                    Request Early Access
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </AnimatedButton>
                  <AnimatedButton variant="secondary">
                    View Our Work
                  </AnimatedButton>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-nordic-muted">
                  {[
                    "Free consultation",
                    "Proven results",
                    "Cancel anytime",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-nordic-primary" />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-6">
                  <FloatingCard
                    delay={800}
                    rotation={3}
                    shadowColor="rgba(109, 153, 219, 0.2)"
                  >
                    <div className="rounded-xl shadow-2xl p-8 text-center bg-nordic-cardBg">
                      <div className="text-4xl md:text-5xl font-light mb-3 text-nordic-primary">
                        500+
                      </div>
                      <div className="text-base font-light text-nordic-muted">
                        Projects Completed
                      </div>
                    </div>
                  </FloatingCard>
                  <FloatingCard
                    delay={600}
                    rotation={-3}
                    shadowColor="rgba(109, 153, 219, 0.2)"
                  >
                    <div className="rounded-xl shadow-2xl p-8 text-center bg-nordic-cardBg">
                      <div className="text-4xl md:text-5xl font-light mb-3 text-nordic-secondary">
                        99%
                      </div>
                      <div className="text-base font-light text-nordic-muted">
                        Client Satisfaction
                      </div>
                    </div>
                  </FloatingCard>
                  <FloatingCard
                    delay={600}
                    rotation={-3}
                    shadowColor="rgba(109, 153, 219, 0.2)"
                  >
                    <div className="rounded-xl shadow-2xl p-8 text-center bg-nordic-cardBg">
                      <div className="text-4xl md:text-5xl font-light mb-3 text-nordic-dark">
                        15+
                      </div>
                      <div className="text-base font-light text-nordic-muted">
                        Years Experience
                      </div>
                    </div>
                  </FloatingCard>
                  <FloatingCard
                    delay={800}
                    rotation={3}
                    shadowColor="rgba(109, 153, 219, 0.2)"
                  >
                    <div className="rounded-xl shadow-2xl p-8 text-center bg-nordic-cardBg">
                      <div className="text-4xl md:text-5xl font-light mb-3 text-nordic-primary">
                        150+
                      </div>
                      <div className="text-base font-light text-nordic-muted">
                        Happy Clients
                      </div>
                    </div>
                  </FloatingCard>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 局部样式：动画关键帧 */}
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
      </section>

      <ModalForm
        show={showModal}
        type={modalType}
        onClose={() => setShowModal(false)}
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};