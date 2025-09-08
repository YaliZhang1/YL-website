import React, { useState, useEffect } from "react";
import { ArrowRight, Check, Code, X } from "lucide-react";
import { Link } from "react-router-dom";

// Floating technical symbol components
const FloatingSymbol: React.FC<{
  symbol: string;
  delay: number;
  position: { top: string; left: string };
  size?: string;
}> = ({ symbol, delay, position, size = "text-4xl" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute ${size} text-nordic-primary  transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        top: position.top,
        left: position.left,
        animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${delay}ms`,
      }}
    >
      {symbol}
    </div>
  );
};



export const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nordic-bg text-nordic-text pt-16 md:pt-16 lg:pt-0">
        {/* Background decoration - abstract geometric shapes */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
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
        </div>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-[130rem] relative z-10">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center py-20">
              {/* Left content */}
              <div className="z-50">
                <div
                  className="flex flex-wrap gap-3 mb-6"
                  style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
                >
                  {[
                    "Swedish IT Excellence",
                    "Nordic Precision",
                    "Innovation",
                  ].map((t, i) => (
                    <span
                      key={`tag-${i}`}
                      className="px-4 py-2 rounded-full text-base font-normal border border-nordic-primary bg-nordic-primary/30 text-nordic-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h1
                  className="text-5xl md:text-7xl font-light leading-tight mb-12"
                  style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
                >
                  <span className="text-nordic-primary">Precision in</span>
                  <br />
                  <span className="font-medium text-nordic-secondary">
                    Technology
                  </span>
                </h1>

                <p
                  className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl text-nordic-muted"
                  style={{
                    animation: "fadeInUp 1s ease-out 0.3s forwards",
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
                <div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
                >
                  <Link to="/contact" className="px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 flex items-center group text-white hover:shadow-lg transform hover:scale-[1.02] bg-gradient-to-br from-nordic-primary to-nordic-secondary">
                    Request Early Access
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/intelligent-robot-system" className="px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 flex items-center group border-2 border-nordic-primary text-nordic-primary bg-transparent hover:shadow-lg transform hover:scale-[1.02] hover:bg-nordic-primary hover:text-white transition-colors">
                    View Our Work
                  </Link>
                </div>

                <div
                  className="flex flex-wrap items-center gap-6 text-nordic-muted"
                  style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
                >
                  {[
                    "Free consultation",
                    "Proven results",
                    "Cancel anytime",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-nordic-primary" />
                      <span className="text-base">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右侧重新设计 */}
              <div className="relative">
                {/* 主要视觉元素 - 抽象的技术网格 */}
                <div className="relative w-full h-[600px]">
                  {/* 背景网格 */}
                  <div className="absolute  inset-0 opacity-30">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      <defs>
                        <pattern
                          id="grid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-nordic-primary"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* 浮动技术符号 */}
                  <FloatingSymbol
                    symbol="{ }"
                    delay={1000}
                    position={{ top: "10%", left: "20%" }}
                  />
                  <FloatingSymbol
                    symbol="</>"
                    delay={1200}
                    position={{ top: "25%", left: "45%" }}
                  />
                  <FloatingSymbol
                    symbol="( )"
                    delay={1400}
                    position={{ top: "45%", left: "15%" }}
                    size="text-4xl"
                  />
                  <FloatingSymbol
                    symbol="[ ]"
                    delay={1600}
                    position={{ top: "35%", left: "80%" }}
                    size="text-4xl"
                  />
                  <FloatingSymbol
                    symbol="= >"
                    delay={1800}
                    position={{ top: "65%", left: "45%" }}
                    size="text-4xl"
                  />

                  {/* 中心抽象图形 */}
                  <div
                    className="absolute top-56 right-0 transform -translate-x-1/5 -translate-y-1/5 z-0"
                    style={{
                      opacity: 0,
                      transform: "translate(-80%, -80%) scale(1.1)",
                      animation: "fadeInScale 1.2s ease-out 0.8s forwards",
                    }}
                  >
                    <div className="relative w-[5rem] h-[36rem]">
                      {/* 旋转的环形 */}
                      <div
                        className="absolute inset-0 border-2 border-[#EEEFF7] rounded-full"
                        style={{
                          animation: "spin 20s linear infinite",
                        }}
                      />
                      <div
                        className="absolute inset-4 border-2 border-nordic-secondary/90 rounded-full"
                        style={{
                          animation: "spin 15s linear infinite reverse",
                        }}
                      />
                      <div
                        className="absolute inset-8 border border-nordic-primary rounded-full"
                        style={{
                          animation: "spin 10s linear infinite",
                        }}
                      />

                      {/* 中心点 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-nordic-primary to-nordic-secondary rounded-full shadow-lg" />
                    </div>
                  </div>
                  {/* 四个方向的连接线 */}
                  {[0, 90, 180, 270].map((rotation, index) => (
                    <div
                      key={rotation}
                      className="absolute top-0 right-36 origin-center"
                      style={{
                        transform: `translate(-25%, -25%) rotate(${rotation}deg)`,
                        opacity: 0,
                        animation: `fadeInScale 0.8s ease-out ${
                          1.2 + index * 0.1
                        }s forwards`,
                      }}
                    >
                      <div className="w-24 h-0.5 bg-gradient-to-r from-nordic-primary/40 to-transparent" />
                      <div className="absolute -right-2 -top-2 w-4 h-4 bg-nordic-secondary rounded-full" />
                    </div>
                  ))}

                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      opacity: 0,
                      transform: "translate(-50%, -50%) scale(0.8)",
                      animation: "fadeInScale 1.2s ease-out 0.8s forwards",
                    }}
                  >
                    <div className="relative w-48 h-48">
                      <div
                        className="absolute inset-0 border-2 border-nordic-primary/20 rounded-full"
                        style={{
                          animation: "spin 20s linear infinite",
                        }}
                      />
                      <div
                        className="absolute inset-4 border-2 border-nordic-secondary/30 rounded-full"
                        style={{
                          animation: "spin 15s linear infinite reverse",
                        }}
                      />
                      <div
                        className="absolute inset-8 border border-nordic-primary/40 rounded-full"
                        style={{
                          animation: "spin 10s linear infinite",
                        }}
                      />
                      {/* 中心点 */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-nordic-primary to-nordic-secondary rounded-full shadow-lg" />
                    </div>
                  </div>
                  {[0, 90, 180, 270].map((rotation, index) => (
                    <div
                      key={rotation}
                      className="absolute top-1/2 left-1/2 origin-center "
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        opacity: 0,
                        animation: `fadeInScale 0.8s ease-out ${
                          1.2 + index * 0.1
                        }s forwards`,
                      }}
                    >
                      <div className="w-24 h-0.5 bg-gradient-to-r from-nordic-primary/40 to-transparent" />
                      <div className="absolute -right-2 -top-9 w-4 h-4 bg-nordic-primary rounded-full" />
                    </div>
                  ))}
                </div>

                {/* Data indicators - simplified display at the bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    opacity: 0,
                    transform: "translateY(30px)",
                    animation: "fadeInUp 0.8s ease-out 1.5s forwards",
                  }}
                >
                  <div className="grid grid-cols-4 gap-4 text-center ">
                    {[
                      { value: "500+", label: "Projects" },
                      { value: "99%", label: "Uptime" },
                      { value: "15+", label: "Years" },
                      { value: "150+", label: "Clients" },
                    ].map((stat, index) => (
                      <div key={stat.label} className="group">
                        <div className="text-xl md:text-3xl lg:text-5xl font-light text-nordic-primary mb-1 group-hover:text-nordic-secondary transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-lg lg:text-2xl text-nordic-muted font-light">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 样式 */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.8);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}</style>
      </section>

     
    </>
  );
};
