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
    name: 'Healthcare & Medicine',
    icon: '🏥',
    description: 'World-class healthcare education with excellent job prospects',
    averageSalary: 'CAD $85,000',
    duration: '4-6 years',
    topUniversities: ['UofT', 'UBC', 'McGill']
  },
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'Innovative engineering programs with strong industry ties',
    averageSalary: 'CAD $75,000',
    duration: '4 years',
    topUniversities: ['Waterloo', 'UofT', 'UBC']
  },
  {
    name: 'Computer Science',
    icon: '💻',
    description: 'Leading tech programs with Silicon Valley North connections',
    averageSalary: 'CAD $80,000',
    duration: '4 years',
    topUniversities: ['Waterloo', 'UofT', 'UBC']
  },
  {
    name: 'Business Administration',
    icon: '💼',
    description: 'Comprehensive business education with global perspective',
    averageSalary: 'CAD $70,000',
    duration: '2-4 years',
    topUniversities: ['Rotman', 'Ivey', 'Sauder']
  },
  {
    name: 'Natural Resources',
    icon: '🌲',
    description: 'Unique programs in forestry, mining, and environmental science',
    averageSalary: 'CAD $65,000',
    duration: '4 years',
    topUniversities: ['UBC', 'Alberta', 'Laval']
  },
  {
    name: 'Hospitality & Tourism',
    icon: '🏨',
    description: 'World-renowned programs in hospitality management',
    averageSalary: 'CAD $55,000',
    duration: '4 years',
    topUniversities: ['Guelph', 'Calgary', 'UQAM']
  }
];

const topUniversities = [
  {
    name: 'University of Toronto',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 1,
    location: 'Toronto, ON',
    tuition: 'CAD $58,000',
    acceptanceRate: '43%',
    students: '97,000'
  },
  {
    name: 'University of British Columbia',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 2,
    location: 'Vancouver, BC',
    tuition: 'CAD $52,000',
    acceptanceRate: '52%',
    students: '66,000'
  },
  {
    name: 'McGill University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 3,
    location: 'Montreal, QC',
    tuition: 'CAD $45,000',
    acceptanceRate: '46%',
    students: '40,000'
  },
  {
    name: 'University of Waterloo',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 4,
    location: 'Waterloo, ON',
    tuition: 'CAD $55,000',
    acceptanceRate: '53%',
    students: '42,000'
  }
];

const visaSteps = [
  {
    step: 1,
    title: 'Get Acceptance Letter',
    description: 'Receive acceptance from Designated Learning Institution (DLI)',
    duration: '2-4 weeks'
  },
  {
    step: 2,
    title: 'Gather Documents',
    description: 'Collect all required documents and financial proof',
    duration: '2-3 weeks'
  },
  {
    step: 3,
    title: 'Create Online Account',
    description: 'Set up account on IRCC website',
    duration: '30 minutes'
  },
  {
    step: 4,
    title: 'Submit Application',
    description: 'Complete and submit study permit application online',
    duration: '2-3 hours'
  },
  {
    step: 5,
    title: 'Biometrics',
    description: 'Provide biometric information at VAC',
    duration: '30 minutes'
  },
  {
    step: 6,
    title: 'Receive Decision',
    description: 'Get study permit approval and travel documents',
    duration: '4-6 weeks'
  }
];

const costBreakdown = [
  { category: 'Tuition Fees', amount: 'CAD $35,000', color: 'bg-red-500' },
  { category: 'Accommodation', amount: 'CAD $12,000', color: 'bg-blue-500' },
  { category: 'Living Expenses', amount: 'CAD $10,000', color: 'bg-green-500' },
  { category: 'Books & Supplies', amount: 'CAD $2,000', color: 'bg-yellow-500' },
  { category: 'Health Insurance', amount: 'CAD $1,500', color: 'bg-purple-500' },
  { category: 'Personal Expenses', amount: 'CAD $4,000', color: 'bg-indigo-500' }
];

const intakeTimeline = [
  {
    intake: 'Fall Intake',
    months: 'September - December',
    deadline: 'January - March',
    description: 'Main intake with maximum course options',
    popularity: 'Most Popular'
  },
  {
    intake: 'Winter Intake',
    months: 'January - April',
    deadline: 'September - October',
    description: 'Good alternative with decent course selection',
    popularity: 'Popular'
  },
  {
    intake: 'Summer Intake',
    months: 'May - August',
    deadline: 'February - March',
    description: 'Limited courses, mainly for specific programs',
    popularity: 'Limited'
  }
];

