'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, GraduationCap, Plane, Shield, Users, BookOpen, Award, Clock, CheckCircle, ArrowRight, Network, FileTextIcon, SearchCheck, GraduationCapIcon, ShieldAlert, Users2, PlaneIcon, BookDashed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const services = [
  {
    id: 'profile-evaluation',
    icon: <FileTextIcon/>,
    title: 'Profile Evaluation',
    shortDesc: 'Comprehensive assessment of your academic background and career goals',
    longDesc: 'Our expert counselors conduct a thorough evaluation of your academic profile, work experience, and career aspirations to provide personalized recommendations for your study abroad journey.',
    features: [
      'Academic Background Analysis',
      'Career Goal Assessment',
      'Strength & Weakness Identification',
      'Personalized University Recommendations',
      'Course Selection Guidance',
      'Timeline Planning'
    ],
    process: [
      'Submit your academic documents',
      'One-on-one counseling session',
      'Detailed profile analysis',
      'Receive comprehensive report'
    ],
    price: 'Free',
    duration: '1-2 hours',
    color: 'soft-rose',
  },
  {
    id: 'university-selection',
    icon: <SearchCheck/>,
    title: 'University Selection',
    shortDesc: 'Find the perfect match from thousands of programs worldwide',
    longDesc: 'Navigate through thousands of universities and programs across 50+ countries with our expert guidance to find institutions that align with your academic goals, budget, and career aspirations.',
    features: [
      'University Database Access',
      'Program Matching Algorithm',
      'Ranking & Reputation Analysis',
      'Cost Comparison Tools',
      'Admission Requirements Review',
      'Scholarship Opportunities'
    ],
    process: [
      'Profile assessment completion',
      'University database search',
      'Shortlist creation & review',
      'Final selection consultation'
    ],
    price: '₹15,000',
    duration: '2-3 weeks',
    color: 'sage-green',
  },
  {
    id: 'application-support',
    icon: <GraduationCapIcon/>,
    title: 'Application Support',
    shortDesc: 'End-to-end assistance with applications and documentation',
    longDesc: 'Complete application support including document preparation, essay writing, letter of recommendation guidance, and interview preparation to maximize your chances of admission.',
    features: [
      'Application Form Completion',
      'Statement of Purpose Writing',
      'Letter of Recommendation Guidance',
      'Document Verification',
      'Interview Preparation',
      'Application Tracking'
    ],
    process: [
      'Document collection & review',
      'Application drafting',
      'Multiple review rounds',
      'Final submission & tracking'
    ],
    price: '₹25,000 per university',
    duration: '4-6 weeks',
    color: 'powder-blue',
  },
  {
    id: 'visa-guidance',
    icon: <ShieldAlert/>,
    title: 'Visa Guidance',
    shortDesc: 'Expert visa assistance with 98% success rate',
    longDesc: 'Comprehensive visa support with document preparation, application filing, interview coaching, and follow-up assistance. Our 98% success rate speaks for our expertise.',
    features: [
      'Visa Category Assessment',
      'Document Checklist & Review',
      'Application Form Assistance',
      'Interview Preparation',
      'Embassy Liaison',
      'Post-Approval Support'
    ],
    process: [
      'Visa eligibility assessment',
      'Document preparation',
      'Application submission',
      'Interview coaching & support'
    ],
    price: '₹20,000',
    duration: '3-4 weeks',
    color: 'slate-blue',
  },
  {
    id: 'test-preparation',
    icon: <Users2/>,
    title: 'Test Preparation',
    shortDesc: 'Comprehensive coaching for IELTS, TOEFL, GRE, GMAT',
    longDesc: 'Expert-led test preparation courses with personalized study plans, mock tests, and score improvement guarantees for all major standardized tests.',
    features: [
      'Expert Instructors',
      'Personalized Study Plans',
      'Regular Mock Tests',
      'Score Improvement Tracking',
      'Flexible Batch Timings',
      'Online & Offline Classes'
    ],
    process: [
      'Diagnostic test & assessment',
      'Customized study plan creation',
      'Regular classes & practice',
      'Final test preparation'
    ],
    price: 'Starting ₹12,000',
    duration: '2-4 months',
    color: 'soft-rose',
  },
  {
    id: 'pre-departure',
    icon: <PlaneIcon/>,
    title: 'Pre-Departure Support',
    shortDesc: 'Complete preparation for your life abroad',
    longDesc: 'Comprehensive pre-departure orientation covering cultural adaptation, accommodation assistance, travel arrangements, and ongoing support in your destination country.',
    features: [
      'Cultural Orientation',
      'Accommodation Assistance',
      'Travel Arrangements',
      'Banking & Insurance Guidance',
      'Airport Pickup Coordination',
      'Local Support Network'
    ],
    process: [
      'Pre-departure briefing session',
      'Accommodation arrangement',
      'Travel documentation',
      'Arrival support coordination'
    ],
    price: '₹10,000',
    duration: '2-3 weeks',
    color: 'sage-green',
  },
];

