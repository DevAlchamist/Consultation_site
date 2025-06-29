"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  DollarSign,
  TrendingUp,
  CreditCard,
  Calendar,
  Download,
  Eye,
  User,
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

const transactions = [
  {
    id: "TXN-001",
    studentName: "John Doe",
    studentEmail: "john.doe@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    service: "Premium Plan",
    amount: 35000,
    currency: "INR",
    paymentMethod: "Credit Card",
    status: "Completed",
    date: "2024-02-10",
    transactionId: "pay_123456789",
    counselor: "Dr. Sarah Johnson",
    invoice: "INV-2024-001",
  },
  {
    id: "TXN-002",
    studentName: "Sarah Chen",
    studentEmail: "sarah.chen@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    service: "IELTS Preparation",
    amount: 12000,
    currency: "INR",
    paymentMethod: "UPI",
    status: "Completed",
    date: "2024-02-09",
    transactionId: "pay_987654321",
    counselor: "Emily Chen",
    invoice: "INV-2024-002",
  },
  {
    id: "TXN-003",
    studentName: "Raj Patel",
    studentEmail: "raj.patel@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    service: "University Applications",
    amount: 8000,
    currency: "INR",
    paymentMethod: "Bank Transfer",
    status: "Pending",
    date: "2024-02-08",
    transactionId: "pay_456789123",
    counselor: "Raj Patel",
    invoice: "INV-2024-003",
  },
  {
    id: "TXN-004",
    studentName: "Emily Rodriguez",
    studentEmail: "emily.rodriguez@email.com",
    studentImage:
      "https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=400",
    service: "Visa Consultation",
    amount: 5000,
    currency: "INR",
    paymentMethod: "Credit Card",
    status: "Failed",
    date: "2024-02-07",
    transactionId: "pay_789123456",
    counselor: "Michael Brown",
    invoice: "INV-2024-004",
  },
];

const subscriptions = [
  {
    id: "SUB-001",
    studentName: "John Doe",
    plan: "Premium Plan",
    amount: 35000,
    currency: "INR",
    status: "Active",
    nextBilling: "2024-07-10",
    startDate: "2024-01-10",
    billingCycle: "Annual",
  },
  {
    id: "SUB-002",
    studentName: "Sarah Chen",
    plan: "Test Prep Access",
    amount: 2000,
    currency: "INR",
    status: "Active",
    nextBilling: "2024-03-09",
    startDate: "2024-02-09",
    billingCycle: "Monthly",
  },
];

export default function PaymentTracker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");
  const [selectedTab, setSelectedTab] = useState("transactions");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      case "Active":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;
    const matchesMethod =
      methodFilter === "All" || txn.paymentMethod === methodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  const totalRevenue = transactions
    .filter((t) => t.status === "Completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlyRevenue = transactions
    .filter(
      (t) =>
        t.status === "Completed" &&
        new Date(t.date).getMonth() === new Date().getMonth()
    )
    .reduce((sum, t) => sum + t.amount, 0);

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
                Payment Tracker
              </h1>
              <p className="text-gray-600">
                Monitor revenue, transactions, and subscription management
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

        {/* Revenue Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹{totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Revenue</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹{monthlyRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">This Month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {transactions.length}
              </div>
              <div className="text-sm text-gray-600">Total Transactions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {subscriptions.length}
              </div>
              <div className="text-sm text-gray-600">Active Subscriptions</div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search transactions..."
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
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={methodFilter} onValueChange={setMethodFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Methods</SelectItem>
                      <SelectItem value="Credit Card">Credit Card</SelectItem>
                      <SelectItem value="UPI">UPI</SelectItem>
                      <SelectItem value="Bank Transfer">
                        Bank Transfer
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

            {/* Transactions List */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  All payment transactions and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTransactions.map((transaction, index) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={transaction.studentImage}
                            alt={transaction.studentName}
                          />
                          <AvatarFallback>
                            {transaction.studentName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {transaction.service}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {transaction.studentName}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                            <span>ID: {transaction.id}</span>
                            <span>Method: {transaction.paymentMethod}</span>
                            <span>Counselor: {transaction.counselor}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-charcoal-blue">
                          ₹{transaction.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(transaction.date).toLocaleDateString()}
                        </div>
                        <Badge
                          className={`${getStatusColor(
                            transaction.status
                          )} mt-1`}
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Subscriptions</CardTitle>
                <CardDescription>
                  Manage recurring subscriptions and billing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subscriptions.map((subscription, index) => (
                    <motion.div
                      key={subscription.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-charcoal-blue">
                            {subscription.plan}
                          </h3>
                          <p className="text-gray-600">
                            {subscription.studentName}
                          </p>
                          <p className="text-sm text-gray-500">
                            Started:{" "}
                            {new Date(
                              subscription.startDate
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-blue">
                            ₹{subscription.amount.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {subscription.billingCycle}
                          </div>
                          <Badge
                            className={getStatusColor(subscription.status)}
                          >
                            {subscription.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Next Billing:</span>
                          <p className="font-medium">
                            {new Date(
                              subscription.nextBilling
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-600">Billing Cycle:</span>
                          <p className="font-medium">
                            {subscription.billingCycle}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-3 mt-4">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Modify Plan
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700"
                        >
                          Cancel Subscription
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
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>
                  Financial insights and revenue trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Revenue Analytics
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Detailed revenue analytics, trends, and financial insights
                    coming soon
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    View Analytics Dashboard
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
