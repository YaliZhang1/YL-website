import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { OfferingSection } from "@/components/landing/OfferingSection";

import { WhyUsSection } from "@/components/landing/WhyUsSection";

import Layout from "@/layouts/Layout";
import Tooltip from "@/components/ui/Tooltip";
import { toast } from "sonner";
import ThemeToggle from "@/components/ThemeToggle";

export default function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Layout>
        <Navbar />
        <HeroSection />
        <OfferingSection />
        <WhyUsSection />
      </Layout>
    </div>
  );
}
