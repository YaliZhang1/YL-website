import React from "react";
import Tooltip from "../components/ui/Tooltip";
import { toast } from "sonner";
import Layout from "../layouts/Layout";
import ThemeToggle from "../components/ThemeToggle";

export default function Index() {
  return (
   <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Layout>
        <main className="p-6">
          {/* 添加主题切换按钮 */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-light-primary dark:text-dark-primary">
              IT 科技公司
            </h1>
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
