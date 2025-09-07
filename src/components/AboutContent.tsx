import { useState, useEffect } from "react";
import {
  Users,
  Target,
  Lightbulb,
  MapPin,
  Calendar,
  Heart,
  Code2,
  Shield,
  Globe,
  Cloud,
  Star,
} from "lucide-react";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40, y: 30 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40, y: 30 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const transition = {
  type: "spring" as const,
  stiffness: 60,
  damping: 20,
};
export const AboutContent = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on quality. Every line of code is crafted with precision and tested thoroughly to ensure reliability and performance.",
      color: "from-blue-500 to-indigo-500",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "Technology should serve people, not the other way around. We design solutions that enhance human experiences and create meaningful connections.",
      color: "from-blue-500 to-indigo-500 ",
      bgImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We embrace cutting-edge technologies and methodologies to solve complex problems and push the boundaries of what's possible.",
      color: "from-blue-500 to-indigo-500",
      bgImage:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description:
        "Every project contributes to a better tomorrow. We consider environmental impact and long-term sustainability in all our decisions.",
      color: "from-blue-500 to-indigo-500",
      bgImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Founded in Stockholm",
      description:
        "Started with a vision to bring Nordic design principles to the tech world",
      icon: Calendar,
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    },
    {
      year: "2012",
      title: "First Major Client",
      description: "Delivered our first IT solution for a Fortune 500 company",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    },
    {
      year: "2016",
      title: "Nordic Expansion",
      description: "Expanded operations across Denmark, Norway, and Finland",
      icon: MapPin,
      image: "/img/flags.jpg",
    },
    {
      year: "2020",
      title: "Remote-First Culture",
      description:
        "Pioneered distributed work model before it became mainstream",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    },
    {
      year: "2023",
      title: "AI Innovation Lab",
      description:
        "Launched dedicated R&D division focusing on AI and machine learning",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    },
    {
      year: "2025",
      title: "Global Cloud Platform",
      description:
        "Launched our own scalable cloud platform serving clients worldwide with secure and efficient infrastructure",
      icon: Cloud,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: Calendar },
    { number: "200+", label: "Projects Delivered", icon: Code2 },
    { number: "50+", label: "Happy Clients", icon: Heart },
    { number: "25", label: "Team Members", icon: Users },
  ];

  const team = [
    {
      name: "Mattias Hjortzberg",
      role: "Founder & CEO",
      bio: "15+ years building scalable solutions. Passionate about Nordic design and sustainable technology.",
      image:
        "/img/Mattias.png",
    },
    {
      name: "Erik Larsson",
      role: "CTO",
      bio: "Full-stack architect with expertise in cloud infrastructure and modern development practices.",
      image: "/img/Erik.png",
    },
    {
      name: "Magnus Olsson",
      role: "Head of Design",
      bio: "UX/UI specialist focused on creating intuitive and beautiful user experiences.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Yali",
      role: "Lead Developer",
      bio: "Senior engineer specializing in React, Node.js, and cloud-native architectures.",
      image:
        "/img/yali.png",
    },
  ];

  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!visibleStats) return;

      const startTime = Date.now();
      const endValue = parseInt(end.replace(/\D/g, ""));

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        setCount(Math.floor(progress * endValue));

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [visibleStats, end, duration]);

    return <span>{end.replace(/\d+/, count.toString())}</span>;
  };

  return (
    <>
      {" "}
      <main
        className="relative  min-h-screen overflow-hidden text-text nordic-bg nordic-text"
       
      >
        {/* Hero Section with Background */}
        <FadeInWhenVisible variants={fadeUp}>
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=800&fit=crop&crop=center&auto=format&q=80"
                alt="Nordic landscape"
                className="w-full h-full object-cover  dark:opacity-60"
              />
              <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-nordic-bg/30 via-transparent to-nordic-bg dark:from-nordic-bg/50 dark:to-nordic-bg" />
            </div>

            <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pt-20 pb-32">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="pt-24">
                  <h1 className="text-5xl  md:text-6xl font-bold  mb-8 leading-tight">
                    Crafting Digital
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                      Excellence
                    </span>
                  </h1>

                  <p className="text-xl  mb-8 leading-relaxed">
                    We're a Stockholm-based technology company that combines
                    Scandinavian design principles with cutting-edge development
                    practices to create solutions that are both beautiful and
                    functional.
                  </p>
                </div>

                <div className="relative pt-24">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
        {/* Stats Section */}
        <FadeInWhenVisible variants={fadeLeft}>
          <div className="py-20 relative ">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-4xl font-bold text-nordic-secondary bg mb-2">
                        <Counter end={stat.number} />
                      </div>
                      <div className="text-nordic-muted">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Values Section with Background Images */}
        <FadeInWhenVisible variants={fadeRight}>
          <div className="py-16  relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=800&fit=crop&crop=center&auto=format&q=80"
                alt="Values background"
                className="w-full h-full object-cover opacity-10 dark:opacity-[0.1]"
              />
            </div>

            <div className="container mx-auto px-8   md:px-16 lg:px-24  relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl text-text md:text-5xl font-bold  mb-6">
                  What Drives Us
                </h2>
                <p className="text-xl   text-nordic-muted mx-auto">
                  Our values aren't just words on a wall. They guide every
                  decision we make and every solution we create.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className={`group relative overflow-hidden bg-white/90 dark:bg-black/30 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-lg shadow-gray-900/5 dark:shadow-black/20   hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                        activeValue === index
                          ? "ring-2 ring-blue-200 dark:ring-blue-500/50 shadow-blue-500/20 dark:shadow-blue-400/20"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveValue(index)}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                        <img
                          src={value.bgImage}
                          alt={value.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="relative z-10 p-8">
                        <div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold  mb-4 group-hover:text-blue-700 transition-colors duration-300">
                          {value.title}
                        </h3>

                        <p className="text-gray-600 text-nordic-muted leading-relaxed group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Enhanced Timeline Section */}

        <div className="py-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop&crop=center&auto=format&q=80"
              alt="Timeline background"
              className="w-full h-full object-cover opacity-5 dark:opacity-[0.2]"
            />
          </div>

          <div className="container mx-auto max-w-full px-28 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-text md:text-5xl font-bold  mb-6">
                15 Years of Innovation
              </h2>
              <p className="text-xl text-nordic-muted  mx-auto">
                From a small Stockholm startup to a Nordic technology leader,
                here's how we've grown and evolved over the years.
              </p>
            </div>

            <div className="relative">
              {/* Enhanced Timeline line with gradient */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-400 to-nordic-secondary opacity-90 dark:opacity-50 rounded-full shadow-lg" />
              <FadeInWhenVisible variants={containerVariants}>
                <motion.div className="space-y-16">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <FadeInWhenVisible
                        key={index}
                        variants={isEven ? fadeLeft : fadeRight}
                      >
                        <motion.div
                          transition={transition}
                          className={`relative flex items-center ${
                            isEven ? "justify-start" : "justify-end"
                          }`}
                        >
                          {/* Enhanced Timeline dot */}
                          <div className="absolute left-1 md:left-1/2 md:transform md:-translate-x-1/2  w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-90 dark:opacity-50 rounded-full border-4 border-white shadow-xl z-10">
                            <div className="absolute inset-1 bg-white rounded-full opacity-30" />
                          </div>
                          {/* Content with Image */}
                          <div
                            className={`w-full pl-16 md:pl-0 ${
                              isEven
                                ? "md:w-5/12 md:pr-6"
                                : "md:w-5/12 md:pl-6 md:ml-auto"
                            }`}
                          >
                            <div
                              className={`group bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-100/50 dark:border-gray-700  overflow-hidden shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 ${
                                isEven ? "text-right" : "text-left"
                              }`}
                            >
                              {/* Image Section */}
                              <div className="relative  h-48 sm:h-56 md:h-48 overflow-hidden">
                                <img
                                  src={milestone.image}
                                  alt={milestone.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/70" />

                                {/* Year Badge */}
                                <div
                                  className={`absolute top-[4rem] ${
                                    isEven
                                      ? "right-0"
                                      : "md:left-0 right-0 md:right-auto"
                                  } bg-nordic-cardBg/90 backdrop-blur-sm px-2 py-2 rounded-xl`}
                                >
                                  <span className="text-xl sm:text-2xl bg-white/60 dark:bg-black/60 px-4 py-1 rounded-lg font-bold text-blue-600 dark:text-blue-400">
                                    {milestone.year}
                                  </span>
                                </div>

                                {/* Icon */}
                                <div
                                  className={`absolute top-3 ${
                                    isEven
                                      ? "right-4"
                                      : "md:left-4 right-4 md:right-auto"
                                  } p-2  rounded-xl bg-white/35 dark:bg-black/60 text-blue-900 dark:text-blue-400 shadow-lg`}
                                >
                                  <Icon className="w-5 h-5" />
                                </div>
                              </div>

                              {/* Content Section */}
                              <div className="p-6 dark:bg-black/50">
                                <h3 className="text-2xl font-bold text-textHover mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                  {milestone.title}
                                </h3>
                                <p className="text-textHover leading-relaxed  transition-colors duration-300">
                                  {milestone.description}
                                </p>
                              </div>
                            </div>
                          </div>{" "}
                        </motion.div>
                      </FadeInWhenVisible>
                    );
                  })}
                </motion.div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>

        {/* Team Section with Background */}
        <FadeInWhenVisible variants={fadeUp}>
          <div className="py-20 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop&crop=center&auto=format&q=80"
                alt="Team background"
                className="w-full h-full object-cover opacity-10 dark:opacity-[0.2]"
              />{" "}
            </div>

            <div className="container mx-auto px-8 md:px-16 lg:px-24  relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl text-text md:text-5xl font-bold  mb-6">
                  Meet the Minds Behind the Magic
                </h2>
                <p className="text-lg sm:text-xl text-nordic-muted max-w-3xl mx-auto">
                  A diverse group of passionate professionals united by a shared
                  vision of creating exceptional digital experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white/30 dark:bg-black/30          cursor-pointer  backdrop-blur-sm rounded-3xl border border-gray-600/10 dark:border-gray-600 p-6 shadow-lg shadow-gray-900/5 dark:shadow-black/20 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl mx-auto object-cover  group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-2xl mx-auto bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 dark:bg-black/60       group-hover:opacity-0 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-xl font-bold  mb-1 group-hover:text-blue-700 transition-colors duration-300">
                      {member.name}
                    </h3>

                    <div className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </div>

                    <p className="text-nordic-muted text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {member.bio}
                    </p>

                    {/* Social links placeholder */}
                    <div className="flex justify-center space-x-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200">
                        <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </main>{" "}
    </>
  );
};
