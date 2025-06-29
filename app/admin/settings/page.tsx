"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Globe,
  Mail,
  Bell,
  Shield,
  Database,
  Users,
  CreditCard,
  Key,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: "StudyGlobal",
    siteDescription: "Your Gateway to International Education",
    contactEmail: "info@studyglobal.com",
    supportEmail: "support@studyglobal.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Education Street, Learning City, LC 12345",
    timezone: "Asia/Kolkata",
    currency: "INR",
    language: "en",
    maintenanceMode: false,
    registrationEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    twoFactorAuth: false,
    sessionTimeout: "30",
    maxLoginAttempts: "5",
    passwordMinLength: "8",
  });

  const handleSettingChange = (key: any, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
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
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">
                System Settings
              </h1>
              <p className="text-gray-600">
                Configure platform settings and preferences
              </p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </motion.div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Site Configuration
                </CardTitle>
                <CardDescription>
                  Basic site information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Site Name
                    </label>
                    <Input
                      value={settings.siteName}
                      onChange={(e) =>
                        handleSettingChange("siteName", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Currency
                    </label>
                    <Select
                      value={settings.currency}
                      onValueChange={(value) =>
                        handleSettingChange("currency", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal-blue">
                    Site Description
                  </label>
                  <Textarea
                    value={settings.siteDescription}
                    onChange={(e) =>
                      handleSettingChange("siteDescription", e.target.value)
                    }
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Contact Email
                    </label>
                    <Input
                      type="email"
                      value={settings.contactEmail}
                      onChange={(e) =>
                        handleSettingChange("contactEmail", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Support Email
                    </label>
                    <Input
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) =>
                        handleSettingChange("supportEmail", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Phone Number
                    </label>
                    <Input
                      value={settings.phoneNumber}
                      onChange={(e) =>
                        handleSettingChange("phoneNumber", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Timezone
                    </label>
                    <Select
                      value={settings.timezone}
                      onValueChange={(value) =>
                        handleSettingChange("timezone", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Kolkata">
                          Asia/Kolkata (IST)
                        </SelectItem>
                        <SelectItem value="America/New_York">
                          America/New_York (EST)
                        </SelectItem>
                        <SelectItem value="Europe/London">
                          Europe/London (GMT)
                        </SelectItem>
                        <SelectItem value="Asia/Singapore">
                          Asia/Singapore (SGT)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-charcoal-blue">
                    Address
                  </label>
                  <Textarea
                    value={settings.address}
                    onChange={(e) =>
                      handleSettingChange("address", e.target.value)
                    }
                    className="mt-1"
                    rows={2}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">
                        Maintenance Mode
                      </h4>
                      <p className="text-sm text-gray-600">
                        Enable maintenance mode to restrict site access
                      </p>
                    </div>
                    <Switch
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) =>
                        handleSettingChange("maintenanceMode", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">
                        User Registration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Allow new users to register on the platform
                      </p>
                    </div>
                    <Switch
                      checked={settings.registrationEnabled}
                      onCheckedChange={(checked) =>
                        handleSettingChange("registrationEnabled", checked)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Configure notification preferences and delivery methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Send notifications via email
                      </p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("emailNotifications", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">
                        SMS Notifications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Send notifications via SMS
                      </p>
                    </div>
                    <Switch
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("smsNotifications", checked)
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-charcoal-blue">
                        Push Notifications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Send browser push notifications
                      </p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("pushNotifications", checked)
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Configure security policies and authentication settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Session Timeout (minutes)
                    </label>
                    <Input
                      type="number"
                      value={settings.sessionTimeout}
                      onChange={(e) =>
                        handleSettingChange("sessionTimeout", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Max Login Attempts
                    </label>
                    <Input
                      type="number"
                      value={settings.maxLoginAttempts}
                      onChange={(e) =>
                        handleSettingChange("maxLoginAttempts", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-charcoal-blue">
                      Password Min Length
                    </label>
                    <Input
                      type="number"
                      value={settings.passwordMinLength}
                      onChange={(e) =>
                        handleSettingChange("passwordMinLength", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-charcoal-blue">
                      Two-Factor Authentication
                    </h4>
                    <p className="text-sm text-gray-600">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) =>
                      handleSettingChange("twoFactorAuth", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Third-Party Integrations
                </CardTitle>
                <CardDescription>
                  Configure external service integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Key className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Integration Settings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure API keys and settings for external services
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Manage Integrations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Backup & Recovery
                </CardTitle>
                <CardDescription>
                  Configure automated backups and data recovery options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Backup Settings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Configure automated backups and data recovery procedures
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Configure Backups
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Advanced Settings
                </CardTitle>
                <CardDescription>
                  Advanced configuration options for system administrators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-charcoal-blue mb-2">
                    Advanced Configuration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Advanced system settings and configuration options
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Access Advanced Settings
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
