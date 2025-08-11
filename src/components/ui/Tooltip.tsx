import React, { useContext } from 'react'
import { TooltipContext } from './TooltipProvider'

export default function Tooltip({ children, label }: { children: React.ReactNode; label: string }) {
  const cfg = useContext(TooltipContext)

  return (
    <span className="relative group inline-block">
      {children}
      <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded">
        {label}
      </span>
    </span>
  )
}