"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  FileText,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  User,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documents = [
  {
    id: 1,
    studentName: "John Doe",
    studentEmail: "john.doe@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    documentType: "SOP",
    fileName: "sop_john_doe_stanford.pdf",
    uploadDate: "2024-02-10",
    reviewDate: "2024-02-12",
    status: "Approved",
    reviewer: "Dr. Sarah Johnson",
    comments:
      "Excellent SOP with clear goals and strong motivation. Well-structured and compelling.",
    university: "Stanford University",
    program: "MS Computer Science",
    size: "2.4 MB",
    version: 2,
  },
  {
    id: 2,
    studentName: "Sarah Chen",
    studentEmail: "sarah.chen@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    documentType: "LOR",
    fileName: "lor_professor_smith.pdf",
    uploadDate: "2024-02-11",
    reviewDate: null,
    status: "Under Review",
    reviewer: "Emily Chen",
    comments: "",
    university: "MIT",
    program: "MS Artificial Intelligence",
    size: "1.8 MB",
    version: 1,
  },
  {
    id: 3,
    studentName: "Raj Patel",
    studentEmail: "raj.patel@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    documentType: "Resume",
    fileName: "resume_raj_patel.pdf",
    uploadDate: "2024-02-09",
    reviewDate: "2024-02-11",
    status: "Needs Revision",
    reviewer: "Raj Patel",
    comments:
      "Please add more details about your projects and quantify achievements. Include relevant coursework.",
    university: "University of Toronto",
    program: "MBA",
    size: "1.2 MB",
    version: 1,
  },
  {
    id: 4,
    studentName: "Emily Rodriguez",
    studentEmail: "emily.rodriguez@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=400",
    documentType: "Transcript",
    fileName: "transcript_mumbai_university.pdf",
    uploadDate: "2024-02-08",
    reviewDate: "2024-02-10",
    status: "Approved",
    reviewer: "Michael Brown",
    comments:
      "Official transcripts verified. All documents are authentic and complete.",
    university: "University of Cambridge",
    program: "PhD Physics",
    size: "3.1 MB",
    version: 1,
  },
];

export default function DocumentReview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedTab, setSelectedTab] = useState("pending");

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Under Review":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Needs Revision":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Under Review":
        return "bg-yellow-100 text-yellow-700";
      case "Needs Revision":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || doc.status === statusFilter;
    const matchesType = typeFilter === "All" || doc.documentType === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const pendingDocuments = filteredDocuments.filter(
    (doc) => doc.status === "Under Review"
  );
  const reviewedDocuments = filteredDocuments.filter(
    (doc) => doc.status !== "Under Review"
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
                Document Review
              </h1>
              <p className="text-gray-600">
                Review and manage student document submissions
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
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
                {documents.length}
              </div>
              <div className="text-sm text-gray-600">Total Documents</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {documents.filter((d) => d.status === "Under Review").length}
              </div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {documents.filter((d) => d.status === "Approved").length}
              </div>
              <div className="text-sm text-gray-600">Approved</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {documents.filter((d) => d.status === "Needs Revision").length}
              </div>
              <div className="text-sm text-gray-600">Needs Revision</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">
              Pending Review ({pendingDocuments.length})
            </TabsTrigger>
            <TabsTrigger value="reviewed">
              Reviewed ({reviewedDocuments.length})
            </TabsTrigger>
            <TabsTrigger value="all">All Documents</TabsTrigger>
          </TabsList>

          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Status</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Needs Revision">
                      Needs Revision
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="SOP">Statement of Purpose</SelectItem>
                    <SelectItem value="LOR">
                      Letter of Recommendation
                    </SelectItem>
                    <SelectItem value="Resume">Resume/CV</SelectItem>
                    <SelectItem value="Transcript">Transcript</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                >
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          <TabsContent value="pending" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documents Pending Review</CardTitle>
                <CardDescription>
                  Documents waiting for review and approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDocuments.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={doc.studentImage}
                            alt={doc.studentName}
                          />
                          <AvatarFallback>
                            {doc.studentName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {doc.fileName}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {doc.studentName} • {doc.documentType}
                          </p>
                          <p className="text-xs text-gray-500">
                            {doc.university} • {doc.program} • Uploaded{" "}
                            {new Date(doc.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-slate-blue hover:bg-slate-blue/90"
                          >
                            Review
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviewed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reviewed Documents</CardTitle>
                <CardDescription>
                  Documents that have been reviewed and processed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reviewedDocuments.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        {getStatusIcon(doc.status)}
                        <div className="flex-1">
                          <h4 className="font-medium text-charcoal-blue">
                            {doc.fileName}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {doc.studentName} • {doc.documentType}
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            {doc.university} • {doc.program}
                          </p>
                          {doc.comments && (
                            <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                              <p className="text-sm text-gray-700">
                                "{doc.comments}"
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                - {doc.reviewer}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right text-xs text-gray-500">
                          <p>
                            Reviewed:{" "}
                            {doc.reviewDate
                              ? new Date(doc.reviewDate).toLocaleDateString()
                              : "N/A"}
                          </p>
                          <p>Size: {doc.size}</p>
                        </div>
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
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
                <CardTitle>All Documents</CardTitle>
                <CardDescription>
                  Complete list of all document submissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredDocuments.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={doc.studentImage}
                            alt={doc.studentName}
                          />
                          <AvatarFallback>
                            {doc.studentName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {doc.fileName}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {doc.studentName} • {doc.documentType}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                            <span>{doc.university}</span>
                            <span>•</span>
                            <span>
                              Uploaded:{" "}
                              {new Date(doc.uploadDate).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>Version: {doc.version}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
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
