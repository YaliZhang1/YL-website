// 一个非常简单的 TooltipProvider 占位实现，主要作用是为 Tooltip 组件提供统一配置。
import React, { createContext, ReactNode } from 'react'

type TooltipConfig = { delay?: number }
const defaultConfig: TooltipConfig = { delay: 200 }
export const TooltipContext = createContext<TooltipConfig>(defaultConfig)

export default function TooltipProvider({ children, config = defaultConfig }: { children: ReactNode; config?: TooltipConfig }) {
  return <TooltipContext.Provider value={config}>{children}</TooltipContext.Provider>
}