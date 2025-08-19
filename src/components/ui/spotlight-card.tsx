// 本组件可以复用
import React, { useEffect, useRef, ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?:
    | "blue"
    | "purple"
    | "green"
    | "red"
    | "orange"
    | "nordic-primary"
    | "nordic-secondary"
    | "brand-primary";
  customGlowColor?: string;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  // 添加我的自定义颜色
  "nordic-primary": { base: 210, spread: 250, cssVar: "var(--nordic-primary)" },
  "nordic-secondary": {
    base: 200,
    spread: 200,
    cssVar: "var(--nordic-secondary)",
  },
  "brand-primary": { base: 220, spread: 180, cssVar: "var(--color-text)" },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

// 辅助函数：将 hex 转换为 HSL
const hexToHsl = (hex: string) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r / 255:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g / 255:
        h = (b - r) / d + 2;
        break;
      case b / 255:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  customGlowColor,
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  // 处理颜色逻辑
  let base = 220;
  let spread = 200;
  let useCustomColor = false;
  let customColorValue = "";

  if (customGlowColor) {
    useCustomColor = true;
    customColorValue = customGlowColor;

    // 如果是 hex 颜色，转换成 HSL
    if (customGlowColor.startsWith("#")) {
      const hsl = hexToHsl(customGlowColor);
      base = hsl.h;
      spread = 200;
    } else {
      // 如果是 CSS 变量，使用默认值
      base = 220;
      spread = 250;
    }
  } else {
    // 使用模板之前预定义的颜色
    const colorConfig = glowColorMap[glowColor];
    base = colorConfig.base;
    spread = colorConfig.spread;

    // 如果是自定义的 nordic 或 brand 颜色
    if (colorConfig.cssVar) {
      useCustomColor = true;
      customColorValue = colorConfig.cssVar;
    }
  }

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ""; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties = {
      "--base": base,
      "--spread": spread,
      "--radius": "14",
      "--border": "3",
      "--backdrop": "hsl(0 0% 60% / 0.12)",
      "--backup-border": "var(--backdrop)",
      "--size": "200",
      "--outer": "1",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      position: "relative" as const,
      touchAction: "none" as const,
      border: "var(--border-size) solid var(--backup-border)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
    } as React.CSSProperties;

    // 设置背景图像
    if (useCustomColor && customColorValue.startsWith("var(")) {
      // 对于 CSS 变量，创建特殊的渐变
      baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        color-mix(in srgb, ${customColorValue} 10%, transparent), transparent
      )`;
    } else {
      // 对于常规颜色和 hex 值
      baseStyles.backgroundImage = `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`;
    }

    baseStyles.backgroundColor = "var(--backdrop, transparent)";

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const getBeforeAfterStyles = () => {
    const baseBeforeAfterStyles = `
      [data-glow]::before,
      [data-glow]::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
      
      [data-glow]::after {
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
        );
      }
      
      [data-glow] [data-glow] {
        position: absolute;
        inset: 0;
        will-change: filter;
        opacity: var(--outer, 1);
        border-radius: calc(var(--radius) * 1px);
        border-width: calc(var(--border-size) * 20);
        filter: blur(calc(var(--border-size) * 10));
        background: none;
        pointer-events: none;
        border: none;
      }
      
      [data-glow] > [data-glow]::before {
        inset: -10px;
        border-width: 10px;
      }
    `;

    // 为 ::before 伪元素添加不同的样式
    let beforeStyles = "";
    if (useCustomColor && customColorValue.startsWith("var(")) {
      beforeStyles = `
        [data-glow]::before {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
            calc(var(--x, 0) * 1px)
            calc(var(--y, 0) * 1px),
            color-mix(in srgb, ${customColorValue} 50%, transparent), transparent 100%
          );
          filter: brightness(2);
        }
      `;
    } else {
      beforeStyles = `
        [data-glow]::before {
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
            calc(var(--x, 0) * 1px)
            calc(var(--y, 0) * 1px),
            hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
          );
          filter: brightness(2);
        }
      `;
    }

    return baseBeforeAfterStyles + beforeStyles;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getBeforeAfterStyles() }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard };
