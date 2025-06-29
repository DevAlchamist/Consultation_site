"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Projector,
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
import { toast } from "sonner";
import Image from "next/image";

const offices = [
  {
    city: "Mumbai",
    address: "123 Education Street, Andheri West, Mumbai - 400058",
    phone: "+91 22 1234 5678",
    email: "mumbai@studyglobal.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image:
      "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    city: "Delhi",
    address: "456 Learning Avenue, Connaught Place, New Delhi - 110001",
    phone: "+91 11 2345 6789",
    email: "delhi@studyglobal.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image:
      "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    city: "Bangalore",
    address: "789 Tech Park Road, Koramangala, Bangalore - 560034",
    phone: "+91 80 3456 7890",
    email: "bangalore@studyglobal.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our counselors",
    action: "+1 (555) 123-4567",
    color: "soft-rose",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    action: "Start Chat",
    color: "sage-green",
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule a detailed consultation",
    action: "Book Now",
    color: "powder-blue",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your detailed queries",
    action: "info@studyglobal.com",
    color: "slate-blue",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Thank you for your message! We'll get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal-blue mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your study abroad journey? Our expert counselors
              are here to guide you every step of the way.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-colors duration-300`}
                >
                  <Projector
                    className={`h-8 w-8 text-${
                      method.color === "slate-blue"
                        ? "slate-blue"
                        : method.color === "soft-rose"
                        ? "soft-rose"
                        : method.color === "sage-green"
                        ? "sage-green"
                        : "powder-blue"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-charcoal-blue mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <div className="text-slate-blue font-semibold">
                  {method.action}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal-blue mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="border-gray-200 focus:border-slate-blue"
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
                      className="border-gray-200 focus:border-slate-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="border-gray-200 focus:border-slate-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-blue mb-2">
                      Preferred Study Destination
                    </label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) =>
                        handleInputChange("country", value)
                      }
                    >
                      <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="ireland">Ireland</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-blue mb-2">
                    Service Interested In
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="profile-evaluation">
                        Profile Evaluation
                      </SelectItem>
                      <SelectItem value="university-selection">
                        University Selection
                      </SelectItem>
                      <SelectItem value="application-support">
                        Application Support
                      </SelectItem>
                      <SelectItem value="visa-guidance">
                        Visa Guidance
                      </SelectItem>
                      <SelectItem value="test-preparation">
                        Test Preparation
                      </SelectItem>
                      <SelectItem value="complete-package">
                        Complete Package
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-blue mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your study abroad goals and any specific questions you have..."
                    rows={5}
                    className="border-gray-200 focus:border-slate-blue"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-blue hover:bg-slate-blue/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-slate-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-blue">
                        Phone
                      </div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-slate-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-blue">
                        Email
                      </div>
                      <div className="text-gray-600">info@studyglobal.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-slate-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-blue">
                        Business Hours
                      </div>
                      <div className="text-gray-600">
                        Mon-Sat: 9:00 AM - 7:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-blue/10 rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-slate-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-blue">
                        Global Presence
                      </div>
                      <div className="text-gray-600">
                        50+ Countries Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-blue to-powder-blue rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-blue-100">
                      Visa Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-blue-100">Student Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-sm text-blue-100">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-blue-100">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">
                  Emergency Support
                </h3>
                <p className="text-red-700 text-sm mb-3">
                  For urgent visa or travel-related issues, contact our 24/7
                  emergency helpline:
                </p>
                <div className="text-red-800 font-bold">+1 (555) 999-0000</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our convenient locations across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Image
              width={1200}
              height={1200}
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-blue mb-4">
                    {office.city}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-slate-blue mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        {office.address}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-slate-blue" />
                      <span className="text-gray-600 text-sm">
                        {office.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-slate-blue" />
                      <span className="text-gray-600 text-sm">
                        {office.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-slate-blue" />
                      <span className="text-gray-600 text-sm">
                        {office.hours}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-slate-blue hover:bg-slate-blue/90">
                    Visit {office.city} Office
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does the entire process take?",
                answer:
                  "The complete process typically takes 6-12 months, depending on your chosen destination and program. We provide a detailed timeline during your initial consultation.",
              },
              {
                question: "What is your visa success rate?",
                answer:
                  "We maintain a 98% visa success rate across all countries. Our experienced visa specialists ensure your application is complete and compelling.",
              },
              {
                question: "Do you provide scholarships?",
                answer:
                  "Yes, we help identify and apply for various scholarships and financial aid opportunities. Our team has secured over $50M in scholarships for students.",
              },
              {
                question:
                  "Can I change my university selection after starting the process?",
                answer:
                  "Yes, you can modify your university list during the initial stages. We work with you to ensure you're applying to institutions that best match your goals.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-charcoal-blue mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
