'use client';

import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { HowItWorksSection } from '@/components/home/how-it-works';
import { TopDestinationsSection } from '@/components/home/top-destinations';
import { SuccessStoriesSection } from '@/components/home/success-stories';
import { ServicesOverviewSection } from '@/components/home/services-overview';
import { TestimonialsSection } from '@/components/home/testimonials';
import { NewsEventsSection } from '@/components/home/news-events';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <TopDestinationsSection />
      <ServicesOverviewSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <NewsEventsSection />
      <CTASection />
    </div>
  );
}