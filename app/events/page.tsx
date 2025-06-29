"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Filter,
  Search,
  ArrowRight,
  Video,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Global University Fair 2024",
    description:
      "Meet representatives from 100+ universities across USA, UK, Canada, and Australia. Get instant admission decisions and scholarship opportunities.",
    date: "2024-03-15",
    time: "10:00 AM - 6:00 PM",
    location: "Convention Center, Mumbai",
    type: "In-person",
    category: "University Fair",
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 2000,
    price: "Free",
    organizer: "StudyGlobal",
    highlights: [
      "100+ Universities",
      "Instant Admissions",
      "Scholarship Info",
      "Visa Guidance",
    ],
    agenda: [
      { time: "10:00 AM", activity: "Registration & Welcome" },
      { time: "11:00 AM", activity: "University Presentations" },
      { time: "2:00 PM", activity: "One-on-One Counseling" },
      { time: "4:00 PM", activity: "Scholarship Workshop" },
      { time: "5:00 PM", activity: "Visa Information Session" },
    ],
  },
  {
    id: 2,
    title: "IELTS Masterclass Workshop",
    description:
      "Intensive IELTS preparation workshop covering all four skills with expert trainers. Includes practice tests and personalized feedback.",
    date: "2024-03-20",
    time: "2:00 PM - 6:00 PM",
    location: "Online",
    type: "Online",
    category: "Test Prep",
    image:
      "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 500,
    price: "₹999",
    organizer: "StudyGlobal",
    highlights: [
      "Expert Trainers",
      "Practice Tests",
      "Personalized Feedback",
      "Study Materials",
    ],
    agenda: [
      { time: "2:00 PM", activity: "Listening Skills Workshop" },
      { time: "3:00 PM", activity: "Reading Strategies" },
      { time: "4:00 PM", activity: "Writing Task Practice" },
      { time: "5:00 PM", activity: "Speaking Confidence Building" },
    ],
  },
  {
    id: 3,
    title: "Study in Canada Information Session",
    description:
      "Comprehensive session about studying in Canada, including university options, visa process, and post-graduation opportunities.",
    date: "2024-03-25",
    time: "11:00 AM - 1:00 PM",
    location: "StudyGlobal Office, Delhi",
    type: "In-person",
    category: "Country Session",
    image:
      "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 100,
    price: "Free",
    organizer: "StudyGlobal",
    highlights: [
      "University Options",
      "Visa Process",
      "Work Opportunities",
      "Cost Analysis",
    ],
    agenda: [
      { time: "11:00 AM", activity: "Canada Education System Overview" },
      { time: "11:30 AM", activity: "Top Universities & Programs" },
      { time: "12:00 PM", activity: "Visa & Immigration Process" },
      { time: "12:30 PM", activity: "Q&A Session" },
    ],
  },
  {
    id: 4,
    title: "Scholarship Application Workshop",
    description:
      "Learn how to write winning scholarship applications with our expert counselors. Includes essay writing tips and application strategies.",
    date: "2024-04-02",
    time: "3:00 PM - 5:00 PM",
    location: "Online",
    type: "Online",
    category: "Scholarship",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 300,
    price: "₹1,499",
    organizer: "StudyGlobal",
    highlights: [
      "Essay Writing Tips",
      "Application Strategies",
      "Expert Guidance",
      "Templates",
    ],
    agenda: [
      { time: "3:00 PM", activity: "Scholarship Landscape Overview" },
      { time: "3:30 PM", activity: "Essay Writing Workshop" },
      { time: "4:15 PM", activity: "Application Strategy Session" },
      { time: "4:45 PM", activity: "Q&A and Resources" },
    ],
  },
  {
    id: 5,
    title: "MBA Admissions Seminar",
    description:
      "Exclusive seminar for MBA aspirants covering top business schools, application process, and career outcomes.",
    date: "2024-04-10",
    time: "6:00 PM - 8:00 PM",
    location: "Hotel Taj, Bangalore",
    type: "In-person",
    category: "MBA",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 150,
    price: "₹2,000",
    organizer: "StudyGlobal",
    highlights: [
      "Top B-Schools",
      "Application Tips",
      "Career Outcomes",
      "Networking",
    ],
    agenda: [
      { time: "6:00 PM", activity: "Welcome & Networking" },
      { time: "6:30 PM", activity: "Top MBA Programs Overview" },
      { time: "7:15 PM", activity: "Application Strategy" },
      { time: "7:45 PM", activity: "Panel Discussion" },
    ],
  },
  {
    id: 6,
    title: "Study in Germany Webinar",
    description:
      "Discover opportunities to study in Germany with low tuition fees and excellent career prospects. Learn about universities and application process.",
    date: "2024-04-15",
    time: "4:00 PM - 5:30 PM",
    location: "Online",
    type: "Online",
    category: "Country Session",
    image:
      "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800",
    attendees: 400,
    price: "Free",
    organizer: "StudyGlobal",
    highlights: [
      "Low Tuition Fees",
      "Top Universities",
      "Career Prospects",
      "Application Process",
    ],
    agenda: [
      { time: "4:00 PM", activity: "Germany Education System" },
      { time: "4:20 PM", activity: "University Options" },
      { time: "4:45 PM", activity: "Application Process" },
      { time: "5:15 PM", activity: "Q&A Session" },
    ],
  },
];

