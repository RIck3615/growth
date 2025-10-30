'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients satisfaits' },
  { icon: Award, value: '50+', label: 'Projets réalisés' },
  { icon: Globe, value: '15+', label: 'Pays desservis' },
  { icon: TrendingUp, value: '95%', label: 'Taux de réussite' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <stat.icon className="h-12 w-12 text-chocolate-light" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-xl text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


