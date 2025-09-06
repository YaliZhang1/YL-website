import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { OfferingSection } from "@/components/landing/OfferingSection";
import { WhyUsSection } from "@/components/landing/NordicValues";
import { FooterSection } from "@/components/FooterSection";
import { CTA } from "@/components/CTA";
import Layout from "@/layouts/Layout";

export default function Index() {
  return (
    <div
      className="relative min-h-screen "
      style={{ background: "var(--nordic-bg)", color: "var(--nordic-text)" }}
    >
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
