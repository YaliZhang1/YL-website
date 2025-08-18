import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServiceSection } from "@/components/landing/ServiceSection";
import Layout from "@/layouts/Layout";
import Tooltip from "@/components/ui/Tooltip";
import { toast } from "sonner";
import ThemeToggle from "@/components/ThemeToggle";



export default function Index() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Layout>
        <Navbar />
        <HeroSection/>
        <ServiceSection/>

        <main className="p-6">
          {/* 添加主题切换按钮 */}
          <div className="  text-brand-text">
            <h1 className="font-heading hover:text-brand-textHover">标题</h1>
            <p className="text-brand-secondary mt-2">这是一个段落</p>
            <button className="bg-brand-primary hover:bg-brand-primaryHover text-white px-4 py-2 rounded-lg mt-4">
              按钮
            </button>
            <h1 className=" font-heading hover  hover:text-brand-hover  ">
              IT 科技公司
            </h1>{" "}
            <div className="bg-red-800  p-4 rounded-lg">
              Tailwind CSS v4 正在工作！
            </div>
            <div className="bg-brand-bg text-brand-text">测试主题</div>
            <ThemeToggle />
          </div>

          <p className="text-light-secondaryText dark:text-dark-secondaryText mb-6">
            欢迎访问我们的网站！这里是技术创新的前沿。
          </p>

          <div className="space-y-4">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              onClick={() => toast.success("操作成功！")}
            >
              显示 Toast
            </button>

            <button className="block px-4 py-2 bg-light-primary text-white rounded hover:bg-light-primary/80 dark:bg-dark-primary dark:hover:bg-dark-primary/80 transition-colors">
              联系我们
            </button>

            <Tooltip label="这是提示">
              <button className="underline hover:no-underline transition-all">
                悬停我
              </button>
            </Tooltip>
          </div>
        </main>
      </Layout>
    </div>
  );
}
