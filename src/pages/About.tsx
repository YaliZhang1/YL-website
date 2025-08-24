import Navbar from "@/components/navbar/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import Layout from "@/layouts/Layout";
import React, { useState, useEffect } from "react";
import { CTA } from "@/components/CTA";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Calendar,
  TrendingUp,
  Heart,
  Code2,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Star,
  Coffee,
} from "lucide-react";

export default function About() {
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
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description:
        "Technology should serve people, not the other way around. We design solutions that enhance human experiences and create meaningful connections.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "We embrace cutting-edge technologies and methodologies to solve complex problems and push the boundaries of what's possible.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description:
        "Every project contributes to a better tomorrow. We consider environmental impact and long-term sustainability in all our decisions.",
      color: "from-orange-500 to-red-500",
    },
  ];
  const milestones = [
    {
      year: "2009",
      title: "Founded in Stockholm",
      description:
        "Started with a vision to bring Nordic design principles to the tech world",
      icon: Calendar,
    },
    {
      year: "2012",
      title: "First Major Client",
      description:
        "Delivered our first enterprise solution for a Fortune 500 company",
      icon: Target,
    },
    {
      year: "2016",
      title: "Nordic Expansion",
      description: "Expanded operations across Denmark, Norway, and Finland",
      icon: MapPin,
    },
    {
      year: "2020",
      title: "Remote-First Culture",
      description:
        "Pioneered distributed work model before it became mainstream",
      icon: Globe,
    },
    {
      year: "2023",
      title: "AI Innovation Lab",
      description:
        "Launched dedicated R&D division focusing on AI and machine learning",
      icon: Lightbulb,
    },
    {
      year: "2025",
      title: "Carbon Neutral",
      description:
        "Achieved carbon neutrality across all operations and projects",
      icon: Shield,
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
      name: "Erik Andersson",
      role: "Founder & CEO",
      bio: "15+ years building scalable solutions. Passionate about Nordic design and sustainable technology.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Anna Lindqvist",
      role: "CTO",
      bio: "Full-stack architect with expertise in cloud infrastructure and modern development practices.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Magnus Olsson",
      role: "Head of Design",
      bio: "UX/UI specialist focused on creating intuitive and beautiful user experiences.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sofia Bergström",
      role: "Lead Developer",
      bio: "Senior engineer specializing in React, Node.js, and cloud-native architectures.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
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
    <div className="min-h-screen bg-gradient-to-b from-nordic-bg to-white dark:to-nordic-bg transition-colors duration-300">
      <Layout>
        <Navbar />
        <main className="relative overflow-hidden pt-24">
          {/* 背景装饰 */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-nordic-primary/20 dark:bg-nordic-primary/10 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-nordic-secondary/20 dark:bg-nordic-secondary/10 rounded-full blur-3xl translate-x-40" />

          <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl pt-20 pb-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 mb-8">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  About Us
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-text mb-8 leading-tight">
                  Crafting Digital
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                    Excellence
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We're a Stockholm-based technology company that combines
                  Scandinavian design principles with cutting-edge development
                  practices to create solutions that are both beautiful and
                  functional.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                    <span>Meet Our Team</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-blue-300 hover:text-blue-700 transition-all duration-300 flex items-center justify-center">
                    <Coffee className="w-5 h-5 mr-2" />
                    <span>Schedule a Coffee</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Nordic landscape placeholder */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
                    alt="Nordic landscape"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10" />

                  {/* Floating card */}
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          99%
                        </div>
                        <div className="text-sm text-gray-600">
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-20 relative">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        <Counter end={stat.number} />
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="py-20 bg-gradient-to-br from-gray-50/50 to-white relative overflow-hidden">
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 mb-6">
                  <Heart className="w-4 h-4 text-purple-600 mr-2" />
                  Our Values
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What Drives Us
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                      className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/50 p-8 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                        activeValue === index
                          ? "ring-2 ring-blue-200 shadow-blue-500/20"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveValue(index)}
                    >
                      <div className="relative z-10">
                        <div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                          {value.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>

                      {/* Background glow effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${value.color.replace(
                          "500",
                          "50"
                        )} transition-opacity duration-500`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="py-20 relative">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 mb-6">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  15 Years of Innovation
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 rounded-full" />

                <div className="space-y-16">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`relative flex items-center ${
                          isEven ? "justify-start" : "justify-end"
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10" />

                        {/* Content */}
                        <div className={`w-5/12 ${isEven ? "pr-16" : "pl-16"}`}>
                          <div
                            className={`group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100/50 p-6 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 ${
                              isEven ? "text-right" : "text-left"
                            }`}
                          >
                            <div
                              className={`flex items-center mb-4 ${
                                isEven ? "justify-end" : "justify-start"
                              }`}
                            >
                              <div
                                className={`p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg ${
                                  isEven ? "ml-3" : "mr-3"
                                }`}
                              >
                                <Icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <span className="text-2xl font-bold text-blue-600">
                                {milestone.year}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="py-20 bg-gradient-to-br from-gray-50/50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -translate-y-48" />

            <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 mb-6">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  Our Team
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Meet the Minds Behind the Magic
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A diverse group of passionate professionals united by a shared
                  vision of creating exceptional digital experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/50 p-6 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500 hover:-translate-y-2 text-center"
                  >
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-2xl mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 w-24 h-24 rounded-2xl mx-auto bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 group-hover:opacity-0 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                      {member.name}
                    </h3>

                    <div className="text-blue-600 font-medium mb-4">
                      {member.role}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {member.bio}
                    </p>

                    {/* Social links placeholder */}
                    <div className="flex justify-center space-x-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-200">
                        <Star className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <CTA />
        <FooterSection />
      </Layout>
    </div>
  );
}
