import Navbar from "@/components/navbar/Navbar";
import Layout from "@/layouts/Layout";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Layout>
        {" "}
        <Navbar />
        <main className="p-6">
          <h2 className="text-xl font-semibold">Not Found</h2>
        </main>
      </Layout>
    </div>
  );
}
