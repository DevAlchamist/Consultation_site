'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, GraduationCap, Plane, Shield, Users, ServerIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FileText,
    title: 'Profile Evaluation',
    description: 'Comprehensive assessment of your academic background, achievements, and career goals.',
    features: ['Academic Assessment', 'Career Counseling', 'Goal Setting', 'Personalized Roadmap'],
    color: 'soft-rose',
  },
  {
    icon: Search,
    title: 'University Selection',
    description: 'Find the perfect match from thousands of programs across 50+ countries.',
    features: ['Program Matching', 'Ranking Analysis', 'Cost Comparison', 'Admission Requirements'],
    color: 'sage-green',
  },
  {
    icon: GraduationCap,
    title: 'Application Support',
    description: 'End-to-end assistance with applications, essays, and documentation.',
    features: ['Application Forms', 'SOP Writing', 'LOR Guidance', 'Interview Prep'],
    color: 'powder-blue',
  },
  {
    icon: Shield,
    title: 'Visa Guidance',
    description: 'Expert visa assistance with high success rates across all countries.',
    features: ['Document Checklist', 'Visa Interview Prep', 'Application Tracking', 'Success Guarantee'],
    color: 'slate-blue',
  },
  {
    icon: Users,
    title: 'Test Preparation',
    description: 'Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and more.',
    features: ['Expert Instructors', 'Mock Tests', 'Personalized Study Plans', 'Score Improvement'],
    color: 'soft-rose',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Support',
    description: 'Complete preparation for your life abroad with cultural orientation.',
    features: ['Cultural Briefing', 'Accommodation Help', 'Airport Pickup', 'Local Support'],
    color: 'sage-green',
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-blue mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to post-arrival support, we provide comprehensive services 
            to ensure your study abroad journey is smooth and successful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors duration-300`}>
                <ServerIcon className={`h-8 w-8 text-${service.color === 'slate-blue' ? 'slate-blue' : service.color === 'soft-rose' ? 'soft-rose' : service.color === 'sage-green' ? 'sage-green' : 'powder-blue'}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-charcoal-blue mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-blue rounded-full" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white group-hover:bg-slate-blue group-hover:text-white transition-colors"
              >
                Learn More
              </Button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-blue/5 to-powder-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-blue mb-4">
              Our Service Guarantee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-slate-blue">98%</div>
                <div className="text-gray-600">Visa Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-slate-blue">24/7</div>
                <div className="text-gray-600">Student Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-slate-blue">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-slate-blue hover:bg-slate-blue/90 text-white px-8 py-3">
                Explore All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}