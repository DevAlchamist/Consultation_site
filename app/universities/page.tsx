'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, GraduationCap, DollarSign, Star, Users, BookOpen, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const universities = [
  {
    id: 1,
    name: 'Harvard University',
    country: 'USA',
    city: 'Cambridge, MA',
    ranking: 1,
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 55000,
    acceptanceRate: 5,
    studentCount: 23000,
    establishedYear: 1636,
    programs: ['Business', 'Medicine', 'Law', 'Engineering', 'Liberal Arts'],
    popularCourses: ['MBA', 'Computer Science', 'Medicine', 'Law'],
    description: 'One of the most prestigious universities in the world, known for academic excellence and research.',
    highlights: ['Ivy League', 'Top Research University', 'Nobel Prize Winners'],
    applicationDeadline: '2024-01-01',
    requirements: {
      gpa: 3.9,
      sat: 1520,
      ielts: 7.0,
      toefl: 100,
    },
  },
  {
    id: 2,
    name: 'University of Oxford',
    country: 'UK',
    city: 'Oxford',
    ranking: 2,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 45000,
    acceptanceRate: 18,
    studentCount: 24000,
    establishedYear: 1096,
    programs: ['Humanities', 'Sciences', 'Medicine', 'Social Sciences'],
    popularCourses: ['Philosophy', 'English Literature', 'Medicine', 'Economics'],
    description: 'The oldest university in the English-speaking world with a rich tradition of academic excellence.',
    highlights: ['Ancient Institution', 'Tutorial System', 'Famous Alumni'],
    applicationDeadline: '2024-01-15',
    requirements: {
      gpa: 3.8,
      sat: 1480,
      ielts: 7.5,
      toefl: 110,
    },
  },
  {
    id: 3,
    name: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto, ON',
    ranking: 18,
    image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 35000,
    acceptanceRate: 43,
    studentCount: 97000,
    establishedYear: 1827,
    programs: ['Engineering', 'Medicine', 'Business', 'Arts & Science'],
    popularCourses: ['Computer Science', 'Engineering', 'Business', 'Medicine'],
    description: 'Canada\'s leading university with world-class research facilities and diverse programs.',
    highlights: ['Top Canadian University', 'Research Intensive', 'Diverse Community'],
    applicationDeadline: '2024-02-01',
    requirements: {
      gpa: 3.5,
      sat: 1350,
      ielts: 6.5,
      toefl: 89,
    },
  },
  {
    id: 4,
    name: 'University of Melbourne',
    country: 'Australia',
    city: 'Melbourne, VIC',
    ranking: 33,
    image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 40000,
    acceptanceRate: 70,
    studentCount: 50000,
    establishedYear: 1853,
    programs: ['Medicine', 'Engineering', 'Business', 'Arts'],
    popularCourses: ['Medicine', 'Engineering', 'Business', 'Psychology'],
    description: 'Australia\'s leading university with strong industry connections and research excellence.',
    highlights: ['Group of Eight', 'Industry Partnerships', 'Global Recognition'],
    applicationDeadline: '2024-03-31',
    requirements: {
      gpa: 3.3,
      sat: 1280,
      ielts: 6.5,
      toefl: 79,
    },
  },
  {
    id: 5,
    name: 'Technical University of Munich',
    country: 'Germany',
    city: 'Munich',
    ranking: 50,
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 3000,
    acceptanceRate: 25,
    studentCount: 45000,
    establishedYear: 1868,
    programs: ['Engineering', 'Natural Sciences', 'Medicine', 'Management'],
    popularCourses: ['Mechanical Engineering', 'Computer Science', 'Physics', 'Chemistry'],
    description: 'Leading technical university in Germany with strong industry connections and research focus.',
    highlights: ['TU9 Member', 'Industry Excellence', 'Low Tuition Fees'],
    applicationDeadline: '2024-07-15',
    requirements: {
      gpa: 3.2,
      sat: 1200,
      ielts: 6.0,
      toefl: 88,
    },
  },
  {
    id: 6,
    name: 'Trinity College Dublin',
    country: 'Ireland',
    city: 'Dublin',
    ranking: 101,
    image: 'https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800',
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuitionFee: 25000,
    acceptanceRate: 35,
    studentCount: 18000,
    establishedYear: 1592,
    programs: ['Arts & Humanities', 'Engineering', 'Health Sciences', 'Business'],
    popularCourses: ['Computer Science', 'Business', 'Medicine', 'English Literature'],
    description: 'Ireland\'s oldest university with a beautiful campus and strong academic reputation.',
    highlights: ['Historic Campus', 'Research Excellence', 'EU Access'],
    applicationDeadline: '2024-02-01',
    requirements: {
      gpa: 3.4,
      sat: 1300,
      ielts: 6.5,
      toefl: 90,
    },
  },
];

