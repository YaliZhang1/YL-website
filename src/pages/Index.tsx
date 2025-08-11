import React from 'react'
import Tooltip from '../components/ui/Tooltip'
import { toast } from 'sonner'

export default function Index() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">首页</h1>
      <div className="space-y-4">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={() => toast.success('操作成功！')}
        >
          显示 Toast
        </button>

        <Tooltip label="这是提示">
          <button className="underline">悬停我</button>
        </Tooltip>
      </div>
    </main>
  )
}