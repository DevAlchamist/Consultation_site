'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  User, 
  Upload, 
  TrendingUp, 
  Calendar, 
  Bell, 
  Bookmark, 
  FileText, 
  CreditCard,
  LogOut,
  Settings,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const sidebarItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: TrendingUp,
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: User,
  },
  {
    title: 'Documents',
    href: '/dashboard/documents',
    icon: Upload,
  },
  {
    title: 'Sessions',
    href: '/dashboard/sessions',
    icon: Calendar,
  },
  {
    title: 'Applications',
    href: '/dashboard/applications',
    icon: FileText,
  },
  {
    title: 'Saved Universities',
    href: '/dashboard/universities',
    icon: Bookmark,
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    title: 'Payments',
    href: '/dashboard/payments',
    icon: CreditCard,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-slate-blue" />
          <span className="text-xl font-bold gradient-text">StudyGlobal</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-charcoal-blue">John Doe</p>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-slate-blue text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-charcoal-blue"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link href="/dashboard/settings">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-charcoal-blue transition-colors">
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </div>
        </Link>
        <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-red-600">
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}