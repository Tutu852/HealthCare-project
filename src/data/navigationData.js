import { BarChart3, Clock, Calendar, Stethoscope, Activity, MessageCircle, HelpCircle, Settings } from "lucide-react"

export const navigationData = [
  {
    label: "Dashboard",
    icon: BarChart3,
    isActive: true,
  },
  {
    label: "History",
    icon: Clock,
    isActive: false,
  },
  {
    label: "Calendar",
    icon: Calendar,
    isActive: false,
  },
  {
    label: "Appointments",
    icon: Stethoscope,
    isActive: false,
  },
  {
    label: "Statistics",
    icon: Activity,
    isActive: false,
  },
  {
    label: "Chat",
    icon: MessageCircle,
    isActive: false,
  },
  {
    label: "Support",
    icon: HelpCircle,
    isActive: false,
  },
  {
    label: "Setting",
    icon: Settings,
    isActive: false,
  },
]