const packages = [
  {
    name: 'Basic Package',
    price: '₹35,000',
    description: 'Perfect for students applying to 2-3 universities',
    features: [
      'Profile Evaluation',
      'University Selection (up to 3)',
      'Application Support (2 universities)',
      'Basic Visa Guidance',
      'Email Support'
    ],
    popular: false,
  },
  {
    name: 'Premium Package',
    price: '₹65,000',
    description: 'Comprehensive support for serious applicants',
    features: [
      'Everything in Basic Package',
      'Application Support (5 universities)',
      'Complete Visa Assistance',
      'Test Prep Discount (20%)',
      'Pre-departure Briefing',
      'Priority Support'
    ],
    popular: true,
  },
  {
    name: 'Elite Package',
    price: '₹95,000',
    description: 'Premium end-to-end service with guaranteed results',
    features: [
      'Everything in Premium Package',
      'Unlimited University Applications',
      'Scholarship Application Support',
      'Interview Coaching',
      'Post-arrival Support',
      '24/7 Dedicated Support'
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive study abroad services designed to guide you through every step 
              of your international education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors duration-300`}>
                  <Network className={`h-8 w-8 text-${service.color === 'slate-blue' ? 'slate-blue' : service.color === 'soft-rose' ? 'soft-rose' : service.color === 'sage-green' ? 'sage-green' : 'powder-blue'}`} />
                </div>
                <h3 className="text-xl font-bold text-charcoal-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-slate-blue font-bold">{service.price}</div>
                  <ArrowRight className="h-4 w-4 text-slate-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-${selectedService.color}/10`}>
                  <BookDashed className={`h-10 w-10 text-${selectedService.color === 'slate-blue' ? 'slate-blue' : selectedService.color === 'soft-rose' ? 'soft-rose' : selectedService.color === 'sage-green' ? 'sage-green' : 'powder-blue'}`} />
                </div>
                <h2 className="text-3xl font-bold text-charcoal-blue mb-4">{selectedService.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedService.longDesc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-slate-blue" />
                    <span className="text-sm text-gray-600">{selectedService.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-slate-blue" />
                    <span className="text-sm font-semibold text-slate-blue">{selectedService.price}</span>
                  </div>
                </div>

                <Button className="w-full bg-slate-blue hover:bg-slate-blue/90">
                  Get Started with {selectedService.title}
                </Button>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12">
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="process">Process</TabsTrigger>
                  </TabsList>
                  <TabsContent value="features" className="mt-6">
                    <h3 className="text-lg font-bold text-charcoal-blue mb-4">What&apos;s Included</h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="process" className="mt-6">
                    <h3 className="text-lg font-bold text-charcoal-blue mb-4">How It Works</h3>
                    <ol className="space-y-4">
                      {selectedService.process.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-slate-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  pkg.popular ? 'border-slate-blue' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-charcoal-blue mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-slate-blue mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-slate-blue hover:bg-slate-blue/90' 
                      : 'bg-gray-100 text-charcoal-blue hover:bg-gray-200'
                  }`}
                >
                  Choose {pkg.name}
                </Button>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your study abroad goals and find the perfect service package for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-blue hover:bg-gray-100">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-blue">
                Download Service Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}