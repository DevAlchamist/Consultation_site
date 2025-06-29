'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, DollarSign, TrendingUp, UserPlus, FileText, Award, Bell, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const kpiData = [
  {
    title: 'Total Users',
    value: '12,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Booked Sessions',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Monthly Revenue',
    value: '$45,678',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Visa Success Rate',
    value: '98.2%',
    change: '+0.5%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const recentActivity = [
  {
    id: 1,
    type: 'user_registration',
    message: 'New user registered: John Doe',
    time: '2 minutes ago',
    icon: UserPlus,
    color: 'text-green-600',
  },
  {
    id: 2,
    type: 'document_upload',
    message: 'Document uploaded by Sarah Chen',
    time: '5 minutes ago',
    icon: FileText,
    color: 'text-blue-600',
  },
  {
    id: 3,
    type: 'scholarship_application',
    message: 'Scholarship application submitted',
    time: '10 minutes ago',
    icon: Award,
    color: 'text-purple-600',
  },
  {
    id: 4,
    type: 'session_booked',
    message: 'Counseling session booked by Mike Johnson',
    time: '15 minutes ago',
    icon: Calendar,
    color: 'text-orange-600',
  },
];

const pendingTasks = [
  {
    id: 1,
    title: 'Review 15 pending documents',
    priority: 'high',
    dueDate: 'Today',
  },
  {
    id: 2,
    title: 'Approve 8 scholarship applications',
    priority: 'medium',
    dueDate: 'Tomorrow',
  },
  {
    id: 3,
    title: 'Update university rankings',
    priority: 'low',
    dueDate: 'This week',
  },
  {
    id: 4,
    title: 'Send monthly newsletter',
    priority: 'medium',
    dueDate: 'Friday',
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-misty-lavender to-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-charcoal-blue mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                      <p className="text-2xl font-bold text-charcoal-blue">{kpi.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">{kpi.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                      <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full bg-white`}>
                        <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal-blue">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pending Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
                <CardDescription>Items requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal-blue">{task.title}</p>
                        <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                      </div>
                      <Badge 
                        className={
                          task.priority === 'high' ? 'bg-red-100 text-red-700' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <Bell className="h-4 w-4 mr-2" />
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used admin functions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col bg-slate-blue hover:bg-slate-blue/90">
                  <Users className="h-6 w-6 mb-2" />
                  Add User
                </Button>
                <Button className="h-20 flex-col bg-sage-green hover:bg-sage-green/90">
                  <GraduationCap className="h-6 w-6 mb-2" />
                  Add University
                </Button>
                <Button className="h-20 flex-col bg-soft-rose hover:bg-soft-rose/90">
                  <Calendar className="h-6 w-6 mb-2" />
                  Create Event
                </Button>
                <Button className="h-20 flex-col bg-powder-blue hover:bg-powder-blue/90">
                  <Bell className="h-6 w-6 mb-2" />
                  Send Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}