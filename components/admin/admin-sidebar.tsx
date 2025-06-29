"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
  Globe,
  Award,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  Edit,
  Search,
  Tag,
  Mail,
  Activity,
  Settings,
  LogOut,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const adminSidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Counselor Management",
    href: "/admin/counselors",
    icon: UserCheck,
  },
  {
    title: "University Manager",
    href: "/admin/universities",
    icon: GraduationCap,
  },
  {
    title: "Course Manager",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Country Pages",
    href: "/admin/countries",
    icon: Globe,
  },
  {
    title: "Scholarship Manager",
    href: "/admin/scholarships",
    icon: Award,
  },
  {
    title: "Event Manager",
    href: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Document Review",
    href: "/admin/documents",
    icon: FileText,
  },
  {
    title: "Payment Tracker",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Promo Codes",
    href: "/admin/promo-codes",
    icon: Tag,
  },
  {
    title: "Contact Inbox",
    href: "/admin/contact",
    icon: Mail,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-slate-blue" />
          <span className="text-xl font-bold gradient-text">
            StudyGlobal Admin
          </span>
        </Link>
      </div>

      {/* Admin Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-charcoal-blue">Admin User</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {adminSidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm",
                  isActive
                    ? "bg-slate-blue text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-charcoal-blue"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.title}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link href="/admin/settings">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-charcoal-blue transition-colors text-sm">
            <Settings className="h-4 w-4" />
            <span className="font-medium">Settings</span>
          </div>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-600 hover:text-red-600 text-sm"
        >
          <LogOut className="h-4 w-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
