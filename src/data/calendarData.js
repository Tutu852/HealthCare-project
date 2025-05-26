import { Stethoscope, Activity } from "lucide-react"

export const calendarData = [
  {
    day: 25,
    appointments: ["10:00", "11:00", "12:00"],
    isToday: false,
  },
  {
    day: 26,
    appointments: ["08:00", "09:00", "10:00"],
    isToday: true,
  },
  {
    day: 27,
    appointments: ["12:00"," ---", "13:00"],
    isToday: false,
  },
  {
    day: 28,
    appointments: ["10:00", "11:00","---"],
    isToday: false,
  },
  {
    day: 29,
    appointments: ["---","14:00", "16:00"],
    isToday: false,
  },
  {
    day: 30,
    appointments: ["12:00", "14:00", "15:00"],
    isToday: false,
  },
  {
    day: 31,
    appointments: ["09:00", "10:00", "11:00"],
    isToday: false,
  },
]

export const appointmentCards = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    type: "primary",
    emoji: "🦷",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    type: "secondary",
    emoji:"💪",
  },
]
