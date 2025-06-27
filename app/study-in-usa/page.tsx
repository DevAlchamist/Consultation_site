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
    name: 'Computer Science',
    icon: '💻',
    description: 'Leading technology programs with Silicon Valley connections',
    averageSalary: '$120,000',
    duration: '4 years',
    topUniversities: ['MIT', 'Stanford', 'Carnegie Mellon']
  },
  {
    name: 'Business Administration (MBA)',
    icon: '📊',
    description: 'World-renowned business schools and networking opportunities',
    averageSalary: '$150,000',
    duration: '2 years',
    topUniversities: ['Harvard', 'Wharton', 'Stanford']
  },
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'Cutting-edge research and industry partnerships',
    averageSalary: '$95,000',
    duration: '4 years',
    topUniversities: ['MIT', 'Caltech', 'Georgia Tech']
  },
  {
    name: 'Medicine',
    icon: '🏥',
    description: 'Advanced medical education and research facilities',
    averageSalary: '$250,000',
    duration: '4 years',
    topUniversities: ['Harvard Medical', 'Johns Hopkins', 'UCSF']
  },
  {
    name: 'Data Science',
    icon: '📈',
    description: 'High-demand field with excellent career prospects',
    averageSalary: '$110,000',
    duration: '2 years',
    topUniversities: ['Stanford', 'UC Berkeley', 'CMU']
  },
  {
    name: 'Finance',
    icon: '💰',
    description: 'Wall Street connections and global finance opportunities',
    averageSalary: '$130,000',
    duration: '4 years',
    topUniversities: ['Wharton', 'NYU Stern', 'Columbia']
  }
];

const topUniversities = [
  {
    name: 'Harvard University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 1,
    location: 'Cambridge, MA',
    tuition: '$55,000',
    acceptanceRate: '5%',
    students: '23,000'
  },
  {
    name: 'Stanford University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 2,
    location: 'Stanford, CA',
    tuition: '$56,000',
    acceptanceRate: '4%',
    students: '17,000'
  },
  {
    name: 'MIT',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 3,
    location: 'Cambridge, MA',
    tuition: '$57,000',
    acceptanceRate: '7%',
    students: '11,000'
  },
  {
    name: 'Yale University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 4,
    location: 'New Haven, CT',
    tuition: '$59,000',
    acceptanceRate: '6%',
    students: '13,000'
  }
];

const visaSteps = [
  {
    step: 1,
    title: 'Get Accepted',
    description: 'Receive I-20 form from SEVP-approved school',
    duration: '1-3 months'
  },
  {
    step: 2,
    title: 'Pay SEVIS Fee',
    description: 'Pay $350 SEVIS fee and get receipt',
    duration: '1 day'
  },
  {
    step: 3,
    title: 'Complete DS-160',
    description: 'Fill out online visa application form',
    duration: '2-3 hours'
  },
  {
    step: 4,
    title: 'Schedule Interview',
    description: 'Book appointment at US embassy/consulate',
    duration: '1-4 weeks wait'
  },
  {
    step: 5,
    title: 'Attend Interview',
    description: 'Visa interview with consular officer',
    duration: '15-30 minutes'
  },
  {
    step: 6,
    title: 'Receive Visa',
    description: 'Get passport with F-1 visa stamp',
    duration: '3-10 days'
  }
];

const costBreakdown = [
  { category: 'Tuition (Public)', amount: '$30,000', color: 'bg-blue-500' },
  { category: 'Tuition (Private)', amount: '$55,000', color: 'bg-purple-500' },
  { category: 'Living Expenses', amount: '$15,000', color: 'bg-green-500' },
  { category: 'Books & Supplies', amount: '$2,000', color: 'bg-yellow-500' },
  { category: 'Health Insurance', amount: '$3,000', color: 'bg-red-500' },
  { category: 'Personal Expenses', amount: '$5,000', color: 'bg-indigo-500' }
];

const intakeTimeline = [
  {
    intake: 'Fall Intake',
    months: 'August - December',
    deadline: 'January - March',
    description: 'Main intake with maximum course options',
    popularity: 'Most Popular'
  },
  {
    intake: 'Spring Intake',
    months: 'January - May',
    deadline: 'September - November',
    description: 'Good alternative with decent course selection',
    popularity: 'Popular'
  },
  {
    intake: 'Summer Intake',
    months: 'May - August',
    deadline: 'February - April',
    description: 'Limited courses, mainly for specific programs',
    popularity: 'Limited'
  }
];

const studentStories = [
  {
    name: 'Priya Sharma',
    university: 'Stanford University',
    course: 'MS Computer Science',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Studying at Stanford has been a dream come true. The innovation ecosystem here is unmatched, and I\'ve already secured a job at Google!',
    outcome: 'Software Engineer at Google'
  },
  {
    name: 'Raj Patel',
    university: 'Harvard Business School',
    course: 'MBA',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Harvard\'s network and case study method transformed my business thinking. The connections I made here are invaluable.',
    outcome: 'Management Consultant at McKinsey'
  },
  {
    name: 'Sarah Chen',
    university: 'MIT',
    course: 'PhD in AI',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'MIT\'s research facilities and faculty are world-class. I\'m working on cutting-edge AI research that could change the world.',
    outcome: 'AI Researcher at OpenAI'
  }
];

