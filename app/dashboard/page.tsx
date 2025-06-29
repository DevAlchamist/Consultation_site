"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  Calendar,
  MessageSquare,
  Award,
  TrendingUp,
  Bell,
  Settings,
  Upload,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dashboardData = {
  profile: {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    completeness: 85,
  },
  applications: [
    {
      id: 1,
      university: "Stanford University",
      program: "MS Computer Science",
      status: "Under Review",
      deadline: "2024-12-01",
      progress: 90,
      documents: ["SOP", "LOR", "Transcripts", "Resume"],
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      university: "MIT",
      program: "MS Artificial Intelligence",
      status: "Submitted",
      deadline: "2024-11-15",
      progress: 100,
      documents: ["SOP", "LOR", "Transcripts", "Resume", "Portfolio"],
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      university: "UC Berkeley",
      program: "MS Data Science",
      status: "In Progress",
      deadline: "2024-12-15",
      progress: 60,
      documents: ["SOP", "LOR", "Transcripts"],
      statusColor: "bg-orange-100 text-orange-700",
    },
  ],
  sessions: [
    {
      id: 1,
      counselor: "Dr. Sarah Johnson",
      date: "2024-02-15",
      time: "2:00 PM",
      type: "University Selection",
      status: "Upcoming",
      notes: "Discuss shortlisted universities and application strategy",
    },
    {
      id: 2,
      counselor: "Emily Chen",
      date: "2024-02-10",
      time: "3:00 PM",
      type: "Test Preparation",
      status: "Completed",
      notes: "IELTS preparation strategy and study plan",
    },
  ],
  documents: [
    { name: "Passport", status: "Verified", uploadDate: "2024-01-15" },
    { name: "Transcripts", status: "Verified", uploadDate: "2024-01-20" },
    { name: "IELTS Score", status: "Pending", uploadDate: "2024-02-01" },
    {
      name: "Statement of Purpose",
      status: "Under Review",
      uploadDate: "2024-02-05",
    },
    {
      name: "Letters of Recommendation",
      status: "Verified",
      uploadDate: "2024-01-25",
    },
  ],
  notifications: [
    {
      id: 1,
      title: "Application Deadline Reminder",
      message: "Stanford University application deadline is in 10 days",
      type: "warning",
      date: "2024-02-12",
      read: false,
    },
    {
      id: 2,
      title: "Document Verified",
      message: "Your transcripts have been verified successfully",
      type: "success",
      date: "2024-02-11",
      read: true,
    },
    {
      id: 3,
      title: "New Scholarship Opportunity",
      message: "A new scholarship matching your profile is available",
      type: "info",
      date: "2024-02-10",
      read: false,
    },
  ],
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState("overview");

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "Verified":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Under Review":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">
                Welcome back, {dashboardData.profile.name}!
              </h1>
              <p className="text-gray-600">
                Track your study abroad journey and manage your applications
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button
                variant="outline"
                className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </motion.div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Applications",
                  value: "3",
                  icon: FileText,
                  color: "text-blue-600",
                },
                {
                  title: "Sessions Booked",
                  value: "2",
                  icon: Calendar,
                  color: "text-green-600",
                },
                {
                  title: "Documents Verified",
                  value: "4/5",
                  icon: CheckCircle,
                  color: "text-purple-600",
                },
                {
                  title: "Profile Complete",
                  value: "85%",
                  icon: User,
                  color: "text-orange-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold text-charcoal-blue">
                            {stat.value}
                          </p>
                        </div>
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>
                    Your latest application updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.applications.slice(0, 3).map((app) => (
                      <div
                        key={app.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {app.university}
                          </h4>
                          <p className="text-sm text-gray-600">{app.program}</p>
                        </div>
                        <Badge className={app.statusColor}>{app.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>
                    Your scheduled counseling sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.sessions
                      .filter((s) => s.status === "Upcoming")
                      .map((session) => (
                        <div
                          key={session.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium text-charcoal-blue">
                              {session.type}
                            </h4>
                            <p className="text-sm text-gray-600">
                              with {session.counselor}
                            </p>
                            <p className="text-xs text-gray-500">
                              {session.date} at {session.time}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-slate-blue hover:bg-slate-blue/90"
                          >
                            Join
                          </Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
                <CardDescription>
                  Stay updated with your application progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.notifications
                    .slice(0, 3)
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          notification.type === "warning"
                            ? "border-yellow-400 bg-yellow-50"
                            : notification.type === "success"
                            ? "border-green-400 bg-green-50"
                            : "border-blue-400 bg-blue-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-charcoal-blue">
                              {notification.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {notification.date}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-charcoal-blue">
                My Applications
              </h2>
              <Button className="bg-slate-blue hover:bg-slate-blue/90">
                <FileText className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </div>

            <div className="grid gap-6">
              {dashboardData.applications.map((app) => (
                <Card key={app.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-charcoal-blue">
                          {app.university}
                        </h3>
                        <p className="text-gray-600">{app.program}</p>
                        <p className="text-sm text-gray-500">
                          Deadline: {app.deadline}
                        </p>
                      </div>
                      <Badge className={app.statusColor}>{app.status}</Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Application Progress</span>
                        <span>{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-charcoal-blue mb-2">
                        Documents Submitted:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {app.documents.map((doc) => (
                          <Badge key={doc} variant="outline">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                      >
                        Upload Documents
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-charcoal-blue">
                Counseling Sessions
              </h2>
              <Button className="bg-slate-blue hover:bg-slate-blue/90">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </div>

            <div className="grid gap-6">
              {dashboardData.sessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-charcoal-blue">
                          {session.type}
                        </h3>
                        <p className="text-gray-600">
                          with {session.counselor}
                        </p>
                        <p className="text-sm text-gray-500">
                          {session.date} at {session.time}
                        </p>
                      </div>
                      <Badge
                        className={
                          session.status === "Upcoming"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }
                      >
                        {session.status}
                      </Badge>
                    </div>

                    <p className="text-gray-600 mb-4">{session.notes}</p>

                    <div className="flex space-x-3">
                      {session.status === "Upcoming" ? (
                        <>
                          <Button className="bg-slate-blue hover:bg-slate-blue/90">
                            Join Session
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                          >
                            Reschedule
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="outline"
                          className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                        >
                          View Notes
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-charcoal-blue">
                My Documents
              </h2>
              <Button className="bg-slate-blue hover:bg-slate-blue/90">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {dashboardData.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(doc.status)}
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {doc.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            Uploaded on {doc.uploadDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            doc.status === "Verified"
                              ? "bg-green-100 text-green-700"
                              : doc.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        >
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-charcoal-blue">
                My Profile
              </h2>
              <Button className="bg-slate-blue hover:bg-slate-blue/90">
                Edit Profile
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <img
                    src={dashboardData.profile.image}
                    alt={dashboardData.profile.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    {dashboardData.profile.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {dashboardData.profile.email}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Profile Completeness</span>
                      <span>{dashboardData.profile.completeness}%</span>
                    </div>
                    <Progress
                      value={dashboardData.profile.completeness}
                      className="h-2"
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                  >
                    Complete Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Manage your personal information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">
                        Full Name
                      </label>
                      <p className="text-gray-600">
                        {dashboardData.profile.name}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">
                        Email
                      </label>
                      <p className="text-gray-600">
                        {dashboardData.profile.email}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">
                        Phone
                      </label>
                      <p className="text-gray-600">
                        {dashboardData.profile.phone}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">
                        Preferred Destination
                      </label>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