const categories = [
  "All Categories",
  "University Fair",
  "Test Prep",
  "Country Session",
  "Scholarship",
  "MBA",
  "Webinar",
];
const types = ["All Types", "In-person", "Online", "Hybrid"];
const locations = ["All Locations", "Mumbai", "Delhi", "Bangalore", "Online"];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        event.category === selectedCategory;
      const matchesType =
        selectedType === "All Types" || event.type === selectedType;
      const matchesLocation =
        selectedLocation === "All Locations" ||
        event.location.includes(selectedLocation) ||
        (selectedLocation === "Online" && event.type === "Online");

      return matchesSearch && matchesCategory && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedLocation]);

  const handleRegister = (eventId: any) => {
    toast.success(
      "Registration successful! You will receive a confirmation email shortly."
    );
  };

  const getEventStatus = (date: any) => {
    const eventDate: any = new Date(date);
    const today: any = new Date();
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

    if (daysUntil < 0)
      return { status: "Past", color: "bg-gray-100 text-gray-700" };
    if (daysUntil === 0)
      return { status: "Today", color: "bg-red-100 text-red-700" };
    if (daysUntil <= 7)
      return { status: "This Week", color: "bg-orange-100 text-orange-700" };
    return { status: "Upcoming", color: "bg-green-100 text-green-700" };
  };

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
              Study Abroad <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive events to connect with universities, learn from
              experts, and accelerate your study abroad journey.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 focus:border-slate-blue"
                />
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-charcoal-blue">
              {filteredEvents.length} Events Found
            </h2>
          </div>

          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <Image
              width={1200}
              height={1200}
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getEventStatus(event.date).color}>
                          {getEventStatus(event.date).status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={
                            event.type === "Online"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }
                        >
                          {event.type === "Online" ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {event.category}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            by {event.organizer}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-charcoal-blue mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-lg font-bold text-slate-blue">
                          {event.price}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-slate-blue" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-slate-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {event.type === "Online" ? (
                          <Globe className="h-4 w-4 text-slate-blue" />
                        ) : (
                          <MapPin className="h-4 w-4 text-slate-blue" />
                        )}
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-slate-blue" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-charcoal-blue mb-2">
                        Event Highlights:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-slate-blue hover:bg-slate-blue/90"
                        onClick={() => handleRegister(event.id)}
                      >
                        Register Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-charcoal-blue mb-2">
                No Events Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or check back later for new
                events.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSelectedType("All Types");
                  setSelectedLocation("All Locations");
                }}
                className="bg-slate-blue hover:bg-slate-blue/90"
              >
                Clear Filters
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
            <h2 className="text-4xl font-bold mb-6">Don&apos;t Miss Out!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events
              and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Button className="bg-white text-slate-blue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
