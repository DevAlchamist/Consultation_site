'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, GraduationCap, Edit, Save, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-06-15',
    nationality: 'Indian',
    currentCountry: 'India',
    city: 'Mumbai',
    address: '123 Main Street, Andheri West',
    bio: 'Aspiring computer science student with a passion for artificial intelligence and machine learning.',
    // Academic Info
    highestEducation: 'Bachelor\'s Degree',
    fieldOfStudy: 'Computer Science',
    institution: 'University of Mumbai',
    gpa: '8.5',
    graduationYear: '2023',
    // Test Scores
    ieltsScore: '7.5',
    toeflScore: '',
    greScore: '320',
    gmatScore: '',
    // Preferences
    preferredCountries: ['USA', 'Canada', 'UK'],
    preferredLevel: 'Master\'s',
    preferredField: 'Computer Science',
    budget: '$50,000-$70,000',
  });

  const profileCompleteness = 85;

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

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
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">My Profile</h1>
              <p className="text-gray-600">Manage your personal information and preferences</p>
            </div>
            <Button 
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="bg-slate-blue hover:bg-slate-blue/90"
            >
              {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-600 mb-4">{profileData.email}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Completeness</span>
                    <span>{profileCompleteness}%</span>
                  </div>
                  {/* <Progress value={profileCompleteness} className="h-2" /> */}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-slate-blue" />
                    <span>{profileData.city}, {profileData.currentCountry}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-slate-blue" />
                    <span>{profileData.highestEducation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Study Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Preferred Countries</label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profileData.preferredCountries.map((country) => (
                        <Badge key={country} variant="outline">{country}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Study Level</label>
                    <p className="text-charcoal-blue">{profileData.preferredLevel}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Field of Interest</label>
                    <p className="text-charcoal-blue">{profileData.preferredField}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Budget Range</label>
                    <p className="text-charcoal-blue">{profileData.budget}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Your basic personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">First Name</label>
                    <Input
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Last Name</label>
                    <Input
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Email</label>
                    <Input
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Phone</label>
                    <Input
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Date of Birth</label>
                    <Input
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Nationality</label>
                    <Select value={profileData.nationality} onValueChange={(value) => setProfileData({...profileData, nationality: value})} disabled={!isEditing}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indian">Indian</SelectItem>
                        <SelectItem value="American">American</SelectItem>
                        <SelectItem value="British">British</SelectItem>
                        <SelectItem value="Canadian">Canadian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Current Country</label>
                    <Select value={profileData.currentCountry} onValueChange={(value) => setProfileData({...profileData, currentCountry: value})} disabled={!isEditing}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal-blue">Bio</label>
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Information</CardTitle>
                <CardDescription>Your educational background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Highest Education</label>
                    <Select value={profileData.highestEducation} onValueChange={(value) => setProfileData({...profileData, highestEducation: value})} disabled={!isEditing}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High School">High School</SelectItem>
                        <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                        <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Field of Study</label>
                    <Input
                      value={profileData.fieldOfStudy}
                      onChange={(e) => setProfileData({...profileData, fieldOfStudy: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Institution</label>
                    <Input
                      value={profileData.institution}
                      onChange={(e) => setProfileData({...profileData, institution: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">GPA/Percentage</label>
                    <Input
                      value={profileData.gpa}
                      onChange={(e) => setProfileData({...profileData, gpa: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Graduation Year</label>
                    <Input
                      value={profileData.graduationYear}
                      onChange={(e) => setProfileData({...profileData, graduationYear: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Scores */}
            <Card>
              <CardHeader>
                <CardTitle>Test Scores</CardTitle>
                <CardDescription>Your standardized test scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">IELTS Score</label>
                    <Input
                      value={profileData.ieltsScore}
                      onChange={(e) => setProfileData({...profileData, ieltsScore: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                      placeholder="e.g., 7.5"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">TOEFL Score</label>
                    <Input
                      value={profileData.toeflScore}
                      onChange={(e) => setProfileData({...profileData, toeflScore: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                      placeholder="e.g., 100"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">GRE Score</label>
                    <Input
                      value={profileData.greScore}
                      onChange={(e) => setProfileData({...profileData, greScore: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                      placeholder="e.g., 320"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">GMAT Score</label>
                    <Input
                      value={profileData.gmatScore}
                      onChange={(e) => setProfileData({...profileData, gmatScore: e.target.value})}
                      disabled={!isEditing}
                      className="mt-1"
                      placeholder="e.g., 700"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}