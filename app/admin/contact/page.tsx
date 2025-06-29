"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
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

const contactMessages = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    subject: "Inquiry about MBA programs in USA",
    message:
      "Hi, I am interested in pursuing an MBA from top US universities. Could you please provide information about the application process, requirements, and your services?",
    country: "India",
    service: "University Selection",
    priority: "Medium",
    status: "New",
    receivedDate: "2024-02-12",
    assignedTo: null,
    responseTime: null,
    source: "Contact Form",
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+65 9876 5432",
    subject: "IELTS preparation course details",
    message:
      "I need to improve my IELTS score from 6.5 to 7.5. What courses do you offer and what is the success rate?",
    country: "Singapore",
    service: "Test Preparation",
    priority: "High",
    status: "In Progress",
    receivedDate: "2024-02-11",
    assignedTo: "Emily Chen",
    responseTime: "2 hours",
    source: "Live Chat",
  },
  {
    id: 3,
    name: "Raj Patel",
    email: "raj.patel@email.com",
    phone: "+91 98765 43210",
    subject: "Visa consultation for Canada",
    message:
      "I have received admission from University of Toronto. I need help with the student visa application process for Canada.",
    country: "India",
    service: "Visa Guidance",
    priority: "High",
    status: "Resolved",
    receivedDate: "2024-02-10",
    assignedTo: "Raj Patel",
    responseTime: "1 hour",
    source: "Phone Call",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+34 612 345 678",
    subject: "Scholarship opportunities in Germany",
    message:
      "I am looking for scholarship opportunities for Masters in Engineering in Germany. What are the available options?",
    country: "Spain",
    service: "Scholarship Guidance",
    priority: "Low",
    status: "New",
    receivedDate: "2024-02-09",
    assignedTo: null,
    responseTime: null,
    source: "Contact Form",
  },
];

export default function ContactInbox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selectedTab, setSelectedTab] = useState("inbox");

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "New":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case "In Progress":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <MessageSquare className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority: any) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredMessages = contactMessages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || message.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" || message.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const newMessages = filteredMessages.filter((m) => m.status === "New");
  const inProgressMessages = filteredMessages.filter(
    (m) => m.status === "In Progress"
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
                Contact Inbox
              </h1>
              <p className="text-gray-600">
                Manage customer inquiries and support requests
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
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
                {contactMessages.length}
              </div>
              <div className="text-sm text-gray-600">Total Messages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">
                {newMessages.length}
              </div>
              <div className="text-sm text-gray-600">New Messages</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {inProgressMessages.length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {contactMessages.filter((m) => m.status === "Resolved").length}
              </div>
              <div className="text-sm text-gray-600">Resolved</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="inbox">
              Inbox ({contactMessages.length})
            </TabsTrigger>
            <TabsTrigger value="new">New ({newMessages.length})</TabsTrigger>
            <TabsTrigger value="progress">
              In Progress ({inProgressMessages.length})
            </TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search messages..."
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
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={priorityFilter}
                  onValueChange={setPriorityFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Priority</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
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

          <TabsContent value="inbox" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Messages</CardTitle>
                <CardDescription>
                  Complete list of customer inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        {getStatusIcon(message.status)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium text-charcoal-blue">
                              {message.name}
                            </h4>
                            <Badge className={getStatusColor(message.status)}>
                              {message.status}
                            </Badge>
                            <Badge
                              className={getPriorityColor(message.priority)}
                            >
                              {message.priority}
                            </Badge>
                          </div>
                          <h5 className="font-medium text-charcoal-blue mb-1">
                            {message.subject}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {message.message}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{message.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-3 w-3" />
                              <span>{message.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(
                                  message.receivedDate
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{message.assignedTo || "Unassigned"}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>Service: {message.service}</span>
                            <span>Country: {message.country}</span>
                            <span>Source: {message.source}</span>
                            {message.responseTime && (
                              <span>Response: {message.responseTime}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                        <Button
                          size="sm"
                          className="bg-slate-blue hover:bg-slate-blue/90"
                        >
                          Assign
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>New Messages</CardTitle>
                <CardDescription>
                  Unread customer inquiries requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <AlertCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium text-charcoal-blue">
                              {message.name}
                            </h4>
                            <Badge className="bg-blue-100 text-blue-700">
                              New
                            </Badge>
                            <Badge
                              className={getPriorityColor(message.priority)}
                            >
                              {message.priority}
                            </Badge>
                          </div>
                          <h5 className="font-medium text-charcoal-blue mb-1">
                            {message.subject}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {message.message}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{message.email}</span>
                            <span>{message.service}</span>
                            <span>
                              {new Date(
                                message.receivedDate
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                        <Button
                          size="sm"
                          className="bg-slate-blue hover:bg-slate-blue/90"
                        >
                          Assign
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>In Progress</CardTitle>
                <CardDescription>
                  Messages currently being handled
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inProgressMessages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <Clock className="h-5 w-5 text-yellow-500 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium text-charcoal-blue">
                              {message.name}
                            </h4>
                            <Badge className="bg-yellow-100 text-yellow-700">
                              In Progress
                            </Badge>
                            <Badge
                              className={getPriorityColor(message.priority)}
                            >
                              {message.priority}
                            </Badge>
                          </div>
                          <h5 className="font-medium text-charcoal-blue mb-1">
                            {message.subject}
                          </h5>
                          <p className="text-gray-600 text-sm mb-2">
                            {message.message}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>Assigned to: {message.assignedTo}</span>
                            <span>Response time: {message.responseTime}</span>
                            <span>
                              {new Date(
                                message.receivedDate
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Update
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Resolve
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Analytics</CardTitle>
                <CardDescription>
                  Insights into customer inquiries and response performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Contact Analytics
                  </h3>
                  <p className="text-gray-600 mb-6">
                    View detailed analytics on response times, inquiry types,
                    and customer satisfaction
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
