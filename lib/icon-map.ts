import {
  Shield,
  Network,
  Laptop,
  Lock,
  Code,
  Headphones,
  Globe,
  Database,
  Smartphone,
  Zap,
  Settings,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Shield,
  Network,
  Laptop,
  Lock,
  Code,
  Headphones,
  Globe,
  Database,
  Smartphone,
  Zap,
  Settings,
}

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Code
}
