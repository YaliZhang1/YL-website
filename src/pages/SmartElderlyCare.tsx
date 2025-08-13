import Navbar from "@/components/navbar/Navbar";
import Layout from "@/layouts/Layout";

export default function SmartElderlyCare() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Layout>
        {" "}
        <Navbar />
        <main className="p-6">
          <h2 className="text-xl font-semibold">SmartElderlyCare</h2>
          <p className="mt-2">这是 SmartElderlyCare 页面示例。</p>
        </main>
      </Layout>
    </div>
  );
}
