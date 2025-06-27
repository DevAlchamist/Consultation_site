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
    name: 'Mining & Resources',
    icon: '⛏️',
    description: 'World-leading programs in mining engineering and resource management',
    averageSalary: 'AUD $95,000',
    duration: '4 years',
    topUniversities: ['UNSW', 'UQ', 'Curtin']
  },
  {
    name: 'Marine Science',
    icon: '🌊',
    description: 'Unique marine biology and oceanography programs',
    averageSalary: 'AUD $70,000',
    duration: '3-4 years',
    topUniversities: ['JCU', 'UQ', 'Flinders']
  },
  {
    name: 'Agriculture & Veterinary',
    icon: '🐄',
    description: 'Leading agricultural and veterinary science programs',
    averageSalary: 'AUD $75,000',
    duration: '4-6 years',
    topUniversities: ['Melbourne', 'Sydney', 'UQ']
  },
  {
    name: 'Tourism & Hospitality',
    icon: '🏨',
    description: 'World-class hospitality and tourism management programs',
    averageSalary: 'AUD $60,000',
    duration: '3 years',
    topUniversities: ['Griffith', 'UQ', 'La Trobe']
  },
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'Innovative engineering programs with industry partnerships',
    averageSalary: 'AUD $80,000',
    duration: '4 years',
    topUniversities: ['Melbourne', 'UNSW', 'Monash']
  },
  {
    name: 'Business & Finance',
    icon: '💼',
    description: 'Comprehensive business programs with Asia-Pacific focus',
    averageSalary: 'AUD $70,000',
    duration: '3 years',
    topUniversities: ['Melbourne', 'UNSW', 'Monash']
  }
];

const topUniversities = [
  {
    name: 'University of Melbourne',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 1,
    location: 'Melbourne, VIC',
    tuition: 'AUD $45,000',
    acceptanceRate: '70%',
    students: '50,000'
  },
  {
    name: 'Australian National University',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 2,
    location: 'Canberra, ACT',
    tuition: 'AUD $47,000',
    acceptanceRate: '35%',
    students: '25,000'
  },
  {
    name: 'University of Sydney',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 3,
    location: 'Sydney, NSW',
    tuition: 'AUD $48,000',
    acceptanceRate: '30%',
    students: '73,000'
  },
  {
    name: 'University of New South Wales',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 4,
    location: 'Sydney, NSW',
    tuition: 'AUD $46,000',
    acceptanceRate: '65%',
    students: '65,000'
  }
];

const visaSteps = [
  {
    step: 1,
    title: 'Get CoE',
    description: 'Receive Confirmation of Enrolment from Australian institution',
    duration: '1-2 weeks'
  },
  {
    step: 2,
    title: 'Prepare GTE Statement',
    description: 'Write Genuine Temporary Entrant statement',
    duration: '1 week'
  },
  {
    step: 3,
    title: 'Gather Documents',
    description: 'Collect all required documents and financial evidence',
    duration: '2-3 weeks'
  },
  {
    step: 4,
    title: 'Submit Application',
    description: 'Apply online through ImmiAccount',
    duration: '2-3 hours'
  },
  {
    step: 5,
    title: 'Health & Character',
    description: 'Complete health examinations and police checks',
    duration: '2-4 weeks'
  },
  {
    step: 6,
    title: 'Visa Decision',
    description: 'Receive visa grant notification',
    duration: '4-6 weeks'
  }
];

const costBreakdown = [
  { category: 'Tuition Fees', amount: 'AUD $40,000', color: 'bg-green-500' },
  { category: 'Accommodation', amount: 'AUD $15,000', color: 'bg-blue-500' },
  { category: 'Living Expenses', amount: 'AUD $12,000', color: 'bg-yellow-500' },
  { category: 'Books & Supplies', amount: 'AUD $2,500', color: 'bg-purple-500' },
  { category: 'OSHC Insurance', amount: 'AUD $650', color: 'bg-red-500' },
  { category: 'Personal Expenses', amount: 'AUD $5,000', color: 'bg-indigo-500' }
];

const intakeTimeline = [
  {
    intake: 'Semester 1',
    months: 'February - June',
    deadline: 'October - December',
    description: 'Main intake with maximum course options',
    popularity: 'Most Popular'
  },
  {
    intake: 'Semester 2',
    months: 'July - November',
    deadline: 'April - May',
    description: 'Good alternative with decent course selection',
    popularity: 'Popular'
  },
  {
    intake: 'Trimester 3',
    months: 'November - February',
    deadline: 'August - September',
    description: 'Limited courses, mainly for specific programs',
    popularity: 'Limited'
  }
];

const studentStories = [
  {
    name: 'Ananya Sharma',
    university: 'University of Melbourne',
    course: 'Master of Engineering',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Melbourne\'s multicultural environment and world-class engineering facilities provided the perfect setting for my studies. The industry connections are incredible.',
    outcome: 'Senior Engineer at BHP Billiton'
  },
  {
    name: 'James Chen',
    university: 'University of Sydney',
    course: 'Master of Business Administration',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Sydney\'s business school opened doors to the Asia-Pacific market. The networking opportunities and practical approach to learning were outstanding.',
    outcome: 'Investment Manager at Macquarie Bank'
  },
  {
    name: 'Sophie Wilson',
    university: 'James Cook University',
    course: 'Marine Biology',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Studying marine biology near the Great Barrier Reef was a dream come true. The hands-on research experience was unmatched anywhere in the world.',
    outcome: 'Marine Research Scientist at AIMS'
  }
];

export default function StudyInAustraliaPage() {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Study in Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-yellow-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white container-max px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl mr-4">🇦🇺</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Study in <span className="text-yellow-300">Australia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience innovative education Down Under with unique programs, stunning landscapes, and excellent post-study work opportunities in a welcoming multicultural society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                Explore Universities
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-4">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Australian Education System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Australia&apos;s education system emphasizes practical learning, research innovation, and strong industry connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Undergraduate (Bachelor\'s)',
                duration: '3-4 Years',
                description: 'Comprehensive programs with practical learning and industry exposure',
                features: ['Industry Placements', 'Research Projects', 'Practical Learning', 'Global Perspective']
              },
              {
                title: 'Postgraduate (Master\'s)',
                duration: '1-2 Years',
                description: 'Advanced study with coursework or research options',
                features: ['Specialized Knowledge', 'Research Opportunities', 'Industry Networks', 'Professional Skills']
              },
              {
                title: 'Doctoral (PhD)',
                duration: '3-4 Years',
                description: 'Research-focused programs with world-class supervision',
                features: ['Research Excellence', 'International Collaboration', 'Publication Support', 'Career Development']
              }
            ].map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg border border-green-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal-blue mb-2">{level.title}</h3>
                  <div className="text-green-600 font-semibold text-lg">{level.duration}</div>
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Popular Courses in Australia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover unique programs that leverage Australia&apos;s natural resources and strategic location in the Asia-Pacific region.
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
                  <h3 className="text-xl font-bold text-charcoal-blue group-hover:text-green-600 transition-colors">
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
                <Button className="w-full bg-green-600 hover:bg-green-700">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Top Universities in Australia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class institutions known for research excellence, innovation, and strong industry partnerships.
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
                  <Badge className="bg-green-600 text-white mb-2">#{university.ranking} Australia</Badge>
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
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Student Visa (Subclass 500) Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your Australian student visa with our expert guidance.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
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
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
                    <div className="text-green-600 font-bold text-lg mb-2">Step {step.step}</div>
                    <h4 className="text-xl font-bold text-charcoal-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="text-sm text-green-600 font-semibold">{step.duration}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Cost of Studying in Australia</h2>
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
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Annual Cost Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Annual Cost</span>
                  <span className="text-2xl font-bold text-green-600">AUD $75,150</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    * Costs vary by city and lifestyle. Sydney and Melbourne are typically more expensive than other cities.
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
                  <p className="text-green-600 font-semibold">{intake.months}</p>
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
              Australia offers excellent post-study work opportunities and pathways to permanent residency.
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
                    <h4 className="font-semibold">Temporary Graduate Visa (485)</h4>
                    <p className="text-gray-600 text-sm">2-4 years work authorization after graduation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Part-time Work</h4>
                    <p className="text-gray-600 text-sm">48 hours per fortnight during studies, unlimited during breaks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Skilled Worker Visa (189/190)</h4>
                    <p className="text-gray-600 text-sm">Permanent residency for skilled workers</p>
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
                    <h4 className="font-semibold">SkillSelect System</h4>
                    <p className="text-gray-600 text-sm">Points-based system for skilled migration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">State Nomination</h4>
                    <p className="text-gray-600 text-sm">Additional points through state/territory nomination</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Regional Study Benefits</h4>
                    <p className="text-gray-600 text-sm">Extra points and extended work rights for regional study</p>
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
              Hear from our students who are now thriving in their careers across Australia.
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
                  <p className="text-green-600 font-semibold">{studentStories[currentStory].course}</p>
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
                    index === currentStory ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Your Australian Adventure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience world-class education in one of the most liveable countries. Start your journey to Australia with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                Book Free Australia Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                Download Australia Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}