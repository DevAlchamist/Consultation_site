'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MoreHorizontal, Edit, Trash2, Calendar, MapPin, Users, Video, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const events = [
  {
    id: 1,
    title: 'Global University Fair 2024',
    description: 'Meet representatives from 100+ universities across USA, UK, Canada, and Australia.',
    date: '2024-03-15',
    time: '10:00 AM - 6:00 PM',
    type: 'In-person',
    location: 'Convention Center, Mumbai',
    capacity: 2000,
    registered: 1456,
    status: 'Published',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'StudyGlobal Team',
    price: 'Free',
  },
  {
    id: 2,
    title: 'IELTS Masterclass Workshop',
    description: 'Intensive IELTS preparation workshop covering all four skills with expert trainers.',
    date: '2024-03-20',
    time: '2:00 PM - 6:00 PM',
    type: 'Online',
    location: 'Zoom Webinar',
    capacity: 500,
    registered: 342,
    status: 'Published',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Emily Chen',
    price: '₹999',
  },
  {
    id: 3,
    title: 'Study in Canada Information Session',
    description: 'Comprehensive session about studying in Canada, including visa process and opportunities.',
    date: '2024-03-25',
    time: '11:00 AM - 1:00 PM',
    type: 'Hybrid',
    location: 'StudyGlobal Office, Delhi',
    capacity: 100,
    registered: 78,
    status: 'Draft',
    image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
    organizer: 'Raj Patel',
    price: 'Free',
  },
];

export default function EventManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'All' || event.type === typeFilter;
    const matchesStatus = statusFilter === 'All' || event.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
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
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">Event Manager</h1>
              <p className="text-gray-600">Create and manage webinars, workshops, and university fairs</p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </motion.div>

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
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="In-person">In-person</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Status</SelectItem>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white">
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Events ({filteredEvents.length})</CardTitle>
              <CardDescription>Manage all events, webinars, and workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex space-x-4 flex-1">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-bold text-charcoal-blue">{event.title}</h3>
                            <Badge className={
                              event.status === 'Published' ? 'bg-green-100 text-green-700' :
                              event.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }>
                              {event.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {event.type === 'Online' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{event.registered}/{event.capacity}</span>
                            </div>
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
                            Edit Event
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Event
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4 text-sm">
                        <span>Organizer: <strong>{event.organizer}</strong></span>
                        <span>Price: <strong>{event.price}</strong></span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {Math.round((event.registered / event.capacity) * 100)}% capacity
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