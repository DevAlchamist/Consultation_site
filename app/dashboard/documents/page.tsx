'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Download, Eye, Trash2, CheckCircle, Clock, AlertCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const documents = [
  {
    id: 1,
    name: 'Statement of Purpose',
    type: 'SOP',
    fileName: 'sop_john_doe.pdf',
    uploadDate: '2024-01-15',
    status: 'Approved',
    size: '2.4 MB',
    reviewComments: 'Excellent SOP with clear goals and motivation.',
    reviewer: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    name: 'Letter of Recommendation 1',
    type: 'LOR',
    fileName: 'lor_professor_smith.pdf',
    uploadDate: '2024-01-18',
    status: 'Under Review',
    size: '1.8 MB',
    reviewComments: '',
    reviewer: 'Emily Chen',
  },
  {
    id: 3,
    name: 'Academic Transcripts',
    type: 'Transcript',
    fileName: 'transcripts_mumbai_university.pdf',
    uploadDate: '2024-01-20',
    status: 'Approved',
    size: '3.2 MB',
    reviewComments: 'All documents verified and authentic.',
    reviewer: 'Raj Patel',
  },
  {
    id: 4,
    name: 'Resume/CV',
    type: 'Resume',
    fileName: 'resume_john_doe.pdf',
    uploadDate: '2024-01-22',
    status: 'Needs Revision',
    size: '1.1 MB',
    reviewComments: 'Please add more details about your projects and achievements.',
    reviewer: 'Dr. Sarah Johnson',
  },
  {
    id: 5,
    name: 'Passport Copy',
    type: 'Passport',
    fileName: 'passport_john_doe.pdf',
    uploadDate: '2024-01-25',
    status: 'Approved',
    size: '0.8 MB',
    reviewComments: 'Valid passport with sufficient validity period.',
    reviewer: 'Emily Chen',
  },
];

const documentTypes = [
  { type: 'SOP', name: 'Statement of Purpose', required: true },
  { type: 'LOR', name: 'Letter of Recommendation', required: true },
  { type: 'Transcript', name: 'Academic Transcripts', required: true },
  { type: 'Resume', name: 'Resume/CV', required: true },
  { type: 'Passport', name: 'Passport Copy', required: true },
  { type: 'IELTS', name: 'IELTS Score Report', required: false },
  { type: 'GRE', name: 'GRE Score Report', required: false },
  { type: 'Financial', name: 'Financial Documents', required: false },
];

export default function DocumentsPage() {
  const [selectedTab, setSelectedTab] = useState('uploaded');

  const getStatusIcon = (status: any) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Under Review':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Needs Revision':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: any) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700';
      case 'Needs Revision':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const uploadedDocuments = documents.length;
  const totalRequired = documentTypes.filter(doc => doc.required).length;
  const completionPercentage = Math.round((uploadedDocuments / documentTypes.length) * 100);

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
              <h1 className="text-4xl font-bold text-charcoal-blue mb-2">My Documents</h1>
              <p className="text-gray-600">Upload and manage your application documents</p>
            </div>
            <Button className="bg-slate-blue hover:bg-slate-blue/90">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-blue mb-2">{uploadedDocuments}</div>
                  <div className="text-sm text-gray-600">Documents Uploaded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {documents.filter(doc => doc.status === 'Approved').length}
                  </div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {documents.filter(doc => doc.status === 'Under Review').length}
                  </div>
                  <div className="text-sm text-gray-600">Under Review</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {documents.filter(doc => doc.status === 'Needs Revision').length}
                  </div>
                  <div className="text-sm text-gray-600">Needs Revision</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{completionPercentage}%</span>
                </div>
                <Progress value={completionPercentage} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="uploaded">Uploaded Documents</TabsTrigger>
            <TabsTrigger value="required">Required Documents</TabsTrigger>
            <TabsTrigger value="upload">Upload New</TabsTrigger>
          </TabsList>

          <TabsContent value="uploaded" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
                <CardDescription>View and manage your uploaded documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(doc.status)}
                        <div>
                          <h4 className="font-medium text-charcoal-blue">{doc.name}</h4>
                          <p className="text-sm text-gray-600">{doc.fileName} • {doc.size}</p>
                          <p className="text-xs text-gray-500">Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}</p>
                          {doc.reviewComments && (
                            <p className="text-xs text-gray-600 mt-1 italic">"{doc.reviewComments}"</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="required" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Complete list of documents needed for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documentTypes.map((docType, index) => {
                    const uploaded = documents.find(doc => doc.type === docType.type);
                    return (
                      <motion.div
                        key={docType.type}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          {uploaded ? (
                            getStatusIcon(uploaded.status)
                          ) : (
                            <FileText className="h-4 w-4 text-gray-400" />
                          )}
                          <div>
                            <h4 className="font-medium text-charcoal-blue">{docType.name}</h4>
                            <p className="text-sm text-gray-600">
                              {docType.required ? 'Required' : 'Optional'} • {docType.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {uploaded ? (
                            <Badge className={getStatusColor(uploaded.status)}>
                              {uploaded.status}
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-500">
                              Not Uploaded
                            </Badge>
                          )}
                          {!uploaded && (
                            <Button size="sm" className="bg-slate-blue hover:bg-slate-blue/90">
                              <Plus className="h-4 w-4 mr-1" />
                              Upload
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Document</CardTitle>
                <CardDescription>Add a new document to your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-slate-blue transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-charcoal-blue mb-2">
                    Drag and drop your files here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse and select files
                  </p>
                  <Button className="bg-slate-blue hover:bg-slate-blue/90">
                    Choose Files
                  </Button>
                  <p className="text-xs text-gray-500 mt-4">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max size: 10MB)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}