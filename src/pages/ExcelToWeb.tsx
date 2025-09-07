import Navbar from "@/components/navbar/Navbar";
import Layout from "@/layouts/Layout";
import ExcelToWebContent from "@/components/ExcelToWebContent";
import { FooterSection } from "@/components/FooterSection";
import { CTA } from "@/components/CTA";

export default function ExcelToWeb() {
  return (
    <div
      className="relative min-h-screen nordic-bg nordic-text"
     
    >
      <Layout>
        <Navbar />
        <ExcelToWebContent />
        <CTA />
        <FooterSection />
      </Layout>
    </div>
  );
}
