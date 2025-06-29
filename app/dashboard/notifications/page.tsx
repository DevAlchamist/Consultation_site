"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Check,
  Trash2,
  Filter,
  Calendar,
  User,
  FileText,
  Award,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    title: "Application Deadline Reminder",
    message:
      "Stanford University application deadline is in 10 days. Make sure all documents are submitted.",
    type: "deadline",
    priority: "high",
    date: "2024-02-12",
    time: "09:00 AM",
    read: false,
    actionRequired: true,
  },
  {
    id: 2,
    title: "Document Approved",
    message:
      "Your Statement of Purpose has been reviewed and approved by Dr. Sarah Johnson.",
    type: "document",
    priority: "medium",
    date: "2024-02-11",
    time: "02:30 PM",
    read: true,
    actionRequired: false,
  },
  {
    id: 3,
    title: "New Scholarship Opportunity",
    message:
      "A new scholarship worth $25,000 matching your profile is now available. Apply before March 15th.",
    type: "scholarship",
    priority: "high",
    date: "2024-02-10",
    time: "11:15 AM",
    read: false,
    actionRequired: true,
  },
  {
    id: 4,
    title: "Session Reminder",
    message:
      "Your counseling session with Emily Chen is scheduled for tomorrow at 2:00 PM.",
    type: "session",
    priority: "medium",
    date: "2024-02-09",
    time: "04:45 PM",
    read: true,
    actionRequired: false,
  },
  {
    id: 5,
    title: "Visa Interview Scheduled",
    message:
      "Your US visa interview has been scheduled for February 20th at the US Consulate.",
    type: "visa",
    priority: "high",
    date: "2024-02-08",
    time: "10:20 AM",
    read: false,
    actionRequired: true,
  },
  {
    id: 6,
    title: "Test Score Updated",
    message:
      "Your IELTS score of 7.5 has been added to your profile successfully.",
    type: "test",
    priority: "low",
    date: "2024-02-07",
    time: "03:15 PM",
    read: true,
    actionRequired: false,
  },
];

export default function NotificationsPage() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [notificationList, setNotificationList] = useState(notifications);

  const getNotificationIcon = (type: any) => {
    switch (type) {
      case "deadline":
        return <Calendar className="h-5 w-5 text-red-500" />;
      case "document":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "scholarship":
        return <Award className="h-5 w-5 text-yellow-500" />;
      case "session":
        return <User className="h-5 w-5 text-green-500" />;
      case "visa":
        return <CheckCircle className="h-5 w-5 text-purple-500" />;
      case "test":
        return <Info className="h-5 w-5 text-indigo-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: any) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const markAsRead = (id: any) => {
    setNotificationList((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const deleteNotification = (id: any) => {
    setNotificationList((prev) => prev.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotificationList((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notificationList.filter((notif) => !notif.read).length;
  const actionRequiredCount = notificationList.filter(
    (notif) => notif.actionRequired && !notif.read
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-misty-lavender to-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">
                Notifications
              </h1>
              <p className="text-gray-600">
                Stay updated with important alerts and reminders
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={markAllAsRead}>
                <Check className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {notificationList.length}
              </div>
              <div className="text-sm text-gray-600">Total Notifications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {unreadCount}
              </div>
              <div className="text-sm text-gray-600">Unread</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {actionRequiredCount}
              </div>
              <div className="text-sm text-gray-600">Action Required</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {notificationList.filter((notif) => notif.read).length}
              </div>
              <div className="text-sm text-gray-600">Read</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="action">Action Required</TabsTrigger>
            <TabsTrigger value="read">Read</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notificationList.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`${
                    !notification.read
                      ? "border-l-4 border-l-slate-blue bg-blue-50/30"
                      : ""
                  } hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3
                              className={`font-bold ${
                                !notification.read
                                  ? "text-charcoal-blue"
                                  : "text-gray-700"
                              }`}
                            >
                              {notification.title}
                            </h3>
                            <Badge
                              className={getPriorityColor(
                                notification.priority
                              )}
                            >
                              {notification.priority}
                            </Badge>
                            {notification.actionRequired && (
                              <Badge className="bg-orange-100 text-orange-700">
                                Action Required
                              </Badge>
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{notification.date}</span>
                            <span>{notification.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {!notification.read && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notificationList
              .filter((notif) => !notif.read)
              .map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-l-4 border-l-slate-blue bg-blue-50/30 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-charcoal-blue">
                                {notification.title}
                              </h3>
                              <Badge
                                className={getPriorityColor(
                                  notification.priority
                                )}
                              >
                                {notification.priority}
                              </Badge>
                              {notification.actionRequired && (
                                <Badge className="bg-orange-100 text-orange-700">
                                  Action Required
                                </Badge>
                              )}
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-gray-600 mb-3">
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{notification.date}</span>
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </TabsContent>

          <TabsContent value="action" className="space-y-4">
            {notificationList
              .filter((notif) => notif.actionRequired)
              .map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-l-4 border-l-orange-500 bg-orange-50/30 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-charcoal-blue">
                                {notification.title}
                              </h3>
                              <Badge className="bg-orange-100 text-orange-700">
                                Action Required
                              </Badge>
                              <Badge
                                className={getPriorityColor(
                                  notification.priority
                                )}
                              >
                                {notification.priority}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{notification.date}</span>
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-orange-600 hover:bg-orange-700"
                          >
                            Take Action
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </TabsContent>

          <TabsContent value="read" className="space-y-4">
            {notificationList
              .filter((notif) => notif.read)
              .map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="opacity-75 hover:opacity-100 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-bold text-gray-700">
                                {notification.title}
                              </h3>
                              <Badge
                                className={getPriorityColor(
                                  notification.priority
                                )}
                              >
                                {notification.priority}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>{notification.date}</span>
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
