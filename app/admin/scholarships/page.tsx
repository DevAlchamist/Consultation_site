"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Award,
  Calendar,
  DollarSign,
  Users,
  Eye,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const scholarships = [
  {
    id: 1,
    name: "Merit-Based Excellence Scholarship",
    provider: "Stanford University",
    country: "USA",
    amount: "$50,000",
    type: "Full Tuition",
    deadline: "2024-03-15",
    eligibility: "Undergraduate & Graduate",
    applicants: 1250,
    awarded: 25,
    status: "Active",
    description:
      "Full tuition scholarship for academically excellent students with demonstrated leadership.",
    requirements: ["GPA 3.8+", "Leadership Experience", "Community Service"],
    fields: ["All Fields"],
    duration: "4 years",
    renewable: true,
  },
  {
    id: 2,
    name: "International Student Scholarship",
    provider: "University of Cambridge",
    country: "UK",
    amount: "£25,000",
    type: "Partial Tuition",
    deadline: "2024-04-01",
    eligibility: "Graduate",
    applicants: 890,
    awarded: 15,
    status: "Active",
    description:
      "Partial funding for outstanding international graduate students.",
    requirements: ["First Class Honours", "Research Proposal", "References"],
    fields: ["Engineering", "Sciences", "Medicine"],
    duration: "2 years",
    renewable: false,
  },
  {
    id: 3,
    name: "STEM Excellence Grant",
    provider: "University of Toronto",
    country: "Canada",
    amount: "CAD $30,000",
    type: "Research Grant",
    deadline: "2024-02-28",
    eligibility: "PhD",
    applicants: 456,
    awarded: 10,
    status: "Closed",
    description: "Research funding for PhD students in STEM fields.",
    requirements: [
      "STEM Background",
      "Research Proposal",
      "Supervisor Support",
    ],
    fields: ["Computer Science", "Engineering", "Mathematics"],
    duration: "3 years",
    renewable: true,
  },
  {
    id: 4,
    name: "Diversity & Inclusion Scholarship",
    provider: "University of Melbourne",
    country: "Australia",
    amount: "AUD $20,000",
    type: "Living Allowance",
    deadline: "2024-05-15",
    eligibility: "All Levels",
    applicants: 678,
    awarded: 20,
    status: "Active",
    description: "Supporting underrepresented students in higher education.",
    requirements: ["Diversity Statement", "Academic Merit", "Financial Need"],
    fields: ["All Fields"],
    duration: "1 year",
    renewable: true,
  },
];

export default function ScholarshipManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-red-100 text-red-700";
      case "Draft":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || scholarship.status === statusFilter;
    const matchesCountry =
      countryFilter === "All" || scholarship.country === countryFilter;
    const matchesType = typeFilter === "All" || scholarship.type === typeFilter;

    return matchesSearch && matchesStatus && matchesCountry && matchesType;
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
                Scholarship Manager
              </h1>
              <p className="text-gray-600">
                Manage scholarship opportunities and applications
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Scholarship
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
                {scholarships.length}
              </div>
              <div className="text-sm text-gray-600">Total Scholarships</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {scholarships.filter((s) => s.status === "Active").length}
              </div>
              <div className="text-sm text-gray-600">Active Scholarships</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {scholarships
                  .reduce((sum, s) => sum + s.applicants, 0)
                  .toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {scholarships.reduce((sum, s) => sum + s.awarded, 0)}
              </div>
              <div className="text-sm text-gray-600">Scholarships Awarded</div>
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
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search scholarships..."
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
                    <SelectItem value="Closed">Closed</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Countries</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Full Tuition">Full Tuition</SelectItem>
                    <SelectItem value="Partial Tuition">
                      Partial Tuition
                    </SelectItem>
                    <SelectItem value="Research Grant">
                      Research Grant
                    </SelectItem>
                    <SelectItem value="Living Allowance">
                      Living Allowance
                    </SelectItem>
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

        {/* Scholarships List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                Scholarships ({filteredScholarships.length})
              </CardTitle>
              <CardDescription>
                Manage scholarship opportunities and track applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredScholarships.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <h3 className="text-lg font-bold text-charcoal-blue">
                            {scholarship.name}
                          </h3>
                          <Badge className={getStatusColor(scholarship.status)}>
                            {scholarship.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {scholarship.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <span>
                            <strong>Provider:</strong> {scholarship.provider}
                          </span>
                          <span>
                            <strong>Country:</strong> {scholarship.country}
                          </span>
                          <span>
                            <strong>Eligibility:</strong>{" "}
                            {scholarship.eligibility}
                          </span>
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
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Scholarship
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            View Applications
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-slate-blue" />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {scholarship.amount}
                          </p>
                          <p className="text-xs text-gray-500">
                            {scholarship.type}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-blue" />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {new Date(
                              scholarship.deadline
                            ).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-500">Deadline</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-slate-blue" />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {scholarship.applicants}
                          </p>
                          <p className="text-xs text-gray-500">Applicants</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-slate-blue" />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {scholarship.awarded}
                          </p>
                          <p className="text-xs text-gray-500">Awarded</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal-blue">
                          {scholarship.duration}
                        </p>
                        <p className="text-xs text-gray-500">
                          {scholarship.renewable
                            ? "Renewable"
                            : "Non-renewable"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-charcoal-blue mb-2">
                          Requirements:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {scholarship.requirements.map((req) => (
                            <Badge
                              key={req}
                              variant="outline"
                              className="text-xs"
                            >
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-charcoal-blue mb-2">
                          Fields of Study:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {scholarship.fields.map((field) => (
                            <Badge
                              key={field}
                              variant="outline"
                              className="text-xs"
                            >
                              {field}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-gray-500">
                        Success Rate:{" "}
                        {Math.round(
                          (scholarship.awarded / scholarship.applicants) * 100
                        )}
                        %
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          View Applications
                        </Button>
                        <Button
                          size="sm"
                          className="bg-slate-blue hover:bg-slate-blue/90"
                        >
                          Edit Details
                        </Button>
                      </div>
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
