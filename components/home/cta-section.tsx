'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, ArrowRight, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-blue to-powder-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who have achieved their dreams of studying abroad. 
              Take the first step towards your international education today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: 'Free Consultation',
                description: 'Get expert advice on your study abroad options',
                action: 'Call Now',
                highlight: '+1 (555) 123-4567',
              },
              {
                icon: MessageCircle,
                title: 'Live Chat Support',
                description: 'Instant answers to all your questions',
                action: 'Chat Now',
                highlight: 'Available 24/7',
              },
              {
                icon: Calendar,
                title: 'Book Appointment',
                description: 'Schedule a detailed counseling session',
                action: 'Book Now',
                highlight: 'Free Assessment',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 mb-4">{item.description}</p>
                <div className="text-lg font-semibold mb-4">{item.highlight}</div>
                <div className="flex items-center justify-center text-white group-hover:text-white transition-colors">
                  <span className="font-medium">{item.action}</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-slate-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-blue px-8 py-4 text-lg font-semibold"
            >
              Take Assessment Test
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-blue-100 mb-4">Trusted by 10,000+ students worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm">98% Success Rate</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-sm">15+ Years Experience</div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="text-sm">50+ Countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}