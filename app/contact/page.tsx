'use client'

import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ReservationForm from '@/components/ReservationForm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function ContactContent() {
  const searchParams = useSearchParams()
  const action = searchParams.get('action')
  const [activeTab, setActiveTab] = useState<'contact' | 'reservation'>(action === 'reservation' ? 'reservation' : 'contact')

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
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-200">
              Nous sommes là pour vous aider et répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Forms */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-dark mb-8">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Email</h3>
                      <a href="mailto:servicesgps72@gmail.com" className="text-gray-600 hover:text-primary">
                        servicesgps72@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-chocolate/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-chocolate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Téléphone</h3>
                      <a href="tel:+243898233777" className="text-gray-600 hover:text-primary">
                        +243 898 233 777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        2317, avenue Saio<br />
                        Université Omnia Omnibus<br />
                        Commune de Kasavubu<br />
                        RDC
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-chocolate/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-chocolate" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Samedi: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                {/* Tab Selector */}
                <div className="flex space-x-4 mb-8 border-b">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className={`pb-4 px-4 font-semibold transition-colors ${
                      activeTab === 'contact'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-500 hover:text-primary'
                    }`}
                  >
                    <Send className="inline h-4 w-4 mr-2" />
                    Message
                  </button>
                  <button
                    onClick={() => setActiveTab('reservation')}
                    className={`pb-4 px-4 font-semibold transition-colors ${
                      activeTab === 'reservation'
                        ? 'text-chocolate border-b-2 border-chocolate'
                        : 'text-gray-500 hover:text-chocolate'
                    }`}
                  >
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Réservation
                  </button>
                </div>

                {/* Forms */}
                {activeTab === 'contact' ? <ContactForm /> : <ReservationForm />}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-dark mb-4">
              Découvrez notre galerie
            </h2>
            <p className="text-gray-600 mb-6">
              Explorez nos activités et réalisations en images et vidéos
            </p>
            <Link href="/galerie">
              <Button variant="chocolate" size="lg">
                Voir la galerie complète
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">Chargement...</div>}>
      <ContactContent />
    </Suspense>
  )
}

