'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const news = [
  {
    title: 'New Scholarship Opportunities for STEM Students',
    excerpt: 'Discover exclusive scholarship programs worth up to $100,000 for STEM students applying to top universities.',
    date: '2024-01-15',
    category: 'Scholarships',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '3 min read',
  },
  {
    title: 'Canada Updates Post-Graduation Work Permit Rules',
    excerpt: 'Latest updates on PGWP eligibility and application process for international students in Canada.',
    date: '2024-01-12',
    category: 'Visa Updates',
    image: 'https://images.pexels.com/photos/1430818/pexels-photo-1430818.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
  },
  {
    title: 'Top 10 Universities for AI and Machine Learning',
    excerpt: 'Explore the best institutions offering cutting-edge AI programs with excellent career prospects.',
    date: '2024-01-10',
    category: 'University Rankings',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
  },
];

const events = [
  {
    title: 'University Fair: Study in Europe',
    date: '2024-02-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Convention Center, Mumbai',
    description: 'Meet representatives from 50+ European universities and explore study opportunities.',
    attendees: 500,
    type: 'In-person',
  },
  {
    title: 'IELTS Preparation Workshop',
    date: '2024-02-20',
    time: '2:00 PM - 5:00 PM',
    location: 'Online',
    description: 'Intensive workshop covering all IELTS sections with expert tips and practice sessions.',
    attendees: 200,
    type: 'Online',
  },
  {
    title: 'Scholarship Application Masterclass',
    date: '2024-02-25',
    time: '11:00 AM - 1:00 PM',
    location: 'StudyGlobal Office, Delhi',
    description: 'Learn how to write winning scholarship applications with our expert counselors.',
    attendees: 50,
    type: 'In-person',
  },
];

export function NewsEventsSection() {
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
            Latest News & <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments in international education and join our exclusive events.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* News Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-charcoal-blue mb-8 flex items-center">
                <span className="w-8 h-8 bg-soft-rose rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  N
                </span>
                Latest News
              </h3>
              
              <div className="space-y-6">
                {news.map((article, index) => (
                  <motion.article
                    key={article.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex space-x-4">
                      <Image
              width={1200}
              height={1200}
                        src={article.image}
                        alt={article.title}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 text-xs bg-slate-blue/10 text-slate-blue rounded-full font-medium">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <h4 className="font-bold text-charcoal-blue mb-2 group-hover:text-slate-blue transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-blue group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                  View All News
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Events Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-charcoal-blue mb-8 flex items-center">
                <span className="w-8 h-8 bg-sage-green rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  E
                </span>
                Upcoming Events
              </h3>

              <div className="space-y-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-charcoal-blue mb-2 group-hover:text-slate-blue transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {event.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        event.type === 'Online' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {event.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-blue" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-slate-blue" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-slate-blue" />
                        <span>{event.attendees} attendees</span>
                      </div>
                      <div className="text-slate-blue font-medium">
                        {event.time}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button size="sm" className="w-full bg-slate-blue hover:bg-slate-blue/90">
                        Register Now
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                  View All Events
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}