"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Award,
  Calendar,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  TicketPlus,
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
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

const scholarships = [
  {
    id: 1,
    name: "Fulbright Foreign Student Program",
    provider: "U.S. Department of State",
    country: "USA",
    amount: "$50,000",
    type: "Full Funding",
    deadline: "2024-10-15",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Prestigious scholarship for international students to pursue graduate study in the United States.",
    eligibility: [
      "Bachelor's degree",
      "Strong academic record",
      "English proficiency",
      "Leadership experience",
    ],
    benefits: [
      "Full tuition coverage",
      "Monthly stipend",
      "Health insurance",
      "Travel allowance",
    ],
    fields: ["All Fields"],
    level: "Masters/PhD",
    duration: "1-2 years",
    recipients: 4000,
    competitiveness: "Very High",
  },
  {
    id: 2,
    name: "Chevening Scholarships",
    provider: "UK Government",
    country: "UK",
    amount: "£35,000",
    type: "Full Funding",
    deadline: "2024-11-07",
    image:
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "UK government's global scholarship programme for future leaders and influencers.",
    eligibility: [
      "Bachelor's degree",
      "2+ years work experience",
      "Leadership potential",
      "English proficiency",
    ],
    benefits: [
      "Full tuition fees",
      "Monthly stipend",
      "Travel costs",
      "Visa application",
    ],
    fields: ["All Fields"],
    level: "Masters",
    duration: "1 year",
    recipients: 1500,
    competitiveness: "Very High",
  },
  {
    id: 3,
    name: "Vanier Canada Graduate Scholarships",
    provider: "Government of Canada",
    country: "Canada",
    amount: "CAD $50,000",
    type: "Full Funding",
    deadline: "2024-11-01",
    image:
      "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Prestigious scholarship to attract and retain world-class doctoral students.",
    eligibility: [
      "Nominated by Canadian institution",
      "Academic excellence",
      "Research potential",
      "Leadership",
    ],
    benefits: [
      "$50,000 per year",
      "Research support",
      "Conference funding",
      "Mentorship",
    ],
    fields: ["Health Research", "Natural Sciences", "Social Sciences"],
    level: "PhD",
    duration: "3 years",
    recipients: 167,
    competitiveness: "Extremely High",
  },
  {
    id: 4,
    name: "Australia Awards Scholarships",
    provider: "Australian Government",
    country: "Australia",
    amount: "AUD $45,000",
    type: "Full Funding",
    deadline: "2024-04-30",
    image:
      "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Long-term development scholarships for students from developing countries.",
    eligibility: [
      "Developing country citizen",
      "Academic merit",
      "Leadership potential",
      "Development focus",
    ],
    benefits: [
      "Full tuition",
      "Living allowance",
      "Health cover",
      "Return airfare",
    ],
    fields: [
      "Development Studies",
      "Public Policy",
      "Engineering",
      "Agriculture",
    ],
    level: "Masters/PhD",
    duration: "2-4 years",
    recipients: 1000,
    competitiveness: "High",
  },
  {
    id: 5,
    name: "DAAD Scholarships",
    provider: "German Academic Exchange Service",
    country: "Germany",
    amount: "€1,200/month",
    type: "Partial Funding",
    deadline: "2024-10-31",
    image:
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Comprehensive scholarship program for international students in Germany.",
    eligibility: [
      "Bachelor's degree",
      "Academic excellence",
      "German language (some programs)",
      "Motivation",
    ],
    benefits: [
      "Monthly stipend",
      "Health insurance",
      "Travel allowance",
      "Study allowance",
    ],
    fields: ["Engineering", "Natural Sciences", "Social Sciences", "Arts"],
    level: "Masters/PhD",
    duration: "1-3 years",
    recipients: 2500,
    competitiveness: "Moderate",
  },
  {
    id: 6,
    name: "Government of Ireland Scholarships",
    provider: "Irish Research Council",
    country: "Ireland",
    amount: "€18,500",
    type: "Full Funding",
    deadline: "2024-12-15",
    image:
      "https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Postgraduate scholarships for international students in Ireland.",
    eligibility: [
      "Non-EU citizen",
      "Academic excellence",
      "Research proposal",
      "English proficiency",
    ],
    benefits: [
      "Annual stipend",
      "Fees contribution",
      "Research costs",
      "Conference support",
    ],
    fields: ["All Fields"],
    level: "Masters/PhD",
    duration: "1-4 years",
    recipients: 60,
    competitiveness: "High",
  },
];

