"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Download,
  Eye,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Filter,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const payments = [
  {
    id: "PAY-001",
    service: "Premium Plan",
    amount: "₹35,000",
    date: "2024-01-15",
    status: "Completed",
    method: "Credit Card",
    invoice: "INV-2024-001",
    description: "Complete study abroad consultation package",
    counselor: "Dr. Sarah Johnson",
  },
  {
    id: "PAY-002",
    service: "IELTS Preparation Course",
    amount: "₹12,000",
    date: "2024-01-20",
    status: "Completed",
    method: "UPI",
    invoice: "INV-2024-002",
    description: "Comprehensive IELTS coaching with mock tests",
    counselor: "Emily Chen",
  },
  {
    id: "PAY-003",
    service: "University Application Fee",
    amount: "₹8,000",
    date: "2024-02-01",
    status: "Pending",
    method: "Bank Transfer",
    invoice: "INV-2024-003",
    description: "Application processing for 3 universities",
    counselor: "Raj Patel",
  },
  {
    id: "PAY-004",
    service: "Visa Interview Coaching",
    amount: "₹5,000",
    date: "2024-02-05",
    status: "Failed",
    method: "Credit Card",
    invoice: "INV-2024-004",
    description: "Mock interviews and preparation sessions",
    counselor: "Michael Brown",
  },
];

const subscriptions = [
  {
    id: "SUB-001",
    plan: "Premium Plan",
    status: "Active",
    nextBilling: "2024-07-15",
    amount: "₹35,000",
    features: ["Unlimited consultations", "Document review", "Visa guidance"],
  },
  {
    id: "SUB-002",
    plan: "Test Prep Access",
    status: "Active",
    nextBilling: "2024-03-20",
    amount: "₹2,000/month",
    features: ["IELTS materials", "Mock tests", "Progress tracking"],
  },
];

export default function PaymentsPage() {
  const [selectedTab, setSelectedTab] = useState("payments");
  const [statusFilter, setStatusFilter] = useState("All");

  const getStatusIcon = (status: any) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Failed":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredPayments = payments.filter(
    (payment) => statusFilter === "All" || payment.status === statusFilter
  );

  const totalSpent = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, p) => sum + parseInt(p.amount.replace(/[₹,]/g, "")), 0);

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
                Payments & Billing
              </h1>
              <p className="text-gray-600">
                Manage your payments, invoices, and subscriptions
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <CreditCard className="h-4 w-4 mr-2" />
              Add Payment Method
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
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹{totalSpent.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {payments.filter((p) => p.status === "Completed").length}
              </div>
              <div className="text-sm text-gray-600">Completed Payments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {payments.filter((p) => p.status === "Pending").length}
              </div>
              <div className="text-sm text-gray-600">Pending Payments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
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
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="payments" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  View all your payment transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredPayments.map((payment, index) => (
                    <motion.div
                      key={payment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(payment.status)}
                        <div>
                          <h4 className="font-medium text-charcoal-blue">
                            {payment.service}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {payment.description}
                          </p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                            <span>ID: {payment.id}</span>
                            <span>Method: {payment.method}</span>
                            <span>Counselor: {payment.counselor}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-charcoal-blue">
                          {payment.amount}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(payment.date).toLocaleDateString()}
                        </div>
                        <Badge
                          className={`${getStatusColor(payment.status)} mt-1`}
                        >
                          {payment.status}
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
                  Manage your recurring subscriptions
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
                            Next billing:{" "}
                            {new Date(
                              subscription.nextBilling
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-blue">
                            {subscription.amount}
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {subscription.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-charcoal-blue mb-2">
                          Features Included:
                        </h4>
                        <ul className="space-y-1">
                          {subscription.features.map(
                            (feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center space-x-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="flex space-x-3">
                        <Button variant="outline">Manage Subscription</Button>
                        <Button
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

          <TabsContent value="methods" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>
                  Manage your saved payment methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium text-charcoal-blue">
                            •••• •••• •••• 4242
                          </p>
                          <p className="text-sm text-gray-600">Expires 12/26</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className="bg-green-100 text-green-700">
                          Default
                        </Badge>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          MC
                        </div>
                        <div>
                          <p className="font-medium text-charcoal-blue">
                            •••• •••• •••• 8888
                          </p>
                          <p className="text-sm text-gray-600">Expires 08/25</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-slate-blue hover:bg-slate-blue/90">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add New Payment Method
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
