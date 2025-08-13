import Navbar from "@/components/navbar/Navbar";
import Layout from "@/layouts/Layout";

export default function IntelligentRobotSystem () {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Layout>
        {" "}
        <Navbar />
        <main className="p-6">
          <h2 className="text-xl font-semibold">IntelligentRobotSystem</h2>
          <p className="mt-2">这是 IntelligentRobotSystem 页面示例。</p>
        </main>
      </Layout>
    </div>
  );
}
