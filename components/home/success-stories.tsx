'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const successStories = [
  {
    name: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'Stanford University',
    course: 'MS Computer Science',
    country: 'USA',
    flag: '🇺🇸',
    story: 'StudyGlobal helped me achieve my dream of studying at Stanford. Their personalized guidance and mock interviews were invaluable in my application process.',
    rating: 5,
    outcome: 'Now working at Google as a Software Engineer',
  },
  {
    name: 'Raj Patel',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Oxford',
    course: 'MBA',
    country: 'UK',
    flag: '🇬🇧',
    story: 'The visa guidance was exceptional. They helped me overcome initial rejections and finally secured my UK visa. Couldn\'t have done it without their support.',
    rating: 5,
    outcome: 'Leading a startup in London',
  },
  {
    name: 'Sarah Chen',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Toronto',
    course: 'PhD in Biomedical Engineering',
    country: 'Canada',
    flag: '🇨🇦',
    story: 'From profile evaluation to scholarship applications, StudyGlobal guided me through every step. I received a full scholarship worth $150,000!',
    rating: 5,
    outcome: 'Conducting groundbreaking research in Toronto',
  },
  {
    name: 'Michael Johnson',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Melbourne',
    course: 'Master of Engineering',
    country: 'Australia',
    flag: '🇦🇺',
    story: 'The pre-departure briefing prepared me well for life in Australia. The cultural orientation and practical tips made my transition so much smoother.',
    rating: 5,
    outcome: 'Working at a leading engineering firm in Melbourne',
  },
];

const achievements = [
  { number: '98%', label: 'Visa Success Rate' },
  { number: '$50M+', label: 'Scholarships Secured' },
  { number: '10,000+', label: 'Dreams Fulfilled' },
  { number: '50+', label: 'Countries Covered' },
];

export function SuccessStoriesSection() {
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped thousands of students achieve their dreams of studying abroad. 
            Your success story could be next!
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-soft-rose/50" />
                <div className="flex">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Story */}
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                "{story.story}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4 mb-4">
                <Image
              width={1200}
              height={1200}
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-charcoal-blue">{story.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{story.flag}</span>
                    <span>{story.university}</span>
                  </div>
                </div>
              </div>

              {/* Course & Outcome */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4 w-4 text-slate-blue" />
                  <span className="text-sm font-medium text-charcoal-blue">{story.course}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-slate-blue" />
                  <span className="text-sm text-gray-600">{story.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-blue to-powder-blue rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These numbers represent real students whose lives have been transformed through education abroad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-charcoal-blue mb-4">
            Ready to write your own success story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with our expert guidance. 
            Your journey to international education starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Journey
            </button>
            <button className="btn-secondary">
              Read More Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}