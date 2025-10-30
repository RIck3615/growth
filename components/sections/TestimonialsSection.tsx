'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jean Kabila',
    role: 'CEO, Entreprise ABC',
    content: 'Growth in Peace Services nous a accompagnés dans notre transformation digitale. Résultats exceptionnels !',
    rating: 5,
  },
  {
    name: 'Marie Tshisekedi',
    role: 'Directrice RH, Société XYZ',
    content: 'Leur expertise en formation a considérablement amélioré les compétences de nos équipes. Un investissement qui en valait la peine.',
    rating: 5,
  },
  {
    name: 'Paul Lumumba',
    role: 'Fondateur, Startup Tech',
    content: 'Accompagnement personnalisé et stratégies sur mesure. Nous recommandons vivement leurs services.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les témoignages de nos partenaires
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-dark">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="flex mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-chocolate">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