export default function StudyInUSAPage() {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Study in USA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl mr-4">🇺🇸</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Study in the <span className="text-blue-300">United States</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Home to world's top universities, cutting-edge research, and unlimited opportunities for academic and career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                Explore Universities
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">US Education System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The American education system is renowned for its flexibility, research opportunities, and practical approach to learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Undergraduate (Bachelor\'s)',
                duration: '4 Years',
                description: 'Liberal arts foundation with major specialization in final 2 years',
                features: ['General Education Requirements', 'Major & Minor Options', 'Internship Opportunities', 'Research Projects']
              },
              {
                title: 'Graduate (Master\'s)',
                duration: '1-2 Years',
                description: 'Specialized advanced study with thesis or coursework options',
                features: ['Specialized Curriculum', 'Research Opportunities', 'Industry Connections', 'Practical Training']
              },
              {
                title: 'Doctoral (PhD)',
                duration: '4-7 Years',
                description: 'Original research leading to dissertation and expertise in field',
                features: ['Independent Research', 'Teaching Experience', 'Conference Presentations', 'Publication Opportunities']
              }
            ].map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal-blue mb-2">{level.title}</h3>
                  <div className="text-blue-600 font-semibold text-lg">{level.duration}</div>
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Popular Courses in USA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most sought-after programs that offer excellent career prospects and high earning potential.
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
                  <h3 className="text-xl font-bold text-charcoal-blue group-hover:text-blue-600 transition-colors">
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Explore Programs
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Highlights Carousel */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Top Universities in USA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-renowned institutions that have shaped leaders, innovators, and Nobel Prize winners.
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
                    src={university.logo}
                    alt={university.name}
                    className="w-16 h-16 mx-auto mb-3 rounded-full object-cover"
                  />
                  <Badge className="bg-blue-600 text-white mb-2">#{university.ranking} Global</Badge>
                  <h3 className="text-lg font-bold text-charcoal-blue">{university.name}</h3>
                  <p className="text-gray-600 text-sm">{university.location}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tuition:</span>
                    <span className="font-semibold">{university.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Acceptance:</span>
                    <span className="font-semibold text-red-600">{university.acceptanceRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Students:</span>
                    <span className="font-semibold">{university.students}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">F-1 Visa Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your US student visa with our expert guidance.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
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
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                    <div className="text-blue-600 font-bold text-lg mb-2">Step {step.step}</div>
                    <h4 className="text-xl font-bold text-charcoal-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-blue-600 font-semibold">{step.duration}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Cost of Studying in USA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive breakdown of expenses to help you plan your budget effectively.
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
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Annual Cost Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Public University (Total)</span>
                  <span className="text-2xl font-bold text-blue-600">$55,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Private University (Total)</span>
                  <span className="text-2xl font-bold text-purple-600">$80,000</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    * Costs vary by location and lifestyle. Scholarships and financial aid can significantly reduce expenses.
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

          <div className="grid md:grid-cols-3 gap-8">
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
                    intake.popularity === 'Most Popular' ? 'bg-green-600' :
                    intake.popularity === 'Popular' ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {intake.popularity}
                  </Badge>
                  <h3 className="text-xl font-bold text-charcoal-blue">{intake.intake}</h3>
                  <p className="text-blue-600 font-semibold">{intake.months}</p>
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
              Explore post-study work options and pathways to permanent residency in the United States.
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
                    <h4 className="font-semibold">OPT (Optional Practical Training)</h4>
                    <p className="text-gray-600 text-sm">12 months work authorization, 24 months extension for STEM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">CPT (Curricular Practical Training)</h4>
                    <p className="text-gray-600 text-sm">Work authorization during studies for internships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">H-1B Visa</h4>
                    <p className="text-gray-600 text-sm">Specialty occupation work visa for 3+3 years</p>
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
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Path to Green Card</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Employment-Based (EB-2/EB-3)</h4>
                    <p className="text-gray-600 text-sm">Employer-sponsored permanent residency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">EB-1 (Extraordinary Ability)</h4>
                    <p className="text-gray-600 text-sm">For individuals with exceptional abilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Investment Visa (EB-5)</h4>
                    <p className="text-gray-600 text-sm">Investment-based immigration program</p>
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
              Hear from our students who are now thriving in their careers across America.
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
                  src={studentStories[currentStory].image}
                  alt={studentStories[currentStory].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-charcoal-blue">{studentStories[currentStory].name}</h3>
                  <p className="text-blue-600 font-semibold">{studentStories[currentStory].course}</p>
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
                    index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your American Dream?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully made the USA their second home. Let our experts guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Book Free USA Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Download USA Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}