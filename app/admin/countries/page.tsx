'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MoreHorizontal, Edit, Trash2, Globe, FileText, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const countries = [
  {
    id: 1,
    name: 'United States',
    flag: '🇺🇸',
    code: 'US',
    universities: 4000,
    students: 1200000,
    averageCost: '$30,000-$60,000',
    visaProcessingTime: '2-4 weeks',
    workPermit: 'F-1 OPT (12-36 months)',
    popularCities: ['New York', 'Los Angeles', 'Boston', 'San Francisco'],
    topUniversities: ['Harvard', 'MIT', 'Stanford', 'Yale'],
    requirements: {
      ielts: '6.5-7.5',
      toefl: '80-100',
      gre: '300-320',
      gmat: '650-750',
    },
    jobMarket: 'Excellent',
    status: 'Active',
    lastUpdated: '2024-01-15',
  },
  {
    id: 2,
    name: 'United Kingdom',
    flag: '🇬🇧',
    code: 'UK',
    universities: 160,
    students: 500000,
    averageCost: '£15,000-£35,000',
    visaProcessingTime: '3-6 weeks',
    workPermit: 'Graduate Route (2-3 years)',
    popularCities: ['London', 'Manchester', 'Edinburgh', 'Birmingham'],
    topUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'UCL'],
    requirements: {
      ielts: '6.0-7.5',
      toefl: '80-100',
      gre: 'Not required',
      gmat: '600-700',
    },
    jobMarket: 'Good',
    status: 'Active',
    lastUpdated: '2024-01-12',
  },
  {
    id: 3,
    name: 'Canada',
    flag: '🇨🇦',
    code: 'CA',
    universities: 200,
    students: 800000,
    averageCost: 'CAD $20,000-$40,000',
    visaProcessingTime: '4-8 weeks',
    workPermit: 'PGWP (1-3 years)',
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    topUniversities: ['University of Toronto', 'McGill', 'UBC', 'Waterloo'],
    requirements: {
      ielts: '6.5-7.0',
      toefl: '86-100',
      gre: '300-320',
      gmat: '550-650',
    },
    jobMarket: 'Excellent',
    status: 'Active',
    lastUpdated: '2024-01-10',
  },
  {
    id: 4,
    name: 'Australia',
    flag: '🇦🇺',
    code: 'AU',
    universities: 150,
    students: 600000,
    averageCost: 'AUD $25,000-$45,000',
    visaProcessingTime: '4-6 weeks',
    workPermit: 'Temporary Graduate (2-4 years)',
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    topUniversities: ['University of Melbourne', 'ANU', 'University of Sydney', 'UNSW'],
    requirements: {
      ielts: '6.5-7.0',
      toefl: '79-94',
      gre: 'Not required',
      gmat: '550-650',
    },
    jobMarket: 'Good',
    status: 'Active',
    lastUpdated: '2024-01-08',
  },
];

export default function CountryManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedTab, setSelectedTab] = useState('overview');

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || country.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-misty-lavender to-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">Country Pages Manager</h1>
              <p className="text-gray-600">Manage country information, visa requirements, and study guides</p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Country
            </Button>
          </div>
        </motion.div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="visa">Visa Info</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="jobs">Job Market</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search countries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCountries.map((country, index) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{country.flag}</span>
                          <div>
                            <h3 className="text-xl font-bold text-charcoal-blue">{country.name}</h3>
                            <p className="text-gray-600">Code: {country.code}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-700">{country.status}</Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Country
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="h-4 w-4 mr-2" />
                                Update Content
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-slate-blue">{country.universities.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Universities</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-slate-blue">{(country.students / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-gray-600">Students</div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Average Cost:</span>
                          <span className="font-medium">{country.averageCost}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Visa Processing:</span>
                          <span className="font-medium">{country.visaProcessingTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Work Permit:</span>
                          <span className="font-medium text-xs">{country.workPermit}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Job Market:</span>
                          <Badge className={country.jobMarket === 'Excellent' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}>
                            {country.jobMarket}
                          </Badge>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-xs text-gray-500 mb-2">Top Universities:</div>
                        <div className="flex flex-wrap gap-1">
                          {country.topUniversities.slice(0, 3).map((uni) => (
                            <Badge key={uni} variant="outline" className="text-xs">
                              {uni}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-4 pt-4 border-t text-xs text-gray-500">
                        <span>Updated: {new Date(country.lastUpdated).toLocaleDateString()}</span>
                        <div className="flex space-x-2">
                          <Globe className="h-4 w-4" />
                          <FileText className="h-4 w-4" />
                          <Clock className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="visa" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Visa Information Management</CardTitle>
                <CardDescription>Update visa requirements and processing information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredCountries.map((country) => (
                    <div key={country.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-2xl">{country.flag}</span>
                        <h3 className="text-lg font-bold text-charcoal-blue">{country.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <label className="text-sm font-medium text-gray-600">IELTS Requirement</label>
                          <p className="font-medium">{country.requirements.ielts}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">TOEFL Requirement</label>
                          <p className="font-medium">{country.requirements.toefl}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">GRE Requirement</label>
                          <p className="font-medium">{country.requirements.gre}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">GMAT Requirement</label>
                          <p className="font-medium">{country.requirements.gmat}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex space-x-3">
                        <Button size="sm" variant="outline">Edit Requirements</Button>
                        <Button size="sm" variant="outline">Update Processing Time</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Timeline Management</CardTitle>
                <CardDescription>Manage application deadlines and timeline information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">Timeline Management</h3>
                  <p className="text-gray-600 mb-6">
                    Update application deadlines, intake periods, and important dates for each country
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Manage Timelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Market Information</CardTitle>
                <CardDescription>Update employment statistics and job market data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <DollarSign className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">Job Market Data</h3>
                  <p className="text-gray-600 mb-6">
                    Manage salary information, employment rates, and career prospects for each country
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Update Job Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}