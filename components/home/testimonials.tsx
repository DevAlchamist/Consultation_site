'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Zhang',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'MIT',
    course: 'MS in Computer Science',
    country: 'USA',
    rating: 5,
    testimonial: 'StudyGlobal made my dream of studying at MIT a reality. Their personalized approach and constant support throughout the application process was exceptional. I couldn\'t have asked for better guidance.',
    date: '2024',
  },
  {
    name: 'Arjun Mehta',
    image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Cambridge',
    course: 'PhD in Physics',
    country: 'UK',
    rating: 5,
    testimonial: 'The visa guidance was phenomenal. After facing initial challenges, their expert team helped me navigate the complex UK visa process successfully. Their dedication is unmatched.',
    date: '2024',
  },
  {
    name: 'Lisa Rodriguez',
    image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Toronto',
    course: 'MBA',
    country: 'Canada',
    rating: 5,
    testimonial: 'From university selection to scholarship applications, StudyGlobal guided me every step of the way. I received a 75% scholarship, which wouldn\'t have been possible without their expertise.',
    date: '2024',
  },
  {
    name: 'David Kim',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'University of Sydney',
    course: 'Master of Engineering',
    country: 'Australia',
    rating: 5,
    testimonial: 'The pre-departure support was incredible. They prepared me for Australian culture, helped with accommodation, and even arranged airport pickup. Truly a comprehensive service.',
    date: '2023',
  },
  {
    name: 'Sofia Andersson',
    image: 'https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=400',
    university: 'Technical University of Munich',
    course: 'MS in Mechanical Engineering',
    country: 'Germany',
    rating: 5,
    testimonial: 'Studying in Germany seemed impossible due to language barriers, but StudyGlobal found English-taught programs and helped with the entire process. Now I\'m living my dream!',
    date: '2023',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

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
            What Our Students <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our successful students have to say about their experience with StudyGlobal.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-soft-rose/30 mx-auto mb-6" />

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].testimonial}"
                </p>

                {/* Student Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Image
              width={1200}
              height={1200}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-charcoal-blue">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].course}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].university}, {testimonials[currentIndex].country}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 transition-colors duration-200 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-charcoal-blue" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 transition-colors duration-200 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-charcoal-blue" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-slate-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`flex-shrink-0 p-3 rounded-xl border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-slate-blue bg-slate-blue/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Image
              width={1200}
              height={1200}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-charcoal-blue">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}