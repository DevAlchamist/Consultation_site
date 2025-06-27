'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const destinations = [
  {
    country: 'United States',
    image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '4,000+',
    averageCost: '$30,000-$60,000',
    popularCourses: ['Computer Science', 'MBA', 'Engineering', 'Medicine'],
    description: 'Home to world-renowned universities and cutting-edge research facilities.',
    flag: '🇺🇸',
    href: '/study-in-usa',
  },
  {
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/460620/pexels-photo-460620.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '160+',
    averageCost: '£15,000-£35,000',
    popularCourses: ['Business', 'Law', 'Engineering', 'Arts'],
    description: 'Rich academic heritage with globally recognized qualifications.',
    flag: '🇬🇧',
    href: '/study-in-uk',
  },
  {
    country: 'Canada',
    image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '200+',
    averageCost: 'CAD $20,000-$40,000',
    popularCourses: ['Healthcare', 'Technology', 'Natural Sciences', 'Business'],
    description: 'High quality education with excellent post-study work opportunities.',
    flag: '🇨🇦',
    href: '/study-in-canada',
  },
  {
    country: 'Australia',
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '150+',
    averageCost: 'AUD $25,000-$45,000',
    popularCourses: ['Mining', 'Agriculture', 'Marine Science', 'Tourism'],
    description: 'Innovative education system with strong industry connections.',
    flag: '🇦🇺',
    href: '/study-in-australia',
  },
  {
    country: 'Germany',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '400+',
    averageCost: '€500-€3,000',
    popularCourses: ['Engineering', 'Automotive', 'Manufacturing', 'Research'],
    description: 'World-class education with minimal tuition fees and strong job market.',
    flag: '🇩🇪',
    href: '/study-in-germany',
  },
  {
    country: 'Ireland',
    image: 'https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800',
    universities: '50+',
    averageCost: '€12,000-€25,000',
    popularCourses: ['Technology', 'Pharmaceuticals', 'Finance', 'Agriculture'],
    description: 'English-speaking education hub with growing tech industry.',
    flag: '🇮🇪',
    href: '/study-in-ireland',
  },
];

export function TopDestinationsSection() {
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
            Top Study <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the world&apos;s most popular study destinations. Each country offers unique 
            opportunities for academic excellence and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="text-2xl">{destination.flag}</span>
                  <h3 className="text-xl font-bold text-white">{destination.country}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-slate-blue" />
                    <div>
                      <div className="font-semibold text-charcoal-blue">{destination.universities}</div>
                      <div className="text-sm text-gray-500">Universities</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-slate-blue" />
                    <div>
                      <div className="font-semibold text-charcoal-blue text-sm">{destination.averageCost}</div>
                      <div className="text-sm text-gray-500">Annual Cost</div>
                    </div>
                  </div>
                </div>

                {/* Popular Courses */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal-blue mb-2">Popular Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularCourses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs bg-gray-100 text-charcoal-blue rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white group-hover:bg-slate-blue group-hover:text-white transition-colors"
                >
                  Explore {destination.country}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
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
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal-blue mb-4">
              Not sure which destination is right for you?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our free assessment to get personalized recommendations based on your 
              academic background, interests, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-slate-blue hover:bg-slate-blue/90">
                Take Free Assessment
              </Button>
              <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                Compare Destinations
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}