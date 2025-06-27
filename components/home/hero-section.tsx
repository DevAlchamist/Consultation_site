'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, GraduationCap, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const stats = [
  { icon: GraduationCap, value: '10,000+', label: 'Students Placed' },
  { icon: MapPin, value: '50+', label: 'Countries' },
  { icon: Users, value: '500+', label: 'Partner Universities' },
  { icon: GraduationCap, value: '15+', label: 'Years Experience' },
];

export function HeroSection() {
  const [searchData, setSearchData] = useState({
    course: '',
    country: '',
    level: '',
  });

  return (
    <section className="relative bg-gradient-to-br from-misty-lavender via-white to-powder-blue/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-soft-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-powder-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-blue leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Gateway to{' '}
                <span className="gradient-text">Global Education</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your dreams into reality with expert guidance for studying abroad. From university selection to visa approval, we're with you every step of the way.
              </motion.p>
            </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal-blue">Course/Program</label>
                  <Input
                    placeholder="e.g., Computer Science"
                    value={searchData.course}
                    onChange={(e) => setSearchData({...searchData, course: e.target.value})}
                    className="border-gray-200 focus:border-slate-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal-blue">Country</label>
                  <Select value={searchData.country} onValueChange={(value) => setSearchData({...searchData, country: value})}>
                    <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="ireland">Ireland</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal-blue">Study Level</label>
                  <Select value={searchData.level} onValueChange={(value) => setSearchData({...searchData, level: value})}>
                    <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's</SelectItem>
                      <SelectItem value="master">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full bg-slate-blue hover:bg-slate-blue/90 text-white font-medium">
                <Search className="h-4 w-4 mr-2" />
                Find Programs
              </Button>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-slate-blue hover:bg-slate-blue/90 text-white px-8 py-4 text-lg font-medium">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white px-8 py-4 text-lg font-medium">
                Take Free Assessment
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying abroad"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-charcoal-blue">Live Support Available</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-blue">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
                <BarChart className="h-8 w-8 text-slate-blue" />
              </div>
              <div className="text-3xl font-bold text-charcoal-blue mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-charcoal-blue/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal-blue/40 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}