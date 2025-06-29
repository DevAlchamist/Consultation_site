'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Award, CheckCircle, Play, Download, Calendar, Target, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

const tests = [
  {
    id: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    description: 'Most widely accepted English proficiency test for study abroad',
    duration: '2 hours 45 minutes',
    sections: ['Listening', 'Reading', 'Writing', 'Speaking'],
    scoreRange: '0-9 bands',
    validityPeriod: '2 years',
    testFee: '$215',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹12,000',
    courseDuration: '2 months',
    batchSize: '15 students',
    features: [
      'Expert Native Trainers',
      'Individual Speaking Practice',
      'Weekly Mock Tests',
      'Score Improvement Guarantee',
      'Flexible Batch Timings',
      'Study Material Included'
    ],
    targetScores: {
      'USA': '6.5-7.0',
      'UK': '6.0-7.0',
      'Canada': '6.0-7.0',
      'Australia': '6.5-7.0'
    }
  },
  {
    id: 'toefl',
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    description: 'Preferred English test for US universities and institutions',
    duration: '3 hours',
    sections: ['Reading', 'Listening', 'Speaking', 'Writing'],
    scoreRange: '0-120 points',
    validityPeriod: '2 years',
    testFee: '$185',
    image: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹15,000',
    courseDuration: '2.5 months',
    batchSize: '12 students',
    features: [
      'Computer-based Training',
      'Integrated Skills Practice',
      'Regular Mock Tests',
      'Score Prediction Tools',
      'Online Practice Platform',
      'Personalized Feedback'
    ],
    targetScores: {
      'USA': '80-100',
      'UK': '80-90',
      'Canada': '80-100',
      'Australia': '79-94'
    }
  },
  {
    id: 'gre',
    name: 'GRE',
    fullName: 'Graduate Record Examination',
    description: 'Required for most graduate programs in US and other countries',
    duration: '3 hours 45 minutes',
    sections: ['Verbal Reasoning', 'Quantitative Reasoning', 'Analytical Writing'],
    scoreRange: '260-340 points',
    validityPeriod: '5 years',
    testFee: '$213',
    image: 'https://images.pexels.com/photos/5428010/pexels-photo-5428010.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹18,000',
    courseDuration: '3 months',
    batchSize: '10 students',
    features: [
      'Comprehensive Curriculum',
      'Advanced Problem Solving',
      'Vocabulary Building',
      'Essay Writing Techniques',
      'Adaptive Test Practice',
      'Score Improvement Tracking'
    ],
    targetScores: {
      'Engineering': '310-320',
      'Business': '300-320',
      'Sciences': '305-315',
      'Humanities': '300-310'
    }
  },
  {
    id: 'gmat',
    name: 'GMAT',
    fullName: 'Graduate Management Admission Test',
    description: 'Essential for MBA and business school admissions worldwide',
    duration: '3 hours 7 minutes',
    sections: ['Analytical Writing', 'Integrated Reasoning', 'Quantitative', 'Verbal'],
    scoreRange: '200-800 points',
    validityPeriod: '5 years',
    testFee: '$275',
    image: 'https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹20,000',
    courseDuration: '3 months',
    batchSize: '8 students',
    features: [
      'MBA-focused Training',
      'Data Sufficiency Mastery',
      'Critical Reasoning',
      'Sentence Correction',
      'Computer Adaptive Practice',
      'Business School Guidance'
    ],
    targetScores: {
      'Top 10 MBA': '720-760',
      'Top 25 MBA': '680-720',
      'Top 50 MBA': '640-680',
      'Good MBA': '600-640'
    }
  },
  {
    id: 'sat',
    name: 'SAT',
    fullName: 'Scholastic Assessment Test',
    description: 'Standardized test for undergraduate admissions in US colleges',
    duration: '3 hours',
    sections: ['Reading', 'Writing & Language', 'Math'],
    scoreRange: '400-1600 points',
    validityPeriod: '5 years',
    testFee: '$60',
    image: 'https://images.pexels.com/photos/5427829/pexels-photo-5427829.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹14,000',
    courseDuration: '2.5 months',
    batchSize: '12 students',
    features: [
      'High School Level Prep',
      'College Board Aligned',
      'Practice Tests',
      'Score Analysis',
      'College Application Guidance',
      'Scholarship Preparation'
    ],
    targetScores: {
      'Ivy League': '1500-1600',
      'Top Universities': '1400-1500',
      'Good Universities': '1200-1400',
      'State Universities': '1000-1200'
    }
  },
  {
    id: 'pte',
    name: 'PTE',
    fullName: 'Pearson Test of English',
    description: 'Computer-based English proficiency test with quick results',
    duration: '3 hours',
    sections: ['Speaking & Writing', 'Reading', 'Listening'],
    scoreRange: '10-90 points',
    validityPeriod: '2 years',
    testFee: '$200',
    image: 'https://images.pexels.com/photos/5428661/pexels-photo-5428661.jpeg?auto=compress&cs=tinysrgb&w=800',
    courseFee: '₹13,000',
    courseDuration: '2 months',
    batchSize: '15 students',
    features: [
      'AI-based Scoring',
      'Quick Results (2 days)',
      'Computer-based Format',
      'Integrated Skills',
      'Unlimited Score Sending',
      'Practice Platform Access'
    ],
    targetScores: {
      'USA': '58-65',
      'UK': '51-65',
      'Canada': '58-65',
      'Australia': '58-65'
    }
  }
];

