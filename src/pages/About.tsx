import Navbar from "@/components/navbar/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { AboutContent } from "@/components/AboutContent";
import Layout from "@/layouts/Layout";
import { CTA } from "@/components/CTA";
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
  Coffee,
  Container,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--nordic-bg)", color: "var(--nordic-text)" }}
    >
      <Layout>
        <Navbar />
        <AboutContent />
        <CTA />
        <FooterSection />
      </Layout>
    </div>
  );
};

export default About;
