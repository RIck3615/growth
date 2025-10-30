'use client'

import { motion } from 'framer-motion'
import { Briefcase, BookOpen, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Briefcase,
    title: 'Conseil en stratégie',
    description: 'Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie d\'entreprise pour assurer votre croissance durable.',
    features: [
      'Audit organisationnel',
      'Définition de stratégie',
      'Planification opérationnelle',
      'Suivi et évaluation',
    ],
    color: 'primary',
  },
  {
    icon: BookOpen,
    title: 'Formation professionnelle',
    description: 'Programmes de formation sur mesure adaptés à vos besoins pour développer les compétences de vos équipes et améliorer leurs performances.',
    features: [
      'Formation en leadership',
      'Développement des compétences',
      'Formation technique',
      'Certification professionnelle',
    ],
    color: 'chocolate',
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description: 'Un suivi personnalisé et continu pour transformer votre organisation, optimiser vos processus et atteindre vos objectifs stratégiques.',
    features: [
      'Coaching d\'équipe',
      'Mentorat individuel',
      'Transformation digitale',
      'Gestion du changement',
    ],
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation des processus',
    description: 'Analyse et amélioration de vos processus opérationnels pour accroître l\'efficacité et réduire les coûts.',
    features: [
      'Audit de processus',
      'Amélioration continue',
      'Automatisation',
      'Optimisation des coûts',
    ],
    color: 'chocolate',
  },
  {
    icon: Target,
    title: 'Développement organisationnel',
    description: 'Structuration et développement de votre organisation pour mieux répondre aux défis du marché.',
    features: [
      'Restructuration',
      'Développement culturel',
      'Gestion du talent',
      'Planification stratégique',
    ],
    color: 'primary',
  },
  {
    icon: Zap,
    title: 'Innovation et transformation',
    description: 'Accompagnement dans l\'innovation et la transformation digitale pour rester compétitif sur le marché.',
    features: [
      'Transformation digitale',
      'Innovation produit',
      'Culture d\'innovation',
      'Adoption technologique',
    ],
    color: 'chocolate',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-200">
              Des solutions complètes pour la transformation de votre entreprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 ${
                  service.color === 'primary' ? 'border-primary' : 'border-chocolate'
                }`}
              >
                <div className={`mb-4 ${
                  service.color === 'primary' ? 'text-primary' : 'text-chocolate'
                }`}>
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${
                        service.color === 'primary' ? 'text-primary' : 'text-chocolate'
                      }`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={service.color === 'primary' ? 'default' : 'chocolate'}
                    className="w-full"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-chocolate to-chocolate-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d&apos;un service personnalisé ?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir 
              une proposition sur mesure.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default" className="text-lg px-8 py-6">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