const successStories = [
  {
    name: 'Priya Sharma',
    test: 'IELTS',
    initialScore: '5.5',
    finalScore: '8.0',
    improvement: '+2.5',
    university: 'University of Toronto',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Raj Patel',
    test: 'GRE',
    initialScore: '295',
    finalScore: '325',
    improvement: '+30',
    university: 'Stanford University',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sarah Chen',
    test: 'GMAT',
    initialScore: '580',
    finalScore: '720',
    improvement: '+140',
    university: 'Harvard Business School',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function TestPrepPage() {
  const [selectedTest, setSelectedTest] = useState(tests[0]);

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
              Test <span className="gradient-text">Preparation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Achieve your target scores with our expert-led test preparation courses. 
              Comprehensive training for IELTS, TOEFL, GRE, GMAT, SAT, and PTE.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '95%', label: 'Success Rate' },
              { number: '5000+', label: 'Students Trained' },
              { number: '50+', label: 'Average Score Improvement' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-slate-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Selection */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Choose Your Test</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the test you need to prepare for and explore our comprehensive training programs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {tests.map((test, index) => (
              <motion.button
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedTest(test)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedTest.id === test.id
                    ? 'border-slate-blue bg-slate-blue/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl font-bold text-charcoal-blue mb-1">{test.name}</div>
                <div className="text-xs text-gray-600">{test.fullName}</div>
              </motion.button>
            ))}
          </div>

          {/* Selected Test Details */}
          <motion.div
            key={selectedTest.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-charcoal-blue mb-4">
                  {selectedTest.name} Preparation
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedTest.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-slate-blue" />
                      <span className="text-sm font-medium text-charcoal-blue">Duration</span>
                    </div>
                    <div className="text-gray-600">{selectedTest.duration}</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-4 w-4 text-slate-blue" />
                      <span className="text-sm font-medium text-charcoal-blue">Score Range</span>
                    </div>
                    <div className="text-gray-600">{selectedTest.scoreRange}</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-slate-blue" />
                      <span className="text-sm font-medium text-charcoal-blue">Batch Size</span>
                    </div>
                    <div className="text-gray-600">{selectedTest.batchSize}</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-4 w-4 text-slate-blue" />
                      <span className="text-sm font-medium text-charcoal-blue">Course Fee</span>
                    </div>
                    <div className="text-slate-blue font-bold">{selectedTest.courseFee}</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1 bg-slate-blue hover:bg-slate-blue/90">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                    Free Demo Class
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12">
                <Image
              width={1200}
              height={1200}
                  src={selectedTest.image}
                  alt={selectedTest.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="sections">Sections</TabsTrigger>
                    <TabsTrigger value="scores">Target Scores</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-6">
                    <h4 className="text-lg font-bold text-charcoal-blue mb-4">Course Features</h4>
                    <ul className="space-y-3">
                      {selectedTest.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="sections" className="mt-6">
                    <h4 className="text-lg font-bold text-charcoal-blue mb-4">Test Sections</h4>
                    <div className="space-y-3">
                      {selectedTest.sections.map((section, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="font-medium text-charcoal-blue">{section}</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="h-full bg-slate-blue rounded-full" style={{ width: `${(index + 1) * 25}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="scores" className="mt-6">
                    <h4 className="text-lg font-bold text-charcoal-blue mb-4">Target Scores</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedTest.targetScores).map(([category, score]) => (
                        <div key={category} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <span className="font-medium text-charcoal-blue">{category}</span>
                          <span className="text-slate-blue font-bold">{score}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
              See how our students achieved their target scores and got into their dream universities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <Image
              width={1200}
              height={1200}
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-charcoal-blue mb-2">{story.name}</h3>
                <div className="text-slate-blue font-semibold mb-4">{story.test} Preparation</div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Initial</div>
                    <div className="text-lg font-bold text-red-500">{story.initialScore}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Final</div>
                    <div className="text-lg font-bold text-green-500">{story.finalScore}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Improvement</div>
                    <div className="text-lg font-bold text-slate-blue">{story.improvement}</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Now studying at <span className="font-semibold text-charcoal-blue">{story.university}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Why Choose Our Test Prep?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to maximize your test performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from certified trainers with perfect scores and years of teaching experience.',
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Material',
                description: 'Access to latest study materials, practice tests, and exclusive resources.',
              },
              {
                icon: Target,
                title: 'Score Guarantee',
                description: 'We guarantee score improvement or provide additional coaching at no extra cost.',
              },
              {
                icon: Calendar,
                title: 'Flexible Scheduling',
                description: 'Choose from multiple batch timings including weekend and evening classes.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-blue/10 rounded-full mb-4">
                  <Settings className="h-8 w-8 text-slate-blue" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Achieve Your Target Score?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who achieved their dream scores with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-blue hover:bg-gray-100">
                <Play className="h-4 w-4 mr-2" />
                Take Free Mock Test
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-blue">
                <Download className="h-4 w-4 mr-2" />
                Download Study Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}