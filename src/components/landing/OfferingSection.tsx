import CardFlip from "@/components/ui/flip-card";
import { motion} from "framer-motion";
export function OfferingSection() {
  const cards = [
    {
      title: "Fast Development",
      subtitle: "Lower startup costs",
      description:
        "Assemble your product prototype with ready-to-use components.",
      features: [
        "Low Code",
        "Flexible Extension",
        "Quick Validation",
        "Time Saving",
      ],
      color: "#ff2e88",
      img: "img/fast-dev.jpg",
    },
    {
      title: "Performance Optimization",
      subtitle: "Smooth user experience",
      description: "Built-in optimization tools make your app run faster.",
      features: [
        "Lazy Loading",
        "On-Demand Bundling",
        "Responsive Layout",
        "High Performance Rendering",
      ],
      color: "#2563eb",
      img: "img/performance-optimization.jpg",
    },
    {
      title: "Scalability",
      subtitle: "Ready for future growth",
      description:
        "Modular design ensures your project can scale continuously.",
      features: [
        "Component-Based",
        "Plugin Support",
        "Easy Maintenance",
        "Extensible API",
      ],
      color: "#10b981",
      img: "img/scalability.jpg",
    },
    {
      title: "Secure & Reliable",
      subtitle: "Deploy with confidence",
      description:
        "Built-in security best practices protect your app and users.",
      features: [
        "Access Control",
        "Data Encryption",
        "Security Validation",
        "Auto Updates",
      ],
      color: "#f59e0b",
      img: "img/secure.jpg",
    },
  ];
  const cardsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className=" bg-sectionBg text-nordic-text  py-16">
      <h2 className="section-title text-text mb-16 overflow-visible mx-auto text-center leading-snug max-w-[90%] sm:max-w-[80%] md:max-w-[37.5rem] lg:max-w-[60rem] tracking-tight">
        <span className="color-section-title">
          Software
        </span>
        Custom Development
      </h2>
      <motion.div
        variants={cardsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container  max-w-[2000px] mx-auto px-4 grid grid-cols-1 gap-2 md:gap-1 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 place-items-stretch ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              className="w-[90%]  lg:[100%] xl:max-w-[660px] min-h-[600px] mx-auto flex"
            >
              <CardFlip key={index} {...card} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
