"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Edit,
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
// import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const applications = [
  {
    id: 1,
    university: "Stanford University",
    program: "MS Computer Science",
    country: "USA",
    applicationId: "STF2024001",
    status: "Under Review",
    progress: 90,
    deadline: "2024-12-01",
    submittedDate: "2024-11-15",
    tuitionFee: "$55,000",
    documents: {
      sop: "Submitted",
      lor: "Submitted",
      transcripts: "Submitted",
      resume: "Submitted",
      testScores: "Submitted",
    },
    timeline: [
      {
        stage: "Application Submitted",
        date: "2024-11-15",
        status: "completed",
      },
      { stage: "Document Review", date: "2024-11-20", status: "completed" },
      { stage: "Committee Review", date: "2024-12-01", status: "current" },
      { stage: "Decision", date: "2024-12-15", status: "pending" },
    ],
  },
  {
    id: 2,
    university: "MIT",
    program: "MS Artificial Intelligence",
    country: "USA",
    applicationId: "MIT2024002",
    status: "Submitted",
    progress: 100,
    deadline: "2024-11-15",
    submittedDate: "2024-11-10",
    tuitionFee: "$57,000",
    documents: {
      sop: "Submitted",
      lor: "Submitted",
      transcripts: "Submitted",
      resume: "Submitted",
      testScores: "Submitted",
    },
    timeline: [
      {
        stage: "Application Submitted",
        date: "2024-11-10",
        status: "completed",
      },
      { stage: "Document Review", date: "2024-11-15", status: "completed" },
      { stage: "Committee Review", date: "2024-12-01", status: "current" },
      { stage: "Decision", date: "2024-12-20", status: "pending" },
    ],
  },
  {
    id: 3,
    university: "UC Berkeley",
    program: "MS Data Science",
    country: "USA",
    applicationId: "UCB2024003",
    status: "In Progress",
    progress: 60,
    deadline: "2024-12-15",
    submittedDate: null,
    tuitionFee: "$45,000",
    documents: {
      sop: "Submitted",
      lor: "Pending",
      transcripts: "Submitted",
      resume: "Submitted",
      testScores: "Submitted",
    },
    timeline: [
      { stage: "Application Started", date: "2024-11-01", status: "completed" },
      { stage: "Document Collection", date: "2024-11-20", status: "current" },
      {
        stage: "Application Submission",
        date: "2024-12-10",
        status: "pending",
      },
      { stage: "Decision", date: "2025-01-15", status: "pending" },
    ],
  },
];

export default function ApplicationsPage() {
  const [selectedTab, setSelectedTab] = useState("active");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Submitted":
        return "bg-blue-100 text-blue-700";
      case "Under Review":
        return "bg-yellow-100 text-yellow-700";
      case "In Progress":
        return "bg-orange-100 text-orange-700";
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getDocumentStatus = (status: any) => {
    switch (status) {
      case "Submitted":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Missing":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const activeApplications = applications.filter(
    (app) =>
      app.status === "In Progress" ||
      app.status === "Submitted" ||
      app.status === "Under Review"
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
                My Applications
              </h1>
              <p className="text-gray-600">
                Track your university applications and their progress
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              New Application
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
                {applications.length}
              </div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {activeApplications.length}
              </div>
              <div className="text-sm text-gray-600">Active Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {
                  applications.filter((app) => app.status === "Under Review")
                    .length
                }
              </div>
              <div className="text-sm text-gray-600">Under Review</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Accepted</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Applications</TabsTrigger>
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeApplications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {application.university}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {application.program}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Application Details */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Progress */}
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Application Progress</span>
                            <span>{application.progress}%</span>
                          </div>
                          {/* <Progress
                            value={application.progress}
                            className="h-2"
                          /> */}
                        </div>

                        {/* Key Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-slate-blue" />
                            <span>{application.country}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-slate-blue" />
                            <span>{application.tuitionFee}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-slate-blue" />
                            <span>
                              Due:{" "}
                              {new Date(
                                application.deadline
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-slate-blue" />
                            <span>ID: {application.applicationId}</span>
                          </div>
                        </div>

                        {/* Documents Status */}
                        <div>
                          <h4 className="font-medium text-charcoal-blue mb-3">
                            Document Status
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {Object.entries(application.documents).map(
                              ([doc, status]) => (
                                <div
                                  key={doc}
                                  className="flex items-center space-x-2 text-sm"
                                >
                                  {getDocumentStatus(status)}
                                  <span className="capitalize">
                                    {doc.replace(/([A-Z])/g, " $1")}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <h4 className="font-medium text-charcoal-blue mb-4">
                          Application Timeline
                        </h4>
                        <div className="space-y-4">
                          {application.timeline.map((stage, stageIndex) => (
                            <div
                              key={stageIndex}
                              className="flex items-start space-x-3"
                            >
                              <div
                                className={`w-3 h-3 rounded-full mt-1 ${
                                  stage.status === "completed"
                                    ? "bg-green-500"
                                    : stage.status === "current"
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                }`}
                              />
                              <div className="flex-1">
                                <p
                                  className={`text-sm font-medium ${
                                    stage.status === "current"
                                      ? "text-blue-600"
                                      : "text-charcoal-blue"
                                  }`}
                                >
                                  {stage.stage}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {stage.date}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            {applications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-lg font-bold text-charcoal-blue">
                            {application.university}
                          </h3>
                          <p className="text-gray-600">{application.program}</p>
                          <p className="text-sm text-gray-500">
                            Application ID: {application.applicationId}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge className={getStatusColor(application.status)}>
                            {application.status}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">
                            {application.submittedDate
                              ? `Submitted: ${new Date(
                                  application.submittedDate
                                ).toLocaleDateString()}`
                              : `Deadline: ${new Date(
                                  application.deadline
                                ).toLocaleDateString()}`}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="deadlines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>
                  Applications with approaching deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications
                    .filter((app) => new Date(app.deadline) > new Date())
                    .sort(
                      (a: any, b: any) =>
                        new Date(a.deadline).getTime() -
                        new Date(b.deadline).getTime()
                    )
                    .map((application, index) => {
                      const daysLeft = Math.ceil(
                        (new Date(application.deadline).getTime() -
                          new Date().getTime()) /
                          (1000 * 60 * 60 * 24)
                      );
                      return (
                        <motion.div
                          key={application.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className={`p-4 rounded-lg border-l-4 ${
                            daysLeft <= 7
                              ? "border-red-500 bg-red-50"
                              : daysLeft <= 14
                              ? "border-yellow-500 bg-yellow-50"
                              : "border-green-500 bg-green-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-charcoal-blue">
                                {application.university}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {application.program}
                              </p>
                            </div>
                            <div className="text-right">
                              <p
                                className={`font-bold ${
                                  daysLeft <= 7
                                    ? "text-red-600"
                                    : daysLeft <= 14
                                    ? "text-yellow-600"
                                    : "text-green-600"
                                }`}
                              >
                                {daysLeft} days left
                              </p>
                              <p className="text-sm text-gray-500">
                                Due:{" "}
                                {new Date(
                                  application.deadline
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
