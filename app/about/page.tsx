"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  Target,
  Heart,
  Lightbulb,
  CheckCircle,
  Calendar,
  Vault,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Started with a vision to make international education accessible",
  },
  {
    year: "2012",
    title: "1,000 Students Placed",
    description: "Reached our first major milestone of successful placements",
  },
  {
    year: "2016",
    title: "Global Expansion",
    description: "Opened offices in 5 major cities across India",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched online counseling and virtual university fairs",
  },
  {
    year: "2024",
    title: "10,000+ Success Stories",
    description:
      "Celebrating over a decade of transforming dreams into reality",
  },
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "15+ years in international education with PhD from Oxford University",
    specialization: "UK & European Universities",
  },
  {
    name: "Raj Patel",
    role: "Head of Counseling",
    image:
      "https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Former admissions officer at top US universities, MBA from Wharton",
    specialization: "US Universities & MBA Programs",
  },
  {
    name: "Emily Chen",
    role: "Visa Specialist",
    image:
      "https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Immigration lawyer with 98% visa success rate across all countries",
    specialization: "Visa & Immigration Law",
  },
  {
    name: "Michael Brown",
    role: "Test Prep Director",
    image:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "IELTS & TOEFL expert trainer with perfect score achievements",
    specialization: "Test Preparation & Coaching",
  },
];

const values = [
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description:
      "Every decision we make is focused on what's best for our students' future.",
  },
  {
    icon: CheckCircle,
    title: "Integrity & Transparency",
    description:
      "We provide honest guidance and transparent processes throughout your journey.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Excellence",
    description:
      "We continuously innovate our services to provide the best possible outcomes.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Our international network ensures you get the best opportunities worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal-blue mb-6">
              About <span className="gradient-text">StudyGlobal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we&apos;ve been transforming dreams into reality by
              guiding students towards their perfect international education
              journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="StudyGlobal team"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-charcoal-blue">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2008 with a simple yet powerful vision: to make
                world-class international education accessible to every
                deserving student. What started as a small consultancy has grown
                into a trusted global network.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;ve helped over 10,000 students achieve their dreams of
                studying abroad, with a 98% visa success rate and partnerships
                with 500+ universities worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/60 rounded-lg">
                  <div className="text-2xl font-bold text-slate-blue">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-lg">
                  <div className="text-2xl font-bold text-slate-blue">98%</div>
                  <div className="text-sm text-gray-600">Visa Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-blue to-powder-blue text-white p-8 rounded-2xl"
            >
              <Target className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To empower students with personalized guidance, comprehensive
                support, and expert knowledge to achieve their international
                education goals and build successful global careers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sage-green to-soft-rose text-white p-8 rounded-2xl"
            >
              <Globe className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be the world&apos;s most trusted study abroad consultancy,
                creating a global community of successful international students
                who contribute positively to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading study abroad
              consultancy
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-blue to-powder-blue"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-slate-blue mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-bold text-charcoal-blue mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-blue rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-blue/10 rounded-full mb-4">
                  <Vault className="h-8 w-8 text-slate-blue" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-to-br from-misty-lavender to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-blue mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {member.specialization}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-blue to-powder-blue">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who trusted us with their
              dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-blue hover:bg-gray-100"
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-blue"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