const countries = ['All Countries', 'USA', 'UK', 'Canada', 'Australia', 'Germany', 'Ireland'];
const programs = ['All Programs', 'Business', 'Engineering', 'Medicine', 'Computer Science', 'Arts & Humanities', 'Natural Sciences'];

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedProgram, setSelectedProgram] = useState('All Programs');
  const [tuitionRange, setTuitionRange] = useState([0, 60000]);
  const [sortBy, setSortBy] = useState('ranking');

  const filteredUniversities = useMemo(() => {
    let filtered = universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           uni.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === 'All Countries' || uni.country === selectedCountry;
      const matchesProgram = selectedProgram === 'All Programs' || 
                            uni.programs.some(program => program.toLowerCase().includes(selectedProgram.toLowerCase()));
      const matchesTuition = uni.tuitionFee >= tuitionRange[0] && uni.tuitionFee <= tuitionRange[1];
      
      return matchesSearch && matchesCountry && matchesProgram && matchesTuition;
    });

    // Sort universities
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'ranking':
          return a.ranking - b.ranking;
        case 'tuition-low':
          return a.tuitionFee - b.tuitionFee;
        case 'tuition-high':
          return b.tuitionFee - a.tuitionFee;
        case 'acceptance-rate':
          return b.acceptanceRate - a.acceptanceRate;
        default:
          return a.ranking - b.ranking;
      }
    });

    return filtered;
  }, [searchTerm, selectedCountry, selectedProgram, tuitionRange, sortBy]);

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
              University <span className="gradient-text">Directory</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore thousands of universities worldwide and find the perfect match for your academic goals and career aspirations.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search universities or cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-slate-blue"
                />
              </div>
              
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Select Program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map(program => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ranking">Ranking</SelectItem>
                  <SelectItem value="tuition-low">Tuition (Low to High)</SelectItem>
                  <SelectItem value="tuition-high">Tuition (High to Low)</SelectItem>
                  <SelectItem value="acceptance-rate">Acceptance Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-charcoal-blue whitespace-nowrap">Tuition Range:</span>
              <div className="flex-1 px-4">
                <Slider
                  value={tuitionRange}
                  onValueChange={setTuitionRange}
                  max={60000}
                  min={0}
                  step={1000}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                ${tuitionRange[0].toLocaleString()} - ${tuitionRange[1].toLocaleString()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal-blue">
              {filteredUniversities.length} Universities Found
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                Showing results for {selectedCountry !== 'All Countries' && selectedCountry}, {selectedProgram !== 'All Programs' && selectedProgram}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredUniversities.map((university, index) => (
              <motion.div
                key={university.id}
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
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-blue text-white">
                      #{university.ranking} Globally
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-charcoal-blue">
                      {university.country}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-blue mb-1 group-hover:text-slate-blue transition-colors">
                        {university.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {university.city}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-blue">
                        ${university.tuitionFee.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">per year</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {university.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-charcoal-blue">{university.acceptanceRate}%</div>
                      <div className="text-xs text-gray-500">Acceptance Rate</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-charcoal-blue">
                        {(university.studentCount / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-charcoal-blue">{university.establishedYear}</div>
                      <div className="text-xs text-gray-500">Established</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-charcoal-blue mb-2">Popular Programs:</div>
                    <div className="flex flex-wrap gap-1">
                      {university.popularCourses.slice(0, 3).map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                      {university.popularCourses.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{university.popularCourses.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-charcoal-blue mb-2">Requirements:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>GPA: {university.requirements.gpa}+</div>
                      <div>SAT: {university.requirements.sat}+</div>
                      <div>IELTS: {university.requirements.ielts}+</div>
                      <div>TOEFL: {university.requirements.toefl}+</div>
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

          {filteredUniversities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-charcoal-blue mb-2">No Universities Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find more results.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCountry('All Countries');
                  setSelectedProgram('All Programs');
                  setTuitionRange([0, 60000]);
                }}
                className="bg-slate-blue hover:bg-slate-blue/90"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
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
            <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert counselors can help you find the perfect university match based on your profile and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-blue hover:bg-gray-100">
                Get Personalized Recommendations
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