"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Tag,
  Calendar,
  Percent,
  Users,
  Copy,
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

const promoCodes = [
  {
    id: 1,
    code: "WELCOME25",
    description: "Welcome discount for new students",
    type: "Percentage",
    value: 25,
    minAmount: 10000,
    maxDiscount: 5000,
    usageLimit: 100,
    usedCount: 45,
    validFrom: "2024-01-01",
    validUntil: "2024-12-31",
    status: "Active",
    applicableServices: ["Premium Plan", "Elite Plan"],
    createdBy: "Admin",
    createdDate: "2024-01-01",
  },
  {
    id: 2,
    code: "STUDENT50",
    description: "Special discount for students",
    type: "Fixed Amount",
    value: 2000,
    minAmount: 5000,
    maxDiscount: 2000,
    usageLimit: 50,
    usedCount: 23,
    validFrom: "2024-02-01",
    validUntil: "2024-03-31",
    status: "Active",
    applicableServices: ["All Services"],
    createdBy: "Marketing Team",
    createdDate: "2024-01-15",
  },
  {
    id: 3,
    code: "EARLYBIRD",
    description: "Early bird discount for test prep",
    type: "Percentage",
    value: 15,
    minAmount: 8000,
    maxDiscount: 3000,
    usageLimit: 200,
    usedCount: 156,
    validFrom: "2024-01-15",
    validUntil: "2024-02-15",
    status: "Expired",
    applicableServices: ["IELTS Preparation", "GRE Preparation"],
    createdBy: "Admin",
    createdDate: "2024-01-10",
  },
  {
    id: 4,
    code: "REFER20",
    description: "Referral bonus for existing customers",
    type: "Percentage",
    value: 20,
    minAmount: 15000,
    maxDiscount: 4000,
    usageLimit: 1000,
    usedCount: 0,
    validFrom: "2024-03-01",
    validUntil: "2024-06-30",
    status: "Scheduled",
    applicableServices: ["Premium Plan", "Elite Plan"],
    createdBy: "Admin",
    createdDate: "2024-02-01",
  },
];

export default function PromoCodeManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Expired":
        return "bg-red-100 text-red-700";
      case "Scheduled":
        return "bg-blue-100 text-blue-700";
      case "Disabled":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredPromoCodes = promoCodes.filter((promo) => {
    const matchesSearch =
      promo.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || promo.status === statusFilter;
    const matchesType = typeFilter === "All" || promo.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const copyToClipboard = (code: any) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
  };

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
                Promo Code Manager
              </h1>
              <p className="text-gray-600">
                Create and manage discount codes and promotional offers
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Promo Code
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
                {promoCodes.length}
              </div>
              <div className="text-sm text-gray-600">Total Promo Codes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {promoCodes.filter((p) => p.status === "Active").length}
              </div>
              <div className="text-sm text-gray-600">Active Codes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {promoCodes.reduce((sum, p) => sum + p.usedCount, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Uses</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                ₹
                {promoCodes
                  .reduce(
                    (sum, p) =>
                      sum +
                      p.usedCount *
                        (p.type === "Fixed Amount" ? p.value : p.maxDiscount),
                    0
                  )
                  .toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Savings</div>
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
                    placeholder="Search promo codes..."
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
                    <SelectItem value="Expired">Expired</SelectItem>
                    <SelectItem value="Scheduled">Scheduled</SelectItem>
                    <SelectItem value="Disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Percentage">Percentage</SelectItem>
                    <SelectItem value="Fixed Amount">Fixed Amount</SelectItem>
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

        {/* Promo Codes List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Promo Codes ({filteredPromoCodes.length})</CardTitle>
              <CardDescription>
                Manage discount codes and promotional offers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredPromoCodes.map((promo, index) => (
                  <motion.div
                    key={promo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="flex items-center space-x-2">
                            <Tag className="h-5 w-5 text-slate-blue" />
                            <h3 className="text-lg font-bold text-charcoal-blue font-mono">
                              {promo.code}
                            </h3>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(promo.code)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <Badge className={getStatusColor(promo.status)}>
                            {promo.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {promo.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Percent className="h-4 w-4 text-slate-blue" />
                            <div>
                              <p className="text-sm font-medium text-charcoal-blue">
                                {promo.type === "Percentage"
                                  ? `${promo.value}%`
                                  : `₹${promo.value}`}
                              </p>
                              <p className="text-xs text-gray-500">
                                {promo.type}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-slate-blue" />
                            <div>
                              <p className="text-sm font-medium text-charcoal-blue">
                                {promo.usedCount}/{promo.usageLimit}
                              </p>
                              <p className="text-xs text-gray-500">
                                Used/Limit
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-slate-blue" />
                            <div>
                              <p className="text-sm font-medium text-charcoal-blue">
                                {new Date(promo.validFrom).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-500">
                                Valid From
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-slate-blue" />
                            <div>
                              <p className="text-sm font-medium text-charcoal-blue">
                                {new Date(
                                  promo.validUntil
                                ).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-500">
                                Valid Until
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-medium text-charcoal-blue mb-2">
                              Applicable Services:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {promo.applicableServices.map((service) => (
                                <Badge
                                  key={service}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-charcoal-blue mb-2">
                              Conditions:
                            </h4>
                            <div className="text-xs text-gray-600 space-y-1">
                              <p>
                                Min Amount: ₹{promo.minAmount.toLocaleString()}
                              </p>
                              <p>
                                Max Discount: ₹
                                {promo.maxDiscount.toLocaleString()}
                              </p>
                              <p>
                                Usage Rate:{" "}
                                {Math.round(
                                  (promo.usedCount / promo.usageLimit) * 100
                                )}
                                %
                              </p>
                            </div>
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
                            Edit Code
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            View Usage
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t text-xs text-gray-500">
                      <span>
                        Created by {promo.createdBy} on{" "}
                        {new Date(promo.createdDate).toLocaleDateString()}
                      </span>
                      <div className="flex space-x-4">
                        <span>
                          Total Savings: ₹
                          {(
                            promo.usedCount *
                            (promo.type === "Fixed Amount"
                              ? promo.value
                              : promo.maxDiscount)
                          ).toLocaleString()}
                        </span>
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
