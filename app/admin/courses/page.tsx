'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MoreHorizontal, Edit, Trash2, BookOpen, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const courses = [
  {
    id: 1,
    name: 'Master of Science in Computer Science',
    field: 'Technology',
    level: 'Masters',
    duration: '2 years',
    tuition: '$55,000',
    universities: ['Harvard', 'MIT', 'Stanford'],
    description: 'Advanced computer science program focusing on AI, machine learning, and software engineering.',
    requirements: {
      gpa: 3.7,
      gre: 320,
      ielts: 7.0,
    },
    status: 'Active',
    applications: 245,
  },
  {
    id: 2,
    name: 'MBA - Master of Business Administration',
    field: 'Business',
    level: 'Masters',
    duration: '2 years',
    tuition: '$73,440',
    universities: ['Harvard Business School', 'Wharton', 'Stanford GSB'],
    description: 'World-renowned MBA program preparing leaders for global business challenges.',
    requirements: {
      gpa: 3.6,
      gmat: 730,
      ielts: 7.5,
    },
    status: 'Active',
    applications: 189,
  },
  {
    id: 3,
    name: 'Bachelor of Engineering - Mechanical',
    field: 'Engineering',
    level: 'Bachelors',
    duration: '4 years',
    tuition: '£35,000',
    universities: ['Cambridge', 'Imperial College', 'UCL'],
    description: 'Comprehensive mechanical engineering program with strong industry connections.',
    requirements: {
      gpa: 3.8,
      sat: 1450,
      ielts: 7.0,
    },
    status: 'Active',
    applications: 156,
  },
  {
    id: 4,
    name: 'Doctor of Medicine (MD)',
    field: 'Medicine',
    level: 'Doctorate',
    duration: '4 years',
    tuition: 'CAD $65,000',
    universities: ['University of Toronto', 'McGill', 'UBC'],
    description: 'Comprehensive medical education program with clinical rotations.',
    requirements: {
      gpa: 3.9,
      mcat: 515,
      ielts: 7.5,
    },
    status: 'Active',
    applications: 98,
  },
];

export default function CourseManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fieldFilter, setFieldFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.field.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = fieldFilter === 'All' || course.field === fieldFilter;
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    
    return matchesSearch && matchesField && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-misty-lavender to-white">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">Course Manager</h1>
              <p className="text-gray-600">Manage course catalog and program details</p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={fieldFilter} onValueChange={setFieldFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Fields</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Levels</SelectItem>
                    <SelectItem value="Bachelors">Bachelors</SelectItem>
                    <SelectItem value="Masters">Masters</SelectItem>
                    <SelectItem value="Doctorate">Doctorate</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Courses List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Courses ({filteredCourses.length})</CardTitle>
              <CardDescription>Manage course listings and program details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <BookOpen className="h-5 w-5 text-slate-blue" />
                          <h3 className="text-lg font-bold text-charcoal-blue">{course.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-3">{course.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline">{course.field}</Badge>
                          <Badge variant="outline">{course.level}</Badge>
                          <Badge className="bg-green-100 text-green-700">{course.status}</Badge>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Course
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Course
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="font-semibold">{course.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Tuition</p>
                          <p className="font-semibold">{course.tuition}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Applications</p>
                        <p className="font-semibold">{course.applications}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Universities</p>
                        <p className="font-semibold">{course.universities.length}</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 mb-1">Requirements:</p>
                          <div className="space-y-1">
                            <p>GPA: {course.requirements.gpa}+</p>
                            {course.requirements.gre && <p>GRE: {course.requirements.gre}+</p>}
                            {course.requirements.gmat && <p>GMAT: {course.requirements.gmat}+</p>}
                            {course.requirements.sat && <p>SAT: {course.requirements.sat}+</p>}
                            {course.requirements.mcat && <p>MCAT: {course.requirements.mcat}+</p>}
                            <p>IELTS: {course.requirements.ielts}+</p>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-gray-500 mb-1">Available at Universities:</p>
                          <div className="flex flex-wrap gap-1">
                            {course.universities.map((uni) => (
                              <Badge key={uni} variant="outline" className="text-xs">{uni}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}