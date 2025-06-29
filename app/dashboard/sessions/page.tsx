"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  User,
  Phone,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sessions = [
  {
    id: 1,
    title: "University Selection Consultation",
    counselor: {
      name: "Dr. Sarah Johnson",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "US & UK Universities",
      rating: 4.9,
    },
    date: "2024-02-15",
    time: "2:00 PM - 3:00 PM",
    type: "Video Call",
    status: "Upcoming",
    description:
      "Discuss shortlisted universities and application strategy for MS in Computer Science.",
    meetingLink: "https://zoom.us/j/123456789",
    notes: "",
  },
  {
    id: 2,
    title: "Application Review Session",
    counselor: {
      name: "Emily Chen",
      image:
        "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Application Documents",
      rating: 4.8,
    },
    date: "2024-02-10",
    time: "3:00 PM - 4:00 PM",
    type: "Video Call",
    status: "Completed",
    description: "Review SOP and LOR drafts for Stanford and MIT applications.",
    meetingLink: "",
    notes:
      "Discussed SOP structure and provided feedback on personal statement. Need to revise introduction paragraph.",
  },
  {
    id: 3,
    title: "Visa Interview Preparation",
    counselor: {
      name: "Raj Patel",
      image:
        "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Visa & Immigration",
      rating: 4.9,
    },
    date: "2024-02-20",
    time: "11:00 AM - 12:00 PM",
    type: "Video Call",
    status: "Scheduled",
    description:
      "Mock visa interview and preparation for F-1 student visa application.",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    notes: "",
  },
  {
    id: 4,
    title: "Test Preparation Strategy",
    counselor: {
      name: "Michael Brown",
      image:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Test Preparation",
      rating: 4.7,
    },
    date: "2024-01-28",
    time: "4:00 PM - 5:00 PM",
    type: "Phone Call",
    status: "Completed",
    description: "IELTS preparation strategy and study plan discussion.",
    meetingLink: "",
    notes:
      "Created personalized study plan for IELTS. Target score: 7.5. Focus on writing and speaking sections.",
  },
];

export default function SessionsPage() {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Scheduled":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-gray-100 text-gray-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video Call":
        return <Video className="h-4 w-4" />;
      case "Phone Call":
        return <Phone className="h-4 w-4" />;
      case "In-person":
        return <User className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const upcomingSessions = sessions.filter(
    (session) => session.status === "Upcoming" || session.status === "Scheduled"
  );
  const completedSessions = sessions.filter(
    (session) => session.status === "Completed"
  );

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
                My Sessions
              </h1>
              <p className="text-gray-600">
                Manage your counseling sessions and appointments
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Book New Session
            </Button>
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
                {upcomingSessions.length}
              </div>
              <div className="text-sm text-gray-600">Upcoming Sessions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {completedSessions.length}
              </div>
              <div className="text-sm text-gray-600">Completed Sessions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {sessions.reduce((total, session) => total + 1, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Hours</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Counselors</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
            <TabsTrigger value="all">All Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>
                  Your scheduled counseling sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {upcomingSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-charcoal-blue">
                              {session.title}
                            </h3>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {session.description}
                          </p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-blue" />
                              <span>
                                {new Date(session.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-slate-blue" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(session.type)}
                              <span>{session.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-slate-blue" />
                              <span>{session.counselor.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={session.counselor.image} />
                            <AvatarFallback>
                              {session.counselor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-charcoal-blue">
                              {session.counselor.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {session.counselor.specialization}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {session.meetingLink && (
                            <Button className="bg-green-600 hover:bg-green-700">
                              <Video className="h-4 w-4 mr-2" />
                              Join Meeting
                            </Button>
                          )}
                          <Button variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Reschedule
                          </Button>
                          <Button
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Completed Sessions</CardTitle>
                <CardDescription>
                  Your past counseling sessions and notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {completedSessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-charcoal-blue">
                              {session.title}
                            </h3>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {session.description}
                          </p>

                          {session.notes && (
                            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                              <h4 className="font-medium text-charcoal-blue mb-2">
                                Session Notes:
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {session.notes}
                              </p>
                            </div>
                          )}

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-blue" />
                              <span>
                                {new Date(session.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-slate-blue" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(session.type)}
                              <span>{session.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-slate-blue" />
                              <span>{session.counselor.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={session.counselor.image} />
                            <AvatarFallback>
                              {session.counselor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-charcoal-blue">
                              {session.counselor.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {session.counselor.specialization}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Book Follow-up
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Sessions</CardTitle>
                <CardDescription>
                  Complete history of your counseling sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {sessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-charcoal-blue">
                              {session.title}
                            </h3>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {session.description}
                          </p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-blue" />
                              <span>
                                {new Date(session.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-slate-blue" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getTypeIcon(session.type)}
                              <span>{session.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-slate-blue" />
                              <span>{session.counselor.name}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={session.counselor.image} />
                              <AvatarFallback>
                                {session.counselor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-charcoal-blue text-sm">
                                {session.counselor.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {session.counselor.specialization}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
