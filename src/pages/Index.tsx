import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { OfferingSection } from "@/components/landing/OfferingSection";

import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { FooterSection } from "@/components/landing/FooterSection";
import {CTA} from"@/components/CTA";
import Layout from "@/layouts/Layout";

export default function Index() {
  return (
    <div className="min-h-screen ">
      <Layout>
        <Navbar />
        <HeroSection />
        <OfferingSection />
        <WhyUsSection />
        <CTA />
        <FooterSection />
      </Layout>
    </div>
  );
}
