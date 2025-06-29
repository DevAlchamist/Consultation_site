'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Clock, DollarSign, Users, Star, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Master of Science in Computer Science',
    university: 'Stanford University',
    country: 'USA',
    duration: '2 years',
    tuition: '$55,000/year',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    level: 'Masters',
    rating: 4.9,
    students: 1200,
    description: 'Advanced computer science program focusing on AI, machine learning, and software engineering.',
    requirements: {
      gpa: 3.7,
      gre: 320,
      ielts: 7.0,
      workExp: 'Preferred'
    },
    careerOutcomes: ['Software Engineer', 'Data Scientist', 'Research Scientist', 'Product Manager'],
    averageSalary: '$150,000',
    employmentRate: 98,
  },
  {
    id: 2,
    title: 'MBA - Master of Business Administration',
    university: 'Harvard Business School',
    country: 'USA',
    duration: '2 years',
    tuition: '$73,440/year',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Business',
    level: 'Masters',
    rating: 4.8,
    students: 900,
    description: 'World-renowned MBA program preparing leaders for global business challenges.',
    requirements: {
      gpa: 3.6,
      gmat: 730,
      ielts: 7.5,
      workExp: '3+ years'
    },
    careerOutcomes: ['Management Consultant', 'Investment Banker', 'CEO', 'Entrepreneur'],
    averageSalary: '$180,000',
    employmentRate: 95,
  },
  {
    id: 3,
    title: 'Bachelor of Engineering - Mechanical',
    university: 'University of Cambridge',
    country: 'UK',
    duration: '3 years',
    tuition: '£35,000/year',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Engineering',
    level: 'Bachelors',
    rating: 4.7,
    students: 800,
    description: 'Comprehensive mechanical engineering program with strong industry connections.',
    requirements: {
      gpa: 3.8,
      sat: 1450,
      ielts: 7.0,
      workExp: 'Not required'
    },
    careerOutcomes: ['Mechanical Engineer', 'Design Engineer', 'Project Manager', 'Consultant'],
    averageSalary: '£45,000',
    employmentRate: 92,
  },
  {
    id: 4,
    title: 'Doctor of Medicine (MD)',
    university: 'University of Toronto',
    country: 'Canada',
    duration: '4 years',
    tuition: 'CAD $65,000/year',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Medicine',
    level: 'Doctorate',
    rating: 4.9,
    students: 600,
    description: 'Comprehensive medical education program with clinical rotations and research opportunities.',
    requirements: {
      gpa: 3.9,
      mcat: 515,
      ielts: 7.5,
      workExp: 'Clinical experience preferred'
    },
    careerOutcomes: ['Physician', 'Surgeon', 'Researcher', 'Medical Consultant'],
    averageSalary: 'CAD $250,000',
    employmentRate: 99,
  },
  {
    id: 5,
    title: 'Master of Fine Arts',
    university: 'University of Melbourne',
    country: 'Australia',
    duration: '2 years',
    tuition: 'AUD $35,000/year',
    image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Arts',
    level: 'Masters',
    rating: 4.6,
    students: 400,
    description: 'Creative arts program focusing on contemporary practices and cultural studies.',
    requirements: {
      gpa: 3.4,
      portfolio: 'Required',
      ielts: 6.5,
      workExp: 'Portfolio experience'
    },
    careerOutcomes: ['Artist', 'Curator', 'Art Director', 'Creative Director'],
    averageSalary: 'AUD $55,000',
    employmentRate: 85,
  },
  {
    id: 6,
    title: 'Master of Science in Data Science',
    university: 'Technical University of Munich',
    country: 'Germany',
    duration: '2 years',
    tuition: '€3,000/year',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    level: 'Masters',
    rating: 4.5,
    students: 500,
    description: 'Cutting-edge data science program with focus on machine learning and big data analytics.',
    requirements: {
      gpa: 3.5,
      gre: 310,
      ielts: 6.5,
      workExp: 'Programming experience'
    },
    careerOutcomes: ['Data Scientist', 'ML Engineer', 'Analytics Manager', 'Research Scientist'],
    averageSalary: '€65,000',
    employmentRate: 94,
  },
];

const categories = ['All Categories', 'Technology', 'Business', 'Engineering', 'Medicine', 'Arts', 'Sciences'];
const levels = ['All Levels', 'Bachelors', 'Masters', 'Doctorate', 'Diploma'];
const countries = ['All Countries', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [sortBy, setSortBy] = useState('rating');

  const filteredCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.university.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchesCountry = selectedCountry === 'All Countries' || course.country === selectedCountry;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesCountry;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        case 'employment':
          return b.employmentRate - a.employmentRate;
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedLevel, selectedCountry, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal-blue mb-6">
              Course <span className="gradient-text">Directory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore thousands of courses from top universities worldwide. Find the perfect program that aligns with your career goals.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-slate-blue"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="employment">Employment Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal-blue">
              {filteredCourses.length} Courses Found
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
              width={1200}
              height={1200}
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-blue text-white">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-charcoal-blue">
                      {course.country}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal-blue mb-1 group-hover:text-slate-blue transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 font-medium">{course.university}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-lg font-bold text-slate-blue">{course.tuition}</div>
                      <div className="text-xs text-gray-500">{course.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-bold text-charcoal-blue">{course.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal-blue">{course.students}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-charcoal-blue">{course.employmentRate}%</div>
                      <div className="text-xs text-gray-500">Employment</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-charcoal-blue mb-2">Career Outcomes:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.careerOutcomes.slice(0, 3).map((outcome) => (
                        <Badge key={outcome} variant="outline" className="text-xs">
                          {outcome}
                        </Badge>
                      ))}
                      {course.careerOutcomes.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.careerOutcomes.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-charcoal-blue mb-2">Average Salary: 
                      <span className="text-slate-blue ml-1">{course.averageSalary}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-slate-blue hover:bg-slate-blue/90">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Need Help Choosing the Right Course?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert counselors can help you find courses that match your interests, skills, and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-blue hover:bg-gray-100">
                Get Course Recommendations
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-blue">
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}