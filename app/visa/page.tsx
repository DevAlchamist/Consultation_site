"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Calendar,
  Phone,
  MessageSquare,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const visaInfo: any = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    visaType: "F-1 Student Visa",
    processingTime: "3-5 weeks",
    fee: "$185",
    successRate: "95%",
    requirements: [
      "Valid passport",
      "Form I-20 from SEVP-approved school",
      "SEVIS fee payment receipt",
      "DS-160 form",
      "Visa application fee payment",
      "Passport-style photograph",
      "Academic transcripts",
      "Financial documents",
      "English proficiency test scores",
      "Statement of Purpose",
    ],
    documents: [
      {
        name: "Passport",
        description: "Valid for at least 6 months beyond intended stay",
      },
      {
        name: "Form I-20",
        description: "Certificate of Eligibility from your school",
      },
      {
        name: "SEVIS Fee Receipt",
        description: "Proof of SEVIS fee payment ($350)",
      },
      {
        name: "DS-160 Form",
        description: "Online nonimmigrant visa application",
      },
      {
        name: "Financial Documents",
        description: "Bank statements, scholarship letters, sponsor affidavit",
      },
      {
        name: "Academic Records",
        description: "Transcripts, diplomas, test scores",
      },
    ],
    process: [
      "Pay SEVIS fee and get receipt",
      "Complete DS-160 form online",
      "Pay visa application fee",
      "Schedule visa interview",
      "Attend visa interview at embassy",
      "Wait for visa processing",
      "Collect passport with visa",
    ],
    tips: [
      "Be honest and confident during the interview",
      "Demonstrate strong ties to your home country",
      "Show sufficient financial resources",
      "Explain your study plans clearly",
      "Dress professionally for the interview",
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    visaType: "Student Visa (Tier 4)",
    processingTime: "3 weeks",
    fee: "£363",
    successRate: "98%",
    requirements: [
      "Valid passport",
      "CAS (Confirmation of Acceptance for Studies)",
      "Financial evidence",
      "English language proficiency",
      "Academic qualifications",
      "Tuberculosis test results",
      "Biometric information",
      "Visa application form",
      "Supporting documents",
      "Maintenance funds proof",
    ],
    documents: [
      { name: "Passport", description: "Valid passport with blank pages" },
      {
        name: "CAS Letter",
        description: "Confirmation of Acceptance for Studies from university",
      },
      {
        name: "Financial Evidence",
        description: "Bank statements showing required funds",
      },
      {
        name: "English Test Results",
        description: "IELTS, TOEFL, or other approved test scores",
      },
      {
        name: "Academic Transcripts",
        description: "Previous education certificates and transcripts",
      },
      {
        name: "TB Test Results",
        description: "Tuberculosis test from approved clinic (if required)",
      },
    ],
    process: [
      "Receive CAS from university",
      "Gather required documents",
      "Complete online application",
      "Pay visa fee and healthcare surcharge",
      "Book biometric appointment",
      "Attend biometric appointment",
      "Wait for decision",
    ],
    tips: [
      "Apply early - at least 3 months before travel",
      "Ensure all documents are genuine and accurate",
      "Show sufficient funds for tuition and living costs",
      "Provide clear evidence of English proficiency",
      "Keep copies of all submitted documents",
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    visaType: "Study Permit",
    processingTime: "4-6 weeks",
    fee: "CAD $150",
    successRate: "96%",
    requirements: [
      "Valid passport",
      "Letter of acceptance from DLI",
      "Proof of financial support",
      "Statement of Purpose",
      "Medical exam (if required)",
      "Police clearance certificate",
      "Biometric information",
      "Language test results",
      "Academic transcripts",
      "Passport photographs",
    ],
    documents: [
      { name: "Passport", description: "Valid passport for duration of study" },
      {
        name: "Letter of Acceptance",
        description: "From Designated Learning Institution (DLI)",
      },
      {
        name: "Proof of Funds",
        description: "Bank statements, GIC, scholarship letters",
      },
      {
        name: "Statement of Purpose",
        description: "Explaining study plans and career goals",
      },
      {
        name: "Medical Exam",
        description: "From panel physician (if required)",
      },
      { name: "Police Certificate", description: "Criminal background check" },
    ],
    process: [
      "Get acceptance letter from DLI",
      "Gather required documents",
      "Create online account",
      "Submit application online",
      "Pay fees and provide biometrics",
      "Wait for processing",
      "Receive study permit",
    ],
    tips: [
      "Show strong ties to home country",
      "Demonstrate sufficient funds",
      "Provide genuine documents only",
      "Be clear about study and career plans",
      "Apply well before intended start date",
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    visaType: "Student Visa (Subclass 500)",
    processingTime: "4-6 weeks",
    fee: "AUD $650",
    successRate: "97%",
    requirements: [
      "Valid passport",
      "Confirmation of Enrolment (CoE)",
      "Genuine Temporary Entrant (GTE)",
      "Financial capacity evidence",
      "English proficiency proof",
      "Health insurance (OSHC)",
      "Health examinations",
      "Character requirements",
      "Academic documents",
      "Biometric information",
    ],
    documents: [
      {
        name: "Passport",
        description: "Valid passport with sufficient validity",
      },
      {
        name: "CoE",
        description: "Confirmation of Enrolment from Australian institution",
      },
      {
        name: "GTE Statement",
        description: "Genuine Temporary Entrant statement",
      },
      {
        name: "Financial Evidence",
        description: "Proof of funds for tuition and living expenses",
      },
      {
        name: "English Test",
        description: "IELTS, TOEFL, or PTE Academic scores",
      },
      { name: "OSHC", description: "Overseas Student Health Cover policy" },
    ],
    process: [
      "Receive CoE from institution",
      "Prepare GTE statement",
      "Gather supporting documents",
      "Submit online application",
      "Pay visa fee",
      "Provide biometrics",
      "Wait for decision",
    ],
    tips: [
      "Write a compelling GTE statement",
      "Show genuine intention to study",
      "Demonstrate financial capacity",
      "Meet health and character requirements",
      "Apply online for faster processing",
    ],
  },
};

export default function VisaPage() {
  const [selectedCountry, setSelectedCountry] = useState("usa");

  const currentVisa = visaInfo[selectedCountry];

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
              Visa <span className="gradient-text">Guidance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get expert guidance on student visa applications with our 98%
              success rate. We'll help you navigate the complex visa process
              step by step.
            </p>
          </motion.div>

          {/* Country Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {Object.entries(visaInfo).map(([key, country]: any[]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCountry(key)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCountry === key
                        ? "bg-slate-blue text-white shadow-lg"
                        : "text-charcoal-blue hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2">{country.flag}</span>
                    {country.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            key={selectedCountry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Overview */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{currentVisa.flag}</span>
                <div>
                  <h2 className="text-3xl font-bold text-charcoal-blue">
                    {currentVisa.name} Student Visa
                  </h2>
                  <p className="text-gray-600">{currentVisa.visaType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-slate-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-charcoal-blue">
                      {currentVisa.processingTime}
                    </div>
                    <div className="text-sm text-gray-600">Processing Time</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-slate-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-charcoal-blue">
                      {currentVisa.fee}
                    </div>
                    <div className="text-sm text-gray-600">Visa Fee</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-charcoal-blue">
                      {currentVisa.successRate}
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-slate-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-charcoal-blue">
                      {currentVisa.requirements.length}
                    </div>
                    <div className="text-sm text-gray-600">Requirements</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Detailed Information */}
            <Tabs defaultValue="requirements" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="requirements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Visa Requirements</CardTitle>
                    <CardDescription>
                      Complete list of requirements for {currentVisa.name}{" "}
                      student visa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentVisa.requirements.map((requirement: any, index: any) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-charcoal-blue">
                            {requirement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Documents</CardTitle>
                    <CardDescription>
                      Detailed information about each required document
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {currentVisa.documents.map((doc: any, index: any) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-5 w-5 text-slate-blue" />
                              <span>{doc.name}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-600 pl-8">
                              {doc.description}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Process</CardTitle>
                    <CardDescription>
                      Step-by-step guide to apply for {currentVisa.name} student
                      visa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentVisa.process.map((step: any, index: any) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-slate-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-charcoal-blue font-medium">
                              {step}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Expert Tips</CardTitle>
                    <CardDescription>
                      Insider tips to increase your chances of visa approval
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentVisa.tips.map((tip: any, index: any) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg"
                        >
                          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <p className="text-charcoal-blue">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Visa Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive visa support to ensure your application success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Document Review",
                description:
                  "Complete review of all visa documents to ensure accuracy and completeness.",
                price: "₹5,000",
              },
              {
                icon: MessageSquare,
                title: "Interview Preparation",
                description:
                  "Mock interviews and coaching to build confidence for visa interviews.",
                price: "₹3,000",
              },
              {
                icon: CheckCircle,
                title: "Application Assistance",
                description:
                  "End-to-end support for visa application submission and tracking.",
                price: "₹8,000",
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                description:
                  "Help with booking visa appointments and embassy coordination.",
                price: "₹2,000",
              },
              {
                icon: Phone,
                title: "Emergency Support",
                description:
                  "24/7 support for urgent visa-related queries and issues.",
                price: "₹1,500",
              },
              {
                icon: Download,
                title: "Document Templates",
                description:
                  "Access to proven templates for SOPs, financial documents, and more.",
                price: "₹1,000",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-blue/10 rounded-full mb-4">
                  <Network className="h-6 w-6 text-slate-blue" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-blue">
                    {service.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-slate-blue hover:bg-slate-blue/90"
                  >
                    Get Started
                  </Button>
                </div>
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
              Ready to Apply for Your Visa?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let visa complexities hold you back. Our experts are here to
              guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-blue hover:bg-gray-100"
              >
                Book Visa Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-blue"
              >
                Download Visa Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
