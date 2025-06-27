'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ThumbsUp, Reply, Search, Plus, Filter, TrendingUp, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';

const forumPosts = [
  {
    id: 1,
    title: 'IELTS Score Requirements for Top US Universities',
    content: 'I\'m planning to apply to Stanford, MIT, and Harvard. What IELTS scores do they typically require? Has anyone here gotten accepted with a 7.0 band score?',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'Singapore',
      status: 'Admitted to Stanford'
    },
    category: 'Test Prep',
    tags: ['IELTS', 'USA', 'Universities'],
    likes: 24,
    replies: 12,
    views: 156,
    timeAgo: '2 hours ago',
    isPinned: true,
    isAnswered: true,
  },
  {
    id: 2,
    title: 'Scholarship opportunities for Indian students in Canada',
    content: 'Looking for comprehensive information about scholarships available for Indian students pursuing Masters in Canada. Any success stories or tips?',
    author: {
      name: 'Raj Patel',
      avatar: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'India',
      status: 'Applying'
    },
    category: 'Scholarships',
    tags: ['Canada', 'Scholarships', 'Masters'],
    likes: 18,
    replies: 8,
    views: 89,
    timeAgo: '5 hours ago',
    isPinned: false,
    isAnswered: false,
  },
  {
    id: 3,
    title: 'Life in Germany as an international student',
    content: 'I\'ll be starting my Masters in Munich this fall. Would love to connect with current students and get insights about student life, accommodation, and part-time work opportunities.',
    author: {
      name: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'Spain',
      status: 'Admitted to TUM'
    },
    category: 'Student Life',
    tags: ['Germany', 'Student Life', 'Munich'],
    likes: 15,
    replies: 6,
    views: 67,
    timeAgo: '1 day ago',
    isPinned: false,
    isAnswered: true,
  },
  {
    id: 4,
    title: 'SOP Review - Computer Science Masters',
    content: 'Would anyone be willing to review my Statement of Purpose for CS Masters applications? I can return the favor. Looking for honest feedback on structure and content.',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'USA',
      status: 'Preparing Applications'
    },
    category: 'Application Help',
    tags: ['SOP', 'Computer Science', 'Review'],
    likes: 22,
    replies: 15,
    views: 134,
    timeAgo: '2 days ago',
    isPinned: false,
    isAnswered: false,
  },
  {
    id: 5,
    title: 'Visa interview experience - UK Student Visa',
    content: 'Just had my UK student visa interview yesterday. Sharing my experience and the questions I was asked. Happy to answer any questions!',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'India',
      status: 'Visa Approved'
    },
    category: 'Visa',
    tags: ['UK', 'Visa', 'Interview'],
    likes: 31,
    replies: 9,
    views: 203,
    timeAgo: '3 days ago',
    isPinned: false,
    isAnswered: true,
  },
];

const categories = ['All Categories', 'Test Prep', 'Scholarships', 'Student Life', 'Application Help', 'Visa', 'Universities'];
const sortOptions = ['Latest', 'Most Popular', 'Most Replies', 'Unanswered'];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Latest');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
  });

  const handleNewPost = () => {
    toast.success('Your post has been published successfully!');
    setShowNewPostForm(false);
    setNewPost({ title: '', content: '', category: '', tags: '' });
  };

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Student <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow students, share experiences, and get answers to your study abroad questions from our vibrant community.
            </p>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: '15,000+', label: 'Active Members' },
              { number: '2,500+', label: 'Discussions' },
              { number: '50+', label: 'Countries' },
              { number: '95%', label: 'Questions Answered' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-slate-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search discussions..."
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

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-gray-200 focus:border-slate-blue">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forum Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* New Post Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-charcoal-blue">
                  {filteredPosts.length} Discussions
                </h2>
                <Button 
                  onClick={() => setShowNewPostForm(true)}
                  className="bg-slate-blue hover:bg-slate-blue/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Discussion
                </Button>
              </div>

              {/* New Post Form */}
              {showNewPostForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
                >
                  <h3 className="text-lg font-bold text-charcoal-blue mb-4">Start a New Discussion</h3>
                  <div className="space-y-4">
                    <Input
                      placeholder="Discussion title..."
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Select value={newPost.category} onValueChange={(value) => setNewPost({...newPost, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map(category => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Tags (comma separated)"
                        value={newPost.tags}
                        onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                      />
                    </div>
                    <Textarea
                      placeholder="Share your question or experience..."
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      rows={4}
                    />
                    <div className="flex space-x-3">
                      <Button onClick={handleNewPost} className="bg-slate-blue hover:bg-slate-blue/90">
                        Publish Discussion
                      </Button>
                      <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Forum Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              {post.isPinned && (
                                <Badge className="bg-yellow-100 text-yellow-700">Pinned</Badge>
                              )}
                              {post.isAnswered && (
                                <Badge className="bg-green-100 text-green-700">Answered</Badge>
                              )}
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            <h3 className="text-lg font-bold text-charcoal-blue hover:text-slate-blue transition-colors">
                              {post.title}
                            </h3>
                          </div>
                          <span className="text-sm text-gray-500">{post.timeAgo}</span>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                <AvatarFallback className="text-xs">{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium text-charcoal-blue">{post.author.name}</span>
                              <span className="text-xs text-gray-500">from {post.author.country}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{post.author.status}</Badge>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Reply className="h-4 w-4" />
                              <span>{post.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Popular Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.slice(1).map((category) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm text-charcoal-blue">{category}</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 100) + 10}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { user: 'Sarah Chen', action: 'answered a question in', category: 'Test Prep' },
                      { user: 'Raj Patel', action: 'started a discussion in', category: 'Scholarships' },
                      { user: 'Maria Rodriguez', action: 'replied to', category: 'Student Life' },
                      { user: 'Alex Johnson', action: 'liked a post in', category: 'Application Help' },
                    ].map((activity, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-medium text-charcoal-blue">{activity.user}</span>
                        <span className="text-gray-600"> {activity.action} </span>
                        <span className="text-slate-blue">{activity.category}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Be respectful and helpful</p>
                    <p>• Search before posting</p>
                    <p>• Use clear, descriptive titles</p>
                    <p>• Stay on topic</p>
                    <p>• No spam or self-promotion</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with thousands of students worldwide and get the support you need for your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-blue hover:bg-gray-100">
                <Users className="h-4 w-4 mr-2" />
                Join Community
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-blue">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}