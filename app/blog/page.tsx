"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, ArrowRight, Tag } from "lucide-react";
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
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Studying in the USA: Everything You Need to Know",
    excerpt:
      "From choosing the right university to visa applications, this comprehensive guide covers everything international students need to know about studying in America.",
    content: "Full article content here...",
    author: "Dr. Sarah Johnson",
    authorImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-15",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Study Destinations",
    tags: ["USA", "Universities", "Visa", "Application"],
    featured: true,
  },
  {
    id: 2,
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    excerpt:
      "A detailed comparison of IELTS and TOEFL tests to help you choose the right English proficiency exam for your study abroad goals.",
    content: "Full article content here...",
    author: "Emily Chen",
    authorImage:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-12",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Test Preparation",
    tags: ["IELTS", "TOEFL", "English Tests", "Preparation"],
    featured: false,
  },
  {
    id: 3,
    title: "Top 10 Scholarships for International Students in 2024",
    excerpt:
      "Discover the most prestigious and valuable scholarships available for international students, including application tips and deadlines.",
    content: "Full article content here...",
    author: "Raj Patel",
    authorImage:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-10",
    readTime: "15 min read",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Scholarships",
    tags: ["Scholarships", "Funding", "Financial Aid", "Applications"],
    featured: true,
  },
  {
    id: 4,
    title: "Student Visa Interview: Common Questions and How to Answer Them",
    excerpt:
      "Prepare for your student visa interview with these commonly asked questions and expert tips for confident answers.",
    content: "Full article content here...",
    author: "Michael Brown",
    authorImage:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-08",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Visa Guidance",
    tags: ["Visa", "Interview", "Tips", "Preparation"],
    featured: false,
  },
  {
    id: 5,
    title: "Life in Canada: A Complete Guide for International Students",
    excerpt:
      "Everything you need to know about living in Canada as an international student, from culture to climate to career opportunities.",
    content: "Full article content here...",
    author: "Lisa Rodriguez",
    authorImage:
      "https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-05",
    readTime: "14 min read",
    image:
      "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Study Destinations",
    tags: ["Canada", "Student Life", "Culture", "Living"],
    featured: false,
  },
  {
    id: 6,
    title: "How to Write a Winning Statement of Purpose (SOP)",
    excerpt:
      "Master the art of writing compelling statements of purpose that will make your application stand out to admissions committees.",
    content: "Full article content here...",
    author: "Dr. Sarah Johnson",
    authorImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    date: "2024-01-03",
    readTime: "11 min read",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Application Tips",
    tags: ["SOP", "Applications", "Writing", "Tips"],
    featured: true,
  },
];

const categories = [
  "All Categories",
  "Study Destinations",
  "Test Preparation",
  "Scholarships",
  "Visa Guidance",
  "Application Tips",
  "Student Life",
];
const sortOptions = ["Latest", "Most Popular", "Oldest"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All Categories" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "Latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "Most Popular":
          return b.featured ? 1 : -1;
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
              Study Abroad <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights, tips, and guides to help you navigate your study
              abroad journey successfully.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-charcoal-blue mb-8">
              Featured Articles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
              width={1200}
              height={1200}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-slate-blue text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-charcoal-blue mb-3 group-hover:text-slate-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
              width={1200}
              height={1200}
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-charcoal-blue">
              All Articles
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} articles found
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image
              width={1200}
              height={1200}
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-slate-blue text-white">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-charcoal-blue mb-3 group-hover:text-slate-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
              width={1200}
              height={1200}
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-charcoal-blue">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-blue group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-charcoal-blue mb-2">
                No Articles Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                }}
                className="bg-slate-blue hover:bg-slate-blue/90"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-slate-blue to-powder-blue">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest study abroad tips,
              university updates, and scholarship opportunities.
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
