'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MoreHorizontal, Edit, Trash2, Eye, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const universities = [
  {
    id: 1,
    name: 'Harvard University',
    country: 'USA',
    city: 'Cambridge, MA',
    ranking: 1,
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuition: '$55,000',
    acceptanceRate: '5%',
    students: '23,000',
    programs: 45,
    status: 'Active',
    featured: true,
  },
  {
    id: 2,
    name: 'University of Oxford',
    country: 'UK',
    city: 'Oxford',
    ranking: 2,
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuition: '£35,000',
    acceptanceRate: '18%',
    students: '24,000',
    programs: 38,
    status: 'Active',
    featured: true,
  },
  {
    id: 3,
    name: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto, ON',
    ranking: 18,
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuition: 'CAD $35,000',
    acceptanceRate: '43%',
    students: '97,000',
    programs: 52,
    status: 'Active',
    featured: false,
  },
  {
    id: 4,
    name: 'Technical University of Munich',
    country: 'Germany',
    city: 'Munich',
    ranking: 50,
    logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    tuition: '€3,000',
    acceptanceRate: '25%',
    students: '45,000',
    programs: 28,
    status: 'Active',
    featured: false,
  },
];

export default function UniversityManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = countryFilter === 'All' || uni.country === countryFilter;
    const matchesStatus = statusFilter === 'All' || uni.status === statusFilter;
    
    return matchesSearch && matchesCountry && matchesStatus;
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
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">University Manager</h1>
              <p className="text-gray-600">Manage university listings and information</p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add University
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
                    placeholder="Search universities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Countries</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Germany">Germany</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Status</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Universities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Universities ({filteredUniversities.length})</CardTitle>
              <CardDescription>Manage university listings and details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((university, index) => (
                  <motion.div
                    key={university.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={university.logo}
                          alt={university.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-charcoal-blue text-sm">{university.name}</h3>
                          <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>{university.city}</span>
                          </div>
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
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit University
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Global Ranking</span>
                        <Badge className="bg-slate-blue text-white">#{university.ranking}</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Tuition:</span>
                          <p className="font-semibold">{university.tuition}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Acceptance:</span>
                          <p className="font-semibold">{university.acceptanceRate}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Students:</span>
                          <p className="font-semibold">{university.students}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Programs:</span>
                          <p className="font-semibold">{university.programs}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center space-x-2">
                          <Badge 
                            className={`text-xs ${
                              university.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}
                          >
                            {university.status}
                          </Badge>
                          {university.featured && (
                            <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{university.country}</span>
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