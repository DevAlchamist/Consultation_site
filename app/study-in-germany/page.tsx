'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, DollarSign, Calendar, Users, Award, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const topCourses = [
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'World-renowned engineering programs with industry excellence',
    averageSalary: '€55,000',
    duration: '3-4 years',
    topUniversities: ['TUM', 'RWTH', 'KIT']
  },
  {
    name: 'Automotive Engineering',
    icon: '🚗',
    description: 'Leading automotive programs in the heart of car manufacturing',
    averageSalary: '€65,000',
    duration: '4 years',
    topUniversities: ['Stuttgart', 'TUM', 'RWTH']
  },
  {
    name: 'Computer Science',
    icon: '💻',
    description: 'Cutting-edge technology programs with strong research focus',
    averageSalary: '€60,000',
    duration: '3-4 years',
    topUniversities: ['TUM', 'KIT', 'TU Berlin']
  },
  {
    name: 'Business & Economics',
    icon: '💼',
    description: 'Strong business programs in Europe\'s economic powerhouse',
    averageSalary: '€50,000',
    duration: '3 years',
    topUniversities: ['Mannheim', 'Frankfurt', 'Cologne']
  },
  {
    name: 'Medicine',
    icon: '🏥',
    description: 'Excellent medical education with practical training',
    averageSalary: '€70,000',
    duration: '6 years',
    topUniversities: ['Heidelberg', 'LMU', 'Charité']
  },
  {
    name: 'Renewable Energy',
    icon: '🌱',
    description: 'Leading programs in sustainable energy and environmental technology',
    averageSalary: '€58,000',
    duration: '4 years',
    topUniversities: ['TUM', 'KIT', 'Freiburg']
  }
];

const topUniversities = [
  {
    name: 'Technical University of Munich',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 1,
    location: 'Munich, Bavaria',
    tuition: '€3,000',
    acceptanceRate: '25%',
    students: '45,000'
  },
  {
    name: 'Ludwig Maximilian University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 2,
    location: 'Munich, Bavaria',
    tuition: '€2,500',
    acceptanceRate: '30%',
    students: '52,000'
  },
  {
    name: 'RWTH Aachen University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 3,
    location: 'Aachen, NRW',
    tuition: '€3,200',
    acceptanceRate: '28%',
    students: '47,000'
  },
  {
    name: 'Karlsruhe Institute of Technology',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 4,
    location: 'Karlsruhe, BW',
    tuition: '€2,800',
    acceptanceRate: '35%',
    students: '25,000'
  }
];

const visaSteps = [
  {
    step: 1,
    title: 'Get Admission',
    description: 'Receive acceptance letter from German university',
    duration: '2-4 weeks'
  },
  {
    step: 2,
    title: 'Prepare Documents',
    description: 'Gather all required documents and translations',
    duration: '2-3 weeks'
  },
  {
    step: 3,
    title: 'Book Appointment',
    description: 'Schedule appointment at German consulate',
    duration: '1-4 weeks wait'
  },
  {
    step: 4,
    title: 'Submit Application',
    description: 'Attend appointment and submit visa application',
    duration: '1 hour'
  },
  {
    step: 5,
    title: 'Processing',
    description: 'Wait for visa processing and decision',
    duration: '4-8 weeks'
  },
  {
    step: 6,
    title: 'Receive Visa',
    description: 'Collect passport with student visa',
    duration: '1 day'
  }
];

const costBreakdown = [
  { category: 'Tuition Fees', amount: '€3,000', color: 'bg-yellow-500' },
  { category: 'Accommodation', amount: '€4,800', color: 'bg-blue-500' },
  { category: 'Living Expenses', amount: '€6,000', color: 'bg-green-500' },
  { category: 'Books & Supplies', amount: '€1,200', color: 'bg-purple-500' },
  { category: 'Health Insurance', amount: '€1,200', color: 'bg-red-500' },
  { category: 'Personal Expenses', amount: '€2,400', color: 'bg-indigo-500' }
];

const intakeTimeline = [
  {
    intake: 'Winter Semester',
    months: 'October - March',
    deadline: 'July 15',
    description: 'Main intake with maximum course options',
    popularity: 'Most Popular'
  },
  {
    intake: 'Summer Semester',
    months: 'April - September',
    deadline: 'January 15',
    description: 'Limited courses available for this intake',
    popularity: 'Limited'
  }
];

const studentStories = [
  {
    name: 'Vikram Patel',
    university: 'Technical University of Munich',
    course: 'Master of Automotive Engineering',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Studying automotive engineering in Germany, the birthplace of the automobile, was incredible. The industry connections and practical experience at BMW were unmatched.',
    outcome: 'Senior Engineer at Mercedes-Benz'
  },
  {
    name: 'Anna Mueller',
    university: 'RWTH Aachen University',
    course: 'Mechanical Engineering',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'The research opportunities and state-of-the-art facilities at RWTH Aachen provided the perfect environment for my engineering studies. The low tuition fees were a bonus!',
    outcome: 'Research Engineer at Siemens'
  },
  {
    name: 'Carlos Rodriguez',
    university: 'Karlsruhe Institute of Technology',
    course: 'Computer Science',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'KIT\'s computer science program combined theoretical knowledge with practical applications. The startup ecosystem in Germany is thriving, and I found great opportunities.',
    outcome: 'Software Engineer at SAP'
  }
];

