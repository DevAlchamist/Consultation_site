'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Globe, CreditCard, Download, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showProgress: true,
    allowMessages: true,
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
          <h1 className="text-4xl font-bold text-charcoal-blue mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and privacy settings</p>
        </motion.div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button className="bg-slate-blue hover:bg-slate-blue/90 mb-2">
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-600">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">First Name</label>
                    <Input defaultValue="John" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Last Name</label>
                    <Input defaultValue="Doe" className="mt-1" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal-blue">Email</label>
                  <Input defaultValue="john.doe@email.com" className="mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal-blue">Phone</label>
                  <Input defaultValue="+1 (555) 123-4567" className="mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Country</label>
                    <Select defaultValue="india">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">Time Zone</label>
                    <Select defaultValue="ist">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                        <SelectItem value="est">EST (UTC-5)</SelectItem>
                        <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                        <SelectItem value="pst">PST (UTC-8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-slate-blue hover:bg-slate-blue/90">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">SMS Notifications</h4>
                      <p className="text-sm text-gray-600">Receive important updates via SMS</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Push Notifications</h4>
                      <p className="text-sm text-gray-600">Receive browser push notifications</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Marketing Communications</h4>
                      <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal-blue mb-4">Notification Types</h4>
                  <div className="space-y-3">
                    {[
                      'Application status updates',
                      'Session reminders',
                      'Document review notifications',
                      'Payment confirmations',
                      'New scholarship opportunities',
                      'University deadline reminders',
                    ].map((type) => (
                      <div key={type} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{type}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-slate-blue hover:bg-slate-blue/90">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Profile Visibility</h4>
                      <p className="text-sm text-gray-600">Make your profile visible to counselors</p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Show Progress</h4>
                      <p className="text-sm text-gray-600">Display your application progress to counselors</p>
                    </div>
                    <Switch
                      checked={privacy.showProgress}
                      onCheckedChange={(checked) => setPrivacy({...privacy, showProgress: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">Allow Messages</h4>
                      <p className="text-sm text-gray-600">Allow counselors to send you direct messages</p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(checked) => setPrivacy({...privacy, allowMessages: checked})}
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal-blue mb-4">Data Sharing</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Share anonymized data for research</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Allow partner universities to view profile</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Include in success stories (with consent)</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Button className="bg-slate-blue hover:bg-slate-blue/90">
                  Save Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-charcoal-blue mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">Current Password</label>
                      <div className="relative mt-1">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter current password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">New Password</label>
                      <Input type="password" placeholder="Enter new password" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal-blue">Confirm New Password</label>
                      <Input type="password" placeholder="Confirm new password" className="mt-1" />
                    </div>
                    <Button className="bg-slate-blue hover:bg-slate-blue/90">
                      Update Password
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal-blue mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-700">Add an extra layer of security to your account</p>
                      <p className="text-xs text-gray-500">Status: Not enabled</p>
                    </div>
                    <Button variant="outline">
                      Enable 2FA
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal-blue mb-4">Active Sessions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-charcoal-blue">Current Session</p>
                        <p className="text-xs text-gray-500">Chrome on Windows • Mumbai, India</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-charcoal-blue">Mobile App</p>
                        <p className="text-xs text-gray-500">iPhone • Last active 2 hours ago</p>
                      </div>
                      <Button size="sm" variant="outline" className="text-red-600">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>Download or delete your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Download className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">Download Your Data</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Get a copy of all your data including profile information, applications, and documents.
                        </p>
                        <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                          Request Data Export
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Data Retention</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Your data is retained for 7 years after account closure for legal compliance.
                        </p>
                        <Button variant="outline" className="mt-3 border-yellow-600 text-yellow-700">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Trash2 className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800">Delete Account</h4>
                        <p className="text-sm text-red-700 mt-1">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <Button variant="outline" className="mt-3 border-red-600 text-red-700 hover:bg-red-600 hover:text-white">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal-blue mb-4">Data Usage</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-blue">2.4 GB</div>
                      <div className="text-sm text-gray-600">Total Data Size</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-blue">156</div>
                      <div className="text-sm text-gray-600">Files Uploaded</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}