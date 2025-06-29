"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  UserCheck,
  Calendar,
  Star,
  Phone,
  Mail,
  MapPin,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@studyglobal.com",
    phone: "+1 (555) 123-4567",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialization: "US & UK Universities",
    experience: "15+ years",
    rating: 4.9,
    studentsAssigned: 45,
    sessionsCompleted: 234,
    status: "Active",
    availability: "Available",
    languages: ["English", "Hindi"],
    expertise: ["MBA Programs", "Engineering", "Medical Schools", "Ivy League"],
    joinDate: "2020-01-15",
    location: "Mumbai, India",
  },
  {
    id: 2,
    name: "Raj Patel",
    email: "raj.patel@studyglobal.com",
    phone: "+1 (555) 234-5678",
    image:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialization: "Canada & Australia",
    experience: "12+ years",
    rating: 4.8,
    studentsAssigned: 38,
    sessionsCompleted: 189,
    status: "Active",
    availability: "Busy",
    languages: ["English", "Hindi", "Gujarati"],
    expertise: [
      "Visa Applications",
      "Immigration Law",
      "Work Permits",
      "PR Applications",
    ],
    joinDate: "2021-03-20",
    location: "Delhi, India",
  },
  {
    id: 3,
    name: "Emily Chen",
    email: "emily.chen@studyglobal.com",
    phone: "+1 (555) 345-6789",
    image:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialization: "Test Preparation",
    experience: "10+ years",
    rating: 4.9,
    studentsAssigned: 52,
    sessionsCompleted: 298,
    status: "Active",
    availability: "Available",
    languages: ["English", "Mandarin", "Hindi"],
    expertise: ["IELTS", "TOEFL", "GRE", "GMAT", "Score Improvement"],
    joinDate: "2019-08-10",
    location: "Bangalore, India",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@studyglobal.com",
    phone: "+1 (555) 456-7890",
    image:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
    specialization: "European Universities",
    experience: "8+ years",
    rating: 4.7,
    studentsAssigned: 29,
    sessionsCompleted: 156,
    status: "Inactive",
    availability: "Unavailable",
    languages: ["English", "German", "French"],
    expertise: [
      "European Programs",
      "Scholarship Applications",
      "Research Programs",
    ],
    joinDate: "2022-01-05",
    location: "Pune, India",
  },
];

export default function CounselorManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [specializationFilter, setSpecializationFilter] = useState("All");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-red-100 text-red-700";
      case "On Leave":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getAvailabilityColor = (availability: any) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Busy":
        return "bg-yellow-100 text-yellow-700";
      case "Unavailable":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredCounselors = counselors.filter((counselor) => {
    const matchesSearch =
      counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      counselor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || counselor.status === statusFilter;
    const matchesSpecialization =
      specializationFilter === "All" ||
      counselor.specialization.includes(specializationFilter);

    return matchesSearch && matchesStatus && matchesSpecialization;
  });

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
                Counselor Management
              </h1>
              <p className="text-gray-600">
                Manage counselor profiles, assignments, and availability
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Counselor
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
                {counselors.length}
              </div>
              <div className="text-sm text-gray-600">Total Counselors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {counselors.filter((c) => c.status === "Active").length}
              </div>
              <div className="text-sm text-gray-600">Active Counselors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {
                  counselors.filter((c) => c.availability === "Available")
                    .length
                }
              </div>
              <div className="text-sm text-gray-600">Available Now</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {counselors.reduce((sum, c) => sum + c.studentsAssigned, 0)}
              </div>
              <div className="text-sm text-gray-600">Students Assigned</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search counselors..."
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
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="On Leave">On Leave</SelectItem>
                  </SelectContent>
                </Select>

                <Select
                  value={specializationFilter}
                  onValueChange={setSpecializationFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Specializations</SelectItem>
                    <SelectItem value="US">US Universities</SelectItem>
                    <SelectItem value="UK">UK Universities</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Test">Test Preparation</SelectItem>
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
        </motion.div>

        {/* Counselors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Counselors ({filteredCounselors.length})</CardTitle>
              <CardDescription>
                Manage counselor profiles and assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredCounselors.map((counselor, index) => (
                  <motion.div
                    key={counselor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={counselor.image}
                            alt={counselor.name}
                          />
                          <AvatarFallback>
                            {counselor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold text-charcoal-blue">
                            {counselor.name}
                          </h3>
                          <p className="text-gray-600">
                            {counselor.specialization}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(counselor.status)}>
                              {counselor.status}
                            </Badge>
                            <Badge
                              className={getAvailabilityColor(
                                counselor.availability
                              )}
                            >
                              {counselor.availability}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Manage Schedule
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserCheck className="h-4 w-4 mr-2" />
                            Assign Students
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Deactivate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-slate-blue">
                          {counselor.rating}
                        </div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-blue">
                          {counselor.studentsAssigned}
                        </div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-blue">
                          {counselor.sessionsCompleted}
                        </div>
                        <div className="text-xs text-gray-500">Sessions</div>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{counselor.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{counselor.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">
                          {counselor.location}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-xs text-gray-500 mb-2">
                        Expertise:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {counselor.expertise.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {counselor.expertise.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{counselor.expertise.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-xs text-gray-500 mb-2">
                        Languages:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {counselor.languages.map((language) => (
                          <span
                            key={language}
                            className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t text-xs text-gray-500">
                      <span>
                        Joined:{" "}
                        {new Date(counselor.joinDate).toLocaleDateString()}
                      </span>
                      <span>{counselor.experience} experience</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
