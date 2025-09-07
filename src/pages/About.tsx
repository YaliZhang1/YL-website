import Navbar from "@/components/navbar/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { AboutContent } from "@/components/AboutContent";
import Layout from "@/layouts/Layout";
import { CTA } from "@/components/CTA";

export default function About() {
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
}


