"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Heart,
  Star,
  MapPin,
  DollarSign,
  GraduationCap,
  Filter,
  Plus,
  Eye,
  Trash2,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const savedUniversities = [
  {
    id: 1,
    name: "Stanford University",
    country: "USA",
    city: "Stanford, CA",
    ranking: 3,
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "$55,000/year",
    acceptanceRate: "4%",
    programs: ["Computer Science", "Engineering", "Business"],
    savedDate: "2024-01-15",
    applicationStatus: "Applied",
    notes: "Top choice for MS in Computer Science. Strong AI research program.",
  },
  {
    id: 2,
    name: "University of Cambridge",
    country: "UK",
    city: "Cambridge",
    ranking: 2,
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "£35,000/year",
    acceptanceRate: "21%",
    programs: ["Engineering", "Natural Sciences", "Mathematics"],
    savedDate: "2024-01-18",
    applicationStatus: "Considering",
    notes: "Excellent research opportunities. Need to improve IELTS score.",
  },
  {
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto, ON",
    ranking: 18,
    image:
      "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "CAD $35,000/year",
    acceptanceRate: "43%",
    programs: ["Computer Science", "Engineering", "Medicine"],
    savedDate: "2024-01-20",
    applicationStatus: "Applied",
    notes: "Good backup option. Strong co-op program.",
  },
  {
    id: 4,
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    ranking: 7,
    image:
      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "CHF 1,500/year",
    acceptanceRate: "8%",
    programs: ["Engineering", "Computer Science", "Architecture"],
    savedDate: "2024-01-22",
    applicationStatus: "Wishlist",
    notes: "Very affordable tuition. Highly competitive admission.",
  },
];

const recommendations = [
  {
    id: 5,
    name: "MIT",
    country: "USA",
    city: "Cambridge, MA",
    ranking: 1,
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "$57,000/year",
    acceptanceRate: "7%",
    programs: ["Computer Science", "Engineering", "AI"],
    matchScore: 95,
    reason:
      "Perfect match for your Computer Science background and AI interests",
  },
  {
    id: 6,
    name: "Carnegie Mellon University",
    country: "USA",
    city: "Pittsburgh, PA",
    ranking: 15,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "$52,000/year",
    acceptanceRate: "17%",
    programs: ["Computer Science", "Robotics", "AI"],
    matchScore: 92,
    reason: "Excellent CS program with strong industry connections",
  },
  {
    id: 7,
    name: "University of Waterloo",
    country: "Canada",
    city: "Waterloo, ON",
    ranking: 25,
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
    tuition: "CAD $30,000/year",
    acceptanceRate: "53%",
    programs: ["Computer Science", "Engineering", "Mathematics"],
    matchScore: 88,
    reason: "Strong co-op program and tech industry placement",
  },
];

export default function UniversitiesPage() {
  const [selectedTab, setSelectedTab] = useState("saved");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "Considering":
        return "bg-yellow-100 text-yellow-700";
      case "Wishlist":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredUniversities = savedUniversities.filter((uni) => {
    const matchesSearch = uni.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCountry =
      countryFilter === "All" || uni.country === countryFilter;
    const matchesStatus =
      statusFilter === "All" || uni.applicationStatus === statusFilter;
    return matchesSearch && matchesCountry && matchesStatus;
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
                My Universities
              </h1>
              <p className="text-gray-600">
                Manage your saved universities and discover new recommendations
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Explore Universities
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
                {savedUniversities.length}
              </div>
              <div className="text-sm text-gray-600">Saved Universities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {
                  savedUniversities.filter(
                    (u) => u.applicationStatus === "Applied"
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Applications Sent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {
                  savedUniversities.filter(
                    (u) => u.applicationStatus === "Considering"
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Under Consideration</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {
                  savedUniversities.filter(
                    (u) => u.applicationStatus === "Wishlist"
                  ).length
                }
              </div>
              <div className="text-sm text-gray-600">Wishlist</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="saved">Saved Universities</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>

          <TabsContent value="saved" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search universities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Select
                    value={countryFilter}
                    onValueChange={setCountryFilter}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Countries</SelectItem>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="UK">UK</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Switzerland">Switzerland</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Applied">Applied</SelectItem>
                      <SelectItem value="Considering">Considering</SelectItem>
                      <SelectItem value="Wishlist">Wishlist</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Saved Universities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredUniversities.map((university, index) => (
                <motion.div
                  key={university.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex space-x-4">
                          <img
                            src={university.image}
                            alt={university.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-charcoal-blue text-lg">
                              {university.name}
                            </h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>
                                {university.city}, {university.country}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className="bg-slate-blue text-white">
                                #{university.ranking}
                              </Badge>
                              <Badge
                                className={getStatusColor(
                                  university.applicationStatus
                                )}
                              >
                                {university.applicationStatus}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-slate-blue" />
                          <span>{university.tuition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4 text-slate-blue" />
                          <span>{university.acceptanceRate} acceptance</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-charcoal-blue mb-2">
                          Programs of Interest:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {university.programs.map((program) => (
                            <Badge
                              key={program}
                              variant="outline"
                              className="text-xs"
                            >
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {university.notes && (
                        <div className="mb-4">
                          <h4 className="font-medium text-charcoal-blue mb-2">
                            Notes:
                          </h4>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                            {university.notes}
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>
                          Saved on{" "}
                          {new Date(university.savedDate).toLocaleDateString()}
                        </span>
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>
                  Universities that match your profile and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {recommendations.map((university, index) => (
                    <motion.div
                      key={university.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex space-x-4">
                          <img
                            src={university.image}
                            alt={university.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-bold text-charcoal-blue text-lg">
                              {university.name}
                            </h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>
                                {university.city}, {university.country}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className="bg-slate-blue text-white">
                                #{university.ranking}
                              </Badge>
                              <Badge className="bg-green-100 text-green-700">
                                {university.matchScore}% match
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-slate-blue hover:bg-slate-blue/90"
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-slate-blue" />
                          <span>{university.tuition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4 text-slate-blue" />
                          <span>{university.acceptanceRate} acceptance</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-charcoal-blue mb-2">
                          Programs:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {university.programs.map((program) => (
                            <Badge
                              key={program}
                              variant="outline"
                              className="text-xs"
                            >
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-1">
                          Why this matches you:
                        </h4>
                        <p className="text-sm text-blue-700">
                          {university.reason}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>University Comparison</CardTitle>
                <CardDescription>
                  Compare your saved universities side by side
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Compare Universities
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Select universities from your saved list to compare them
                    side by side
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Start Comparison
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