const countries = [
  "All Countries",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
];
const types = [
  "All Types",
  "Full Funding",
  "Partial Funding",
  "Merit-based",
  "Need-based",
];
const levels = ["All Levels", "Bachelors", "Masters", "PhD", "Masters/PhD"];
const fields = [
  "All Fields",
  "Engineering",
  "Business",
  "Medicine",
  "Arts",
  "Sciences",
  "Technology",
];

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedField, setSelectedField] = useState("All Fields");
  const [amountRange, setAmountRange] = useState([0, 100000]);

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const matchesSearch =
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry =
        selectedCountry === "All Countries" ||
        scholarship.country === selectedCountry;
      const matchesType =
        selectedType === "All Types" || scholarship.type === selectedType;
      const matchesLevel =
        selectedLevel === "All Levels" ||
        scholarship.level.includes(selectedLevel);
      const matchesField =
        selectedField === "All Fields" ||
        scholarship.fields.some((field) => field.includes(selectedField)) ||
        scholarship.fields.includes("All Fields");

      const amount = parseInt(scholarship.amount.replace(/[^0-9]/g, ""));
      const matchesAmount =
        amount >= amountRange[0] && amount <= amountRange[1];

      return (
        matchesSearch &&
        matchesCountry &&
        matchesType &&
        matchesLevel &&
        matchesField &&
        matchesAmount
      );
    });
  }, [
    searchTerm,
    selectedCountry,
    selectedType,
    selectedLevel,
    selectedField,
    amountRange,
  ]);

  const getDeadlineStatus = (deadline: any) => {
    const deadlineDate: any = new Date(deadline);
    const today: any = new Date();
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    if (daysLeft < 0)
      return { status: "Closed", color: "bg-red-100 text-red-700" };
    if (daysLeft <= 30)
      return {
        status: `${daysLeft} days left`,
        color: "bg-orange-100 text-orange-700",
      };
    return {
      status: `${daysLeft} days left`,
      color: "bg-green-100 text-green-700",
    };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal-blue mb-6">
              Scholarship <span className="gradient-text">Directory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover thousands of scholarships worth millions of dollars. Find
              funding opportunities that match your profile and dreams.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search scholarships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-slate-blue"
                />
              </div>

              <Select
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              >
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Field" />
                </SelectTrigger>
                <SelectContent>
                  {fields.map((field) => (
                    <SelectItem key={field} value={field}>
                      {field}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-charcoal-blue whitespace-nowrap">
                Amount Range:
              </span>
              <div className="flex-1 px-4">
                <Slider
                  value={amountRange}
                  onValueChange={setAmountRange}
                  max={100000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                ${amountRange[0].toLocaleString()} - $
                {amountRange[1].toLocaleString()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal-blue">
              {filteredScholarships.length} Scholarships Found
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
              width={1200}
              height={1200}
                    src={scholarship.image}
                    alt={scholarship.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-blue text-white">
                      {scholarship.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={getDeadlineStatus(scholarship.deadline).color}
                    >
                      {getDeadlineStatus(scholarship.deadline).status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal-blue mb-1 group-hover:text-slate-blue transition-colors line-clamp-2">
                        {scholarship.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {scholarship.provider}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {scholarship.country}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-lg font-bold text-slate-blue">
                        {scholarship.amount}
                      </div>
                      <div className="text-xs text-gray-500">
                        {scholarship.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {scholarship.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-sm font-bold text-charcoal-blue">
                        {scholarship.recipients}
                      </div>
                      <div className="text-xs text-gray-500">Recipients</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal-blue">
                        {scholarship.level}
                      </div>
                      <div className="text-xs text-gray-500">Level</div>
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          scholarship.competitiveness === "Extremely High"
                            ? "text-red-600"
                            : scholarship.competitiveness === "Very High"
                            ? "text-orange-600"
                            : scholarship.competitiveness === "High"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {scholarship.competitiveness}
                      </div>
                      <div className="text-xs text-gray-500">Competition</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-charcoal-blue mb-2">
                      Key Benefits:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {scholarship.benefits.slice(0, 3).map((benefit) => (
                        <Badge
                          key={benefit}
                          variant="outline"
                          className="text-xs"
                        >
                          {benefit}
                        </Badge>
                      ))}
                      {scholarship.benefits.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{scholarship.benefits.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Deadline:{" "}
                      {new Date(scholarship.deadline).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-slate-blue hover:bg-slate-blue/90">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Tips Section */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">
              Scholarship Success Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Increase your chances of winning scholarships with these expert
              tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Start Early",
                description:
                  "Begin your scholarship search at least 12 months before your intended start date.",
              },
              {
                icon: CheckCircle,
                title: "Meet Requirements",
                description:
                  "Carefully read and ensure you meet all eligibility criteria before applying.",
              },
              {
                icon: Award,
                title: "Strong Essays",
                description:
                  "Write compelling personal statements that showcase your unique story and goals.",
              },
              {
                icon: Users,
                title: "Get References",
                description:
                  "Secure strong recommendation letters from professors, employers, or mentors.",
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-blue/10 rounded-full mb-4">
                  <TicketPlus className="h-8 w-8 text-slate-blue" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-blue mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-slate-blue to-powder-blue">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need Help with Scholarship Applications?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our scholarship experts have helped students secure over $50M in
              funding. Let us help you too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-blue hover:bg-gray-100"
              >
                Get Scholarship Guidance
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-blue"
              >
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
