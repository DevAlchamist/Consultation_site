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
    name: 'Business & Management',
    icon: '💼',
    description: 'World-class business education with strong industry links',
    averageSalary: '£45,000',
    duration: '1-3 years',
    topUniversities: ['Oxford', 'Cambridge', 'LBS']
  },
  {
    name: 'Engineering',
    icon: '⚙️',
    description: 'Innovative engineering programs with cutting-edge research',
    averageSalary: '£40,000',
    duration: '3-4 years',
    topUniversities: ['Imperial', 'Cambridge', 'UCL']
  },
  {
    name: 'Medicine',
    icon: '🏥',
    description: 'Prestigious medical schools with excellent clinical training',
    averageSalary: '£60,000',
    duration: '5-6 years',
    topUniversities: ['Oxford', 'Cambridge', 'Imperial']
  },
  {
    name: 'Law',
    icon: '⚖️',
    description: 'Traditional legal education with global recognition',
    averageSalary: '£50,000',
    duration: '3 years',
    topUniversities: ['Oxford', 'Cambridge', 'LSE']
  },
  {
    name: 'Computer Science',
    icon: '💻',
    description: 'Leading technology programs with industry partnerships',
    averageSalary: '£42,000',
    duration: '3-4 years',
    topUniversities: ['Cambridge', 'Imperial', 'UCL']
  },
  {
    name: 'Arts & Humanities',
    icon: '🎨',
    description: 'Rich cultural heritage and world-renowned programs',
    averageSalary: '£28,000',
    duration: '3 years',
    topUniversities: ['Oxford', 'Cambridge', 'UCL']
  }
];

const topUniversities = [
  {
    name: 'University of Oxford',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 1,
    location: 'Oxford',
    tuition: '£35,000',
    acceptanceRate: '18%',
    students: '24,000'
  },
  {
    name: 'University of Cambridge',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 2,
    location: 'Cambridge',
    tuition: '£33,000',
    acceptanceRate: '21%',
    students: '23,000'
  },
  {
    name: 'Imperial College London',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 3,
    location: 'London',
    tuition: '£36,000',
    acceptanceRate: '14%',
    students: '19,000'
  },
  {
    name: 'University College London',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    ranking: 4,
    location: 'London',
    tuition: '£28,000',
    acceptanceRate: '63%',
    students: '42,000'
  }
];

const visaSteps = [
  {
    step: 1,
    title: 'Get CAS',
    description: 'Receive Confirmation of Acceptance for Studies from university',
    duration: '1-2 weeks'
  },
  {
    step: 2,
    title: 'Prepare Documents',
    description: 'Gather all required documents and financial evidence',
    duration: '2-3 weeks'
  },
  {
    step: 3,
    title: 'Online Application',
    description: 'Complete visa application form online',
    duration: '2-3 hours'
  },
  {
    step: 4,
    title: 'Pay Fees',
    description: 'Pay visa fee and Immigration Health Surcharge',
    duration: '1 day'
  },
  {
    step: 5,
    title: 'Biometrics',
    description: 'Attend biometric appointment at visa center',
    duration: '30 minutes'
  },
  {
    step: 6,
    title: 'Decision',
    description: 'Receive visa decision and passport',
    duration: '3 weeks'
  }
];

const costBreakdown = [
  { category: 'Tuition Fees', amount: '£25,000', color: 'bg-blue-500' },
  { category: 'Accommodation', amount: '£8,000', color: 'bg-green-500' },
  { category: 'Living Expenses', amount: '£6,000', color: 'bg-yellow-500' },
  { category: 'Books & Supplies', amount: '£1,500', color: 'bg-purple-500' },
  { category: 'Health Surcharge', amount: '£624', color: 'bg-red-500' },
  { category: 'Personal Expenses', amount: '£3,000', color: 'bg-indigo-500' }
];

const intakeTimeline = [
  {
    intake: 'September Intake',
    months: 'September - June',
    deadline: 'January - June',
    description: 'Main intake with maximum course options',
    popularity: 'Most Popular'
  },
  {
    intake: 'January Intake',
    months: 'January - December',
    deadline: 'September - November',
    description: 'Limited courses available for this intake',
    popularity: 'Limited'
  },
  {
    intake: 'May Intake',
    months: 'May - April',
    deadline: 'February - March',
    description: 'Very few courses available',
    popularity: 'Rare'
  }
];