const studentStories = [
  {
    name: 'Simran Kaur',
    university: 'University of Toronto',
    course: 'Master of Public Health',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Canada\'s healthcare system and multicultural environment provided the perfect setting for my public health studies. The co-op program helped me gain valuable experience.',
    outcome: 'Public Health Officer, Health Canada'
  },
  {
    name: 'Raj Singh',
    university: 'University of Waterloo',
    course: 'Computer Engineering',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Waterloo\'s co-op program is unmatched. I worked at Google, Microsoft, and Shopify during my studies. The practical experience was invaluable.',
    outcome: 'Senior Software Engineer at Shopify'
  },
  {
    name: 'Maria Santos',
    university: 'University of British Columbia',
    course: 'Environmental Science',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'UBC\'s location in Vancouver provided amazing opportunities for field research. The sustainability focus aligns perfectly with my career goals.',
    outcome: 'Environmental Consultant at Stantec'
  }
];

export default function StudyInCanadaPage() {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Study in Canada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-blue-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl mr-4">🇨🇦</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Study in <span className="text-red-300">Canada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience world-class education in one of the most welcoming countries, with excellent post-graduation opportunities and a pathway to permanent residency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                Explore Universities
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-900 px-8 py-4">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Canadian Education System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Canada&apos;s education system emphasizes practical learning, research excellence, and co-operative education programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Undergraduate (Bachelor\'s)',
                duration: '4 Years',
                description: 'Comprehensive programs with co-op and internship opportunities',
                features: ['Co-op Programs', 'Research Projects', 'Industry Partnerships', 'Practical Learning']
              },
              {
                title: 'Graduate (Master\'s)',
                duration: '1-2 Years',
                description: 'Advanced study with thesis or course-based options',
                features: ['Research Focus', 'Thesis Options', 'Professional Programs', 'Industry Connections']
              },
              {
                title: 'Doctoral (PhD)',
                duration: '4-6 Years',
                description: 'Research-intensive programs with funding opportunities',
                features: ['Research Funding', 'Teaching Assistantships', 'Conference Support', 'Publication Support']
              }
            ].map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg border border-red-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal-blue mb-2">{level.title}</h3>
                  <div className="text-red-600 font-semibold text-lg">{level.duration}</div>
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Popular Courses in Canada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs that combine academic excellence with practical experience and excellent career prospects.
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
                  <h3 className="text-xl font-bold text-charcoal-blue group-hover:text-red-600 transition-colors">
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
                <Button className="w-full bg-red-600 hover:bg-red-700">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Top Universities in Canada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class institutions known for research excellence, innovation, and student success.
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
                  <Badge className="bg-red-600 text-white mb-2">#{university.ranking} Canada</Badge>
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
                    <span className="font-semibold text-green-600">{university.acceptanceRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Students:</span>
                    <span className="font-semibold">{university.students}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Study Permit Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your Canadian study permit with our expert guidance.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
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
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
                    <div className="text-red-600 font-bold text-lg mb-2">Step {step.step}</div>
                    <h4 className="text-xl font-bold text-charcoal-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-red-600 font-semibold">{step.duration}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Cost of Studying in Canada</h2>
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
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Annual Cost Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Annual Cost</span>
                  <span className="text-2xl font-bold text-red-600">CAD $64,500</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    * Costs vary by province and lifestyle. Quebec and Atlantic provinces are typically more affordable.
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
                  <p className="text-red-600 font-semibold">{intake.months}</p>
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
              Canada offers excellent post-study work opportunities and clear pathways to permanent residency.
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
                    <h4 className="font-semibold">Post-Graduation Work Permit (PGWP)</h4>
                    <p className="text-gray-600 text-sm">Up to 3 years work authorization after graduation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Co-op Work Permits</h4>
                    <p className="text-gray-600 text-sm">Work during studies through co-operative programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Part-time Work</h4>
                    <p className="text-gray-600 text-sm">20 hours per week during studies, full-time during breaks</p>
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
                    <h4 className="font-semibold">Canadian Experience Class (CEC)</h4>
                    <p className="text-gray-600 text-sm">PR pathway for graduates with Canadian work experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Provincial Nominee Program (PNP)</h4>
                    <p className="text-gray-600 text-sm">Province-specific immigration programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Express Entry System</h4>
                    <p className="text-gray-600 text-sm">Points-based immigration system for skilled workers</p>
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
              Hear from our students who are now thriving in their careers across Canada.
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
                  <p className="text-red-600 font-semibold">{studentStories[currentStory].course}</p>
                  <p className="text-gray-600">{studentStories[currentStory].university}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                &quot;{studentStories[currentStory].story}&quot;
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
                    index === currentStory ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-blue-600">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Call Canada Home?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of international students who have made Canada their home. Experience world-class education with a clear path to permanent residency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
                Book Free Canada Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4">
                Download Canada Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}