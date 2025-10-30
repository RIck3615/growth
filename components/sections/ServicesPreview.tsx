'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Users, TrendingUp, BookOpen, Briefcase, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Briefcase,
    title: 'Conseil en stratégie',
    description: 'Accompagnement dans la définition et la mise en œuvre de votre stratégie d\'entreprise.',
    color: 'text-primary',
  },
  {
    icon: BookOpen,
    title: 'Formation professionnelle',
    description: 'Programmes de formation sur mesure pour développer les compétences de vos équipes.',
    color: 'text-chocolate',
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description: 'Suivi personnalisé pour transformer votre organisation et atteindre vos objectifs.',
    color: 'text-primary',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions sur mesure pour transformer votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`${service.color} mb-4`}>
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link href="/nos-services">
                <Button variant="ghost" className="w-full">
                  En savoir plus
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Link href="/nos-services">
            <Button variant="chocolate" size="lg">
              Voir tous nos services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