const studentStories = [
  {
    name: 'Arjun Mehta',
    university: 'University of Oxford',
    course: 'MSc Computer Science',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Oxford\'s tutorial system and world-class faculty transformed my understanding of computer science. The networking opportunities are unparalleled.',
    outcome: 'Software Engineer at DeepMind'
  },
  {
    name: 'Priya Singh',
    university: 'London School of Economics',
    course: 'MSc Finance',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'LSE\'s location in the heart of London\'s financial district provided incredible internship opportunities and industry connections.',
    outcome: 'Investment Banker at Goldman Sachs'
  },
  {
    name: 'David Wilson',
    university: 'Imperial College London',
    course: 'MEng Aerospace Engineering',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Imperial\'s focus on practical application and research excellence prepared me for a career in aerospace innovation.',
    outcome: 'Aerospace Engineer at Rolls-Royce'
  }
];

export default function StudyInUKPage() {
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
              width={1200}
              height={1200}
            src="https://images.pexels.com/photos/460620/pexels-photo-460620.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Study in UK"
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
              <span className="text-8xl mr-4">🇬🇧</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Study in the <span className="text-red-300">United Kingdom</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience centuries of academic excellence, rich cultural heritage, and world-class education in the birthplace of the English language.
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">UK Education System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The British education system is renowned for its academic rigor, research excellence, and shorter course durations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Undergraduate (Bachelor\'s)',
                duration: '3 Years',
                description: 'Focused study in chosen subject with optional foundation year',
                features: ['Subject Specialization', 'Tutorial System', 'Independent Study', 'Research Projects']
              },
              {
                title: 'Postgraduate (Master\'s)',
                duration: '1 Year',
                description: 'Intensive advanced study with taught or research options',
                features: ['Specialized Knowledge', 'Research Methods', 'Dissertation', 'Industry Links']
              },
              {
                title: 'Doctoral (PhD)',
                duration: '3-4 Years',
                description: 'Original research with supervision and thesis submission',
                features: ['Independent Research', 'Supervision', 'Conferences', 'Publications']
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Popular Courses in UK</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most sought-after programs that combine academic excellence with practical application.
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Top Universities in UK</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Home to some of the world's oldest and most prestigious universities with centuries of academic excellence.
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
                  <Badge className="bg-red-600 text-white mb-2">#{university.ranking} UK</Badge>
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Student Visa Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to obtaining your UK student visa with our expert guidance.
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
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Cost of Studying in UK</h2>
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
                  <span className="text-2xl font-bold text-red-600">£44,124</span>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    * Costs vary by location and lifestyle. London is typically 20-30% more expensive than other UK cities.
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
                    intake.popularity === 'Limited' ? 'bg-yellow-600' : 'bg-gray-600'
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
              Explore post-study work options and pathways to permanent residency in the United Kingdom.
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
                    <h4 className="font-semibold">Graduate Route Visa</h4>
                    <p className="text-gray-600 text-sm">2 years work authorization (3 years for PhD graduates)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Part-time Work</h4>
                    <p className="text-gray-600 text-sm">20 hours per week during studies, full-time during holidays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Skilled Worker Visa</h4>
                    <p className="text-gray-600 text-sm">Long-term work visa with path to settlement</p>
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
              <h3 className="text-2xl font-bold text-charcoal-blue mb-6">Path to Settlement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Indefinite Leave to Remain</h4>
                    <p className="text-gray-600 text-sm">Permanent residency after 5 years continuous residence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">British Citizenship</h4>
                    <p className="text-gray-600 text-sm">Eligible after 6 years total residence (1 year after ILR)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Global Talent Visa</h4>
                    <p className="text-gray-600 text-sm">For exceptional talent in specific fields</p>
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
              Hear from our students who are now thriving in their careers across the United Kingdom.
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
                  <p className="text-red-600 font-semibold">{studentStories[currentStory].course}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Experience British Excellence?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the legacy of academic excellence in the UK. Let our experts guide you through every step of your British education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4">
                Book Free UK Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4">
                Download UK Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}