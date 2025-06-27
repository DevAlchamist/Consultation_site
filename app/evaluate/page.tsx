"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  User,
  GraduationCap,
  Target,
  Download,
  CheckCircle,
  ArrowRight,
  Star,
  StepForward,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const steps = [
  { id: 1, title: "Personal Information", icon: User },
  { id: 2, title: "Academic Background", icon: GraduationCap },
  { id: 3, title: "Test Scores & Experience", icon: FileText },
  { id: 4, title: "Goals & Preferences", icon: Target },
];

export default function EvaluatePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    currentCountry: "",

    // Academic Background
    highestEducation: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",
    gpa: "",
    gradeSystem: "",

    // Test Scores & Experience
    englishTest: "",
    englishScore: "",
    standardizedTest: "",
    standardizedScore: "",
    workExperience: "",
    workYears: "",

    // Goals & Preferences
    studyLevel: "",
    preferredField: "",
    preferredCountries: [],
    budget: "",
    startDate: "",
    careerGoals: "",
  });

  const [showResults, setShowResults] = useState<any>(false);
  const [evaluationResults, setEvaluationResults] = useState<any>(null);

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simulate evaluation processing
    const results = {
      overallScore: 85,
      strengths: [
        "Strong academic background",
        "Good English proficiency",
        "Relevant work experience",
        "Clear career goals",
      ],
      improvements: [
        "Consider improving standardized test scores",
        "Gain more international exposure",
        "Develop leadership experience",
      ],
      recommendedCountries: [
        {
          country: "Canada",
          match: 92,
          reasons: ["High acceptance rates", "Post-study work opportunities"],
        },
        {
          country: "Australia",
          match: 88,
          reasons: ["Quality education", "Multicultural environment"],
        },
        {
          country: "UK",
          match: 82,
          reasons: ["Shorter program duration", "Research opportunities"],
        },
      ],
      recommendedUniversities: [
        { name: "University of Toronto", country: "Canada", match: 90 },
        { name: "University of Melbourne", country: "Australia", match: 85 },
        { name: "University of Manchester", country: "UK", match: 80 },
      ],
      scholarshipChances: "High",
      visaSuccess: "95%",
      nextSteps: [
        "Prepare for IELTS/TOEFL if needed",
        "Research specific university requirements",
        "Start preparing application documents",
        "Consider taking GRE/GMAT for better opportunities",
      ],
    };

    setEvaluationResults(results);
    setShowResults(true);
    toast.success("Profile evaluation completed successfully!");
  };

  const progress = (currentStep / 4) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-charcoal-blue mb-4">
                Your Profile Evaluation Results
              </h1>
              <p className="text-xl text-gray-600">
                Based on your profile, here&apos;s your comprehensive study abroad
                assessment
              </p>
            </div>

            {/* Overall Score */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-charcoal-blue mb-4">
                  Overall Profile Score
                </h2>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="#5A6782"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${
                        (evaluationResults.overallScore / 100) * 314
                      } 314`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-slate-blue">
                      {evaluationResults.overallScore}%
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Excellent profile! You have strong chances for admission to
                  top universities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Strengths */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-charcoal-blue mb-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Your Strengths
                </h3>
                <ul className="space-y-2">
                  {evaluationResults.strengths.map(
                    (strength: any, index: any) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{strength}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Areas for Improvement */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-charcoal-blue mb-4">
                  Areas for Improvement
                </h3>
                <ul className="space-y-2">
                  {evaluationResults.improvements.map(
                    (improvement: any, index: any) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-orange-400 rounded-full flex-shrink-0" />
                        <span className="text-gray-600">{improvement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Recommended Countries */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-charcoal-blue mb-6">
                Recommended Countries
              </h3>
              <div className="space-y-4">
                {evaluationResults.recommendedCountries.map(
                  (country: any, index: any) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-charcoal-blue">
                          {country.country}
                        </h4>
                        <div className="text-slate-blue font-bold">
                          {country.match}% Match
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-slate-blue h-2 rounded-full"
                          style={{ width: `${country.match}%` }}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {country.reasons.map(
                          (reason: any, reasonIndex: any) => (
                            <span
                              key={reasonIndex}
                              className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                            >
                              {reason}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {evaluationResults.scholarshipChances}
                </div>
                <div className="text-gray-600">Scholarship Chances</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {evaluationResults.visaSuccess}
                </div>
                <div className="text-gray-600">Visa Success Rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {evaluationResults.recommendedUniversities.length}+
                </div>
                <div className="text-gray-600">Recommended Universities</div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-charcoal-blue mb-4">
                Recommended Next Steps
              </h3>
              <ol className="space-y-3">
                {evaluationResults.nextSteps.map((step: any, index: any) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slate-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-slate-blue hover:bg-slate-blue/90">
                  <Download className="h-4 w-4 mr-2" />
                  Download Detailed Report
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                >
                  Book Free Consultation
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Want a more detailed analysis? Book a free consultation with our
                expert counselors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
              Free Profile <span className="gradient-text">Evaluation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get a comprehensive assessment of your study abroad profile and
              receive personalized recommendations for universities and
              countries.
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      currentStep >= step.id
                        ? "bg-slate-blue border-slate-blue text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    <StepForward className="h-5 w-5" />
                  </div>
                  <div className="ml-2 hidden md:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.id
                          ? "text-slate-blue"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  {step.id < 4 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-slate-blue" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
            <div className="text-center mt-2 text-sm text-gray-600">
              Step {currentStep} of 4 ({Math.round(progress)}% complete)
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-charcoal-blue mb-6">
                  Personal Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality *</Label>
                    <Select
                      value={formData.nationality}
                      onValueChange={(value) =>
                        handleInputChange("nationality", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indian">Indian</SelectItem>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="british">British</SelectItem>
                        <SelectItem value="canadian">Canadian</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentCountry">
                    Current Country of Residence *
                  </Label>
                  <Select
                    value={formData.currentCountry}
                    onValueChange={(value) =>
                      handleInputChange("currentCountry", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Academic Background */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-charcoal-blue mb-6">
                  Academic Background
                </h2>

                <div>
                  <Label htmlFor="highestEducation">
                    Highest Level of Education *
                  </Label>
                  <Select
                    value={formData.highestEducation}
                    onValueChange={(value) =>
                      handleInputChange("highestEducation", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your highest education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="bachelor">
                        Bachelor&apos;s Degree
                      </SelectItem>
                      <SelectItem value="master">Master&apos;s Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                    <Input
                      id="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={(e) =>
                        handleInputChange("fieldOfStudy", e.target.value)
                      }
                      placeholder="e.g., Computer Science, Business"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution">Institution Name *</Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                      placeholder="Enter your institution name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year *</Label>
                    <Select
                      value={formData.graduationYear}
                      onValueChange={(value) =>
                        handleInputChange("graduationYear", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => 2024 - i).map(
                          (year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gpa">GPA/Percentage *</Label>
                    <Input
                      id="gpa"
                      value={formData.gpa}
                      onChange={(e) => handleInputChange("gpa", e.target.value)}
                      placeholder="e.g., 3.5 or 85%"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gradeSystem">Grading System *</Label>
                    <Select
                      value={formData.gradeSystem}
                      onValueChange={(value) =>
                        handleInputChange("gradeSystem", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.0">4.0 Scale</SelectItem>
                        <SelectItem value="10.0">10.0 Scale</SelectItem>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Test Scores & Experience */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-charcoal-blue mb-6">
                  Test Scores & Experience
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="englishTest">
                      English Proficiency Test
                    </Label>
                    <Select
                      value={formData.englishTest}
                      onValueChange={(value) =>
                        handleInputChange("englishTest", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select test" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ielts">IELTS</SelectItem>
                        <SelectItem value="toefl">TOEFL</SelectItem>
                        <SelectItem value="pte">PTE</SelectItem>
                        <SelectItem value="none">Not taken yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="englishScore">English Test Score</Label>
                    <Input
                      id="englishScore"
                      value={formData.englishScore}
                      onChange={(e) =>
                        handleInputChange("englishScore", e.target.value)
                      }
                      placeholder="e.g., 7.0 (IELTS) or 100 (TOEFL)"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="standardizedTest">Standardized Test</Label>
                    <Select
                      value={formData.standardizedTest}
                      onValueChange={(value) =>
                        handleInputChange("standardizedTest", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select test" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gre">GRE</SelectItem>
                        <SelectItem value="gmat">GMAT</SelectItem>
                        <SelectItem value="sat">SAT</SelectItem>
                        <SelectItem value="act">ACT</SelectItem>
                        <SelectItem value="none">Not taken yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="standardizedScore">
                      Standardized Test Score
                    </Label>
                    <Input
                      id="standardizedScore"
                      value={formData.standardizedScore}
                      onChange={(e) =>
                        handleInputChange("standardizedScore", e.target.value)
                      }
                      placeholder="e.g., 320 (GRE) or 700 (GMAT)"
                    />
                  </div>
                </div>

                <div>
                  <Label>Do you have work experience?</Label>
                  <RadioGroup
                    value={formData.workExperience}
                    onValueChange={(value) =>
                      handleInputChange("workExperience", value)
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="work-yes" />
                      <Label htmlFor="work-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="work-no" />
                      <Label htmlFor="work-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.workExperience === "yes" && (
                  <div>
                    <Label htmlFor="workYears">Years of Work Experience</Label>
                    <Select
                      value={formData.workYears}
                      onValueChange={(value) =>
                        handleInputChange("workYears", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Goals & Preferences */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-charcoal-blue mb-6">
                  Goals & Preferences
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studyLevel">Intended Study Level *</Label>
                    <Select
                      value={formData.studyLevel}
                      onValueChange={(value) =>
                        handleInputChange("studyLevel", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor&apos;s</SelectItem>
                        <SelectItem value="master">Master&apos;s</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="diploma">
                          Diploma/Certificate
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredField">
                      Preferred Field of Study *
                    </Label>
                    <Input
                      id="preferredField"
                      value={formData.preferredField}
                      onChange={(e) =>
                        handleInputChange("preferredField", e.target.value)
                      }
                      placeholder="e.g., Computer Science, MBA"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>
                    Preferred Study Destinations (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {[
                      "USA",
                      "UK",
                      "Canada",
                      "Australia",
                      "Germany",
                      "Ireland",
                    ].map((country) => (
                      <div
                        key={country}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={country}
                          checked={formData.preferredCountries.includes(
                            country
                          )}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              handleInputChange("preferredCountries", [
                                ...formData.preferredCountries,
                                country,
                              ]);
                            } else {
                              handleInputChange(
                                "preferredCountries",
                                formData.preferredCountries.filter(
                                  (c: any) => c !== country
                                )
                              );
                            }
                          }}
                        />
                        <Label htmlFor={country}>{country}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Annual Budget (USD)</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-20000">$0 - $20,000</SelectItem>
                        <SelectItem value="20000-40000">
                          $20,000 - $40,000
                        </SelectItem>
                        <SelectItem value="40000-60000">
                          $40,000 - $60,000
                        </SelectItem>
                        <SelectItem value="60000+">$60,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Select
                      value={formData.startDate}
                      onValueChange={(value) =>
                        handleInputChange("startDate", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select start date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fall-2024">Fall 2024</SelectItem>
                        <SelectItem value="spring-2025">Spring 2025</SelectItem>
                        <SelectItem value="fall-2025">Fall 2025</SelectItem>
                        <SelectItem value="spring-2026">Spring 2026</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="careerGoals">
                    Career Goals & Aspirations
                  </Label>
                  <Textarea
                    id="careerGoals"
                    value={formData.careerGoals}
                    onChange={(e) =>
                      handleInputChange("careerGoals", e.target.value)
                    }
                    placeholder="Tell us about your career goals and what you hope to achieve..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
              >
                Previous
              </Button>

              <Button
                onClick={handleNext}
                className="bg-slate-blue hover:bg-slate-blue/90"
              >
                {currentStep === 4 ? "Get My Evaluation" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