export default function StudyInGermanyPage() {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
              width={1200}
              height={1200}
            src="https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Study in Germany"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl mr-4">🇩🇪</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Study in <span className="text-yellow-300">Germany</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience world-class education with minimal tuition fees in Europe's economic powerhouse. Benefit from cutting-edge research, industry partnerships, and excellent career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4">
                Explore Universities
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education System Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">German Education System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Germany's education system emphasizes research excellence, practical application, and strong industry partnerships with minimal tuition fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bachelor\'s (Studium)',
                duration: '3-4 Years',
                description: 'Comprehensive programs with strong theoretical foundation and practical elements',
                features: ['Research Focus', 'Industry Projects', 'Internships', 'Low Tuition Fees']
              },
              {
                title: 'Master\'s (Masterstudium)',
                duration: '1-2 Years',
                description: 'Advanced specialization with research and thesis components',
                features: ['Specialization', 'Research Projects', 'Industry Collaboration', 'Thesis Work']
              },
              {
                title: 'Doctoral (Promotion)',
                duration: '3-5 Years',
                description: 'Research-intensive programs with excellent funding opportunities',
                features: ['Research Excellence', 'Funding Available', 'International Collaboration', 'Career Development']
              }
            ].map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 shadow-lg border border-yellow-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal-blue mb-2">{level.title}</h3>
                  <div className="text-yellow-600 font-semibold text-lg">{level.duration}</div>
                </div>
                <p className="text-gray-600 mb-6">{level.description}</p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Grid */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Popular Courses in Germany</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs that leverage Germany's industrial strength and innovation in engineering, technology, and research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold text-charcoal-blue group-hover:text-yellow-600 transition-colors">
                    {course.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">{course.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Average Salary:</span>
                    <span className="font-semibold text-green-600">{course.averageSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Top Universities:</div>
                  <div className="flex flex-wrap gap-1">
                    {course.topUniversities.map((uni) => (
                      <Badge key={uni} variant="outline" className="text-xs">{uni}</Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black">
                  Explore Programs
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Highlights */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Top Universities in Germany</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class institutions known for research excellence, innovation, and strong industry partnerships with affordable education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topUniversities.map((university, index) => (
              <motion.div
                key={university.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <Image
              width={1200}
              height={1200}
                    src={university.logo}
                    alt={university.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                  />
                  <Badge className="bg-yellow-600 text-black mb-2">#{university.ranking} Germany</Badge>
                  <h3 className="text-lg font-bold text-charcoal-blue">{university.name}</h3>
                  <p className="text-gray-600 text-sm">{university.location}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tuition:</span>
                    <span className="font-semibold text-green-600">{university.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Acceptance:</span>
                    <span className="font-semibold">{university.acceptanceRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Students:</span>
                    <span className="font-semibold">{university.students}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-black">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Student Visa Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your German student visa with our expert guidance.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>
            {visaSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
                    <div className="text-yellow-600 font-bold text-lg mb-2">Step {step.step}</div>
                    <h4 className="text-xl font-bold text-charcoal-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-yellow-600 font-semibold">{step.duration}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{step.step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living Chart */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Cost of Studying in Germany</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One of the most affordable study destinations with excellent quality of education and living standards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="font-medium text-charcoal-blue">{item.category}</span>
                  </div>
                  <span className="font-bold text-lg">{item.amount}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Annual Cost Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Annual Cost</span>
                  <span className="text-2xl font-bold text-yellow-600">€18,600</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    * Public universities charge minimal tuition fees. Private universities may charge higher fees. Living costs vary by city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Timeline */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Intake Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your application timeline with our comprehensive intake calendar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {intakeTimeline.map((intake, index) => (
              <motion.div
                key={intake.intake}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-4">
                  <Badge className={`mb-3 ${
                    intake.popularity === 'Most Popular' ? 'bg-green-600' : 'bg-gray-600'
                  }`}>
                    {intake.popularity}
                  </Badge>
                  <h3 className="text-xl font-bold text-charcoal-blue">{intake.intake}</h3>
                  <p className="text-yellow-600 font-semibold">{intake.months}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Application Deadline:</span>
                    <div className="font-semibold">{intake.deadline}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{intake.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work and PR Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Work & Immigration Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Germany offers excellent post-study work opportunities and pathways to permanent residency in Europe's largest economy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Work Opportunities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Job Seeker Visa</h4>
                    <p className="text-gray-600 text-sm">18 months to find employment after graduation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Part-time Work</h4>
                    <p className="text-gray-600 text-sm">120 full days or 240 half days per year during studies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">EU Blue Card</h4>
                    <p className="text-gray-600 text-sm">Work permit for highly skilled professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Path to Permanent Residency</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Permanent Residence</h4>
                    <p className="text-gray-600 text-sm">Eligible after 5 years of continuous residence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">German Citizenship</h4>
                    <p className="text-gray-600 text-sm">Available after 8 years (6 with integration course)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">EU Access</h4>
                    <p className="text-gray-600 text-sm">Work and live anywhere in the European Union</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Student Stories */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students who are now thriving in their careers across Germany and Europe.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-6 mb-6">
                <Image
              width={1200}
              height={1200}
                  src={studentStories[currentStory].image}
                  alt={studentStories[currentStory].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-charcoal-blue">{studentStories[currentStory].name}</h3>
                  <p className="text-yellow-600 font-semibold">{studentStories[currentStory].course}</p>
                  <p className="text-gray-600">{studentStories[currentStory].university}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "{studentStories[currentStory].story}"
              </p>
              <div className="text-green-600 font-semibold">
                Current Role: {studentStories[currentStory].outcome}
              </div>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-8">
              {studentStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-yellow-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-black to-red-900">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience German Excellence?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful professionals who studied in Germany. Experience world-class education with minimal costs and excellent career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 text-black hover:bg-yellow-700 px-8 py-4">
                Book Free Germany Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                Download Germany Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}