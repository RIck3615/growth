'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Zap } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

