"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Badge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "sonner";
import Image from "next/image";

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Education Counselor",
    specialization: "US & UK Universities",
    experience: "15+ years",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    studentsHelped: 2500,
    expertise: ["MBA Programs", "Engineering", "Medical Schools", "Ivy League"],
    languages: ["English", "Hindi"],
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    id: 2,
    name: "Raj Patel",
    title: "Immigration & Visa Specialist",
    specialization: "Canada & Australia",
    experience: "12+ years",
    image:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    studentsHelped: 1800,
    expertise: [
      "Visa Applications",
      "Immigration Law",
      "Work Permits",
      "PR Applications",
    ],
    languages: ["English", "Hindi", "Gujarati"],
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Test Prep & Scholarship Expert",
    specialization: "IELTS, TOEFL, GRE, GMAT",
    experience: "10+ years",
    image:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    studentsHelped: 3200,
    expertise: [
      "Test Preparation",
      "Scholarship Applications",
      "Score Improvement",
      "Study Plans",
    ],
    languages: ["English", "Mandarin", "Hindi"],
    availability: ["Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const sessionTypes = [
  {
    id: "profile-evaluation",
    name: "Profile Evaluation",
    duration: "60 minutes",
    price: "Free",
    description:
      "Comprehensive assessment of your academic profile and career goals",
  },
  {
    id: "university-selection",
    name: "University Selection",
    duration: "45 minutes",
    price: "₹2,000",
    description:
      "Personalized university recommendations based on your profile",
  },
  {
    id: "application-review",
    name: "Application Review",
    duration: "90 minutes",
    price: "₹3,500",
    description: "Detailed review of your application documents and essays",
  },
  {
    id: "visa-consultation",
    name: "Visa Consultation",
    duration: "60 minutes",
    price: "₹2,500",
    description: "Expert guidance on visa application process and requirements",
  },
  {
    id: "test-prep-strategy",
    name: "Test Prep Strategy",
    duration: "45 minutes",
    price: "₹1,500",
    description: "Personalized test preparation plan and study strategy",
  },
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedCounselor, setSelectedCounselor] = useState<any>(null);
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    studyLevel: "",
    preferredDestination: "",
    message: "",
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    toast.success(
      "Counseling session booked successfully! You will receive a confirmation email shortly."
    );
    // Reset form or redirect
  };

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
              Book Your{" "}
              <span className="gradient-text">Counseling Session</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from our expert counselors to plan your
              study abroad journey
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {[
                { step: 1, title: "Choose Session", icon: MessageCircle },
                { step: 2, title: "Select Counselor", icon: User },
                { step: 3, title: "Pick Date & Time", icon: Calendar },
                { step: 4, title: "Your Details", icon: CheckCircle },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                      step >= item.step
                        ? "bg-slate-blue border-slate-blue text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    <Badge className="h-5 w-5" />
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div
                      className={`text-sm font-medium ${
                        step >= item.step ? "text-slate-blue" : "text-gray-400"
                      }`}
                    >
                      Step {item.step}
                    </div>
                    <div
                      className={`text-xs ${
                        step >= item.step
                          ? "text-charcoal-blue"
                          : "text-gray-400"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                  {index < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        step > item.step ? "bg-slate-blue" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-6xl">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Step 1: Choose Session Type */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
                  Choose Your Session Type
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sessionTypes.map((session: any) => (
                    <div
                      key={session.id}
                      onClick={() => setSelectedSession(session)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedSession?.id === session.id
                          ? "border-slate-blue bg-slate-blue/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-charcoal-blue">
                          {session.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-lg font-bold text-slate-blue">
                            {session.price}
                          </div>
                          <div className="text-xs text-gray-500">
                            {session.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {session.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Counselor */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
                  Choose Your Counselor
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {counselors.map((counselor: any) => (
                    <div
                      key={counselor.id}
                      onClick={() => setSelectedCounselor(counselor)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedCounselor?.id === counselor.id
                          ? "border-slate-blue bg-slate-blue/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-center mb-4">
                        <Image
                          src={counselor.image}
                          alt={counselor.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                        />
                        <h3 className="text-lg font-bold text-charcoal-blue">
                          {counselor.name}
                        </h3>
                        <p className="text-slate-blue font-medium text-sm">
                          {counselor.title}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {counselor.specialization}
                        </p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Experience:</span>
                          <span className="font-medium">
                            {counselor.experience}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rating:</span>
                          <span className="font-medium">
                            ⭐ {counselor.rating}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">
                            Students Helped:
                          </span>
                          <span className="font-medium">
                            {counselor.studentsHelped}+
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-xs text-gray-600 mb-2">
                          Expertise:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {counselor.expertise.slice(0, 3).map((skill: any) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Date & Time */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
                  Pick Date & Time
                </h2>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-blue mb-4">
                      Select Date
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0
                        }
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-charcoal-blue mb-4">
                      Available Time Slots
                    </h3>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                              selectedTime === time
                                ? "border-slate-blue bg-slate-blue text-white"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        Please select a date first
                      </div>
                    )}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-8 p-6 bg-slate-blue/5 rounded-xl">
                    <h4 className="font-bold text-charcoal-blue mb-2">
                      Session Summary
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Session:</span>{" "}
                        {selectedSession?.name}
                      </div>
                      <div>
                        <span className="text-gray-600">Counselor:</span>{" "}
                        {selectedCounselor?.name}
                      </div>
                      <div>
                        <span className="text-gray-600">Date:</span>{" "}
                        {format(selectedDate, "PPP")}
                      </div>
                      <div>
                        <span className="text-gray-600">Time:</span>{" "}
                        {selectedTime}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Personal Details */}
            {step === 4 && (
              <div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-8 text-center">
                  Your Details
                </h2>
                <div className="max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Current Country
                      </label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          handleInputChange("country", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Study Level
                      </label>
                      <Select
                        value={formData.studyLevel}
                        onValueChange={(value) =>
                          handleInputChange("studyLevel", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelor">Bachelor&apos;s</SelectItem>
                          <SelectItem value="master">Master&apos;s</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-blue mb-2">
                        Preferred Destination
                      </label>
                      <Select
                        value={formData.preferredDestination}
                        onValueChange={(value) =>
                          handleInputChange("preferredDestination", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="ireland">Ireland</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-charcoal-blue mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your specific goals or questions..."
                      rows={4}
                    />
                  </div>

                  {/* Final Summary */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-charcoal-blue mb-4">
                      Booking Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Session Type:</span>
                        <span className="font-medium">
                          {selectedSession?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Counselor:</span>
                        <span className="font-medium">
                          {selectedCounselor?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span className="font-medium">
                          {selectedDate && format(selectedDate, "PPP")} at{" "}
                          {selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">
                          {selectedSession?.duration}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-slate-blue">
                          {selectedSession?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
              >
                Previous
              </Button>

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedSession) ||
                    (step === 2 && !selectedCounselor) ||
                    (step === 3 && (!selectedDate || !selectedTime))
                  }
                  className="bg-slate-blue hover:bg-slate-blue/90"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    !formData.name || !formData.email || !formData.phone
                  }
                  className="bg-slate-blue hover:bg-slate-blue/90"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
