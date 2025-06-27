'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, MessageSquare, CheckCircle, StepForward } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Free Profile Assessment',
    description: 'Complete our comprehensive evaluation to understand your study abroad potential and get personalized recommendations.',
    color: 'soft-rose',
  },
  {
    icon: Search,
    title: 'University & Course Selection',
    description: 'Explore thousands of programs across 50+ countries with our expert guidance to find your perfect match.',
    color: 'sage-green',
  },
  {
    icon: MessageSquare,
    title: 'Application Support',
    description: 'Get end-to-end assistance with applications, essays, documentation, and interview preparation.',
    color: 'powder-blue',
  },
  {
    icon: CheckCircle,
    title: 'Visa & Departure',
    description: 'Receive comprehensive visa guidance and pre-departure briefing to ensure a smooth transition.',
    color: 'slate-blue',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-blue mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your journey to international education simplified into four easy steps. 
            We guide you through every stage with personalized support and expert advice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 z-0">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-soft-rose to-powder-blue"
                  />
                </div>
              )}

              <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-white border-4 border-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-sm font-bold text-charcoal-blue">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-${step.color}/10 group-hover:bg-${step.color}/20 transition-colors duration-300`}>
                  <StepForward className={`h-10 w-10 text-${step.color === 'slate-blue' ? 'slate-blue' : step.color === 'soft-rose' ? 'soft-rose' : step.color === 'sage-green' ? 'sage-green' : 'powder-blue'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-charcoal-blue mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-blue/5 to-powder-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your journey? Get personalized guidance from our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Journey
            </button>
            <button className="btn-secondary">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}