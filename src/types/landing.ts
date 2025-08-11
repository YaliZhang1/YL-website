// 类型定义文件夹，将你需要的文件引入这个就可以了，不需要重重在每个单独的文件里面定义类型。
import { ReactNode } from "react";

export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StepType {
  title: string;
  description: string;
}

export interface PricingItemType {
  title: string;
  price: string;
  description?: string;
  badge?: string;
  secondBadge?: string;
}
