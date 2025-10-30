'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Values, Award, Users, Globe } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans tous nos projets et engagements.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous construisons des partenariats durables avec nos clients.',
  },
  {
    icon: Globe,
    title: 'Impact social',
    description: 'Nous contribuons au développement économique et social.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Nous adoptons les meilleures pratiques et technologies.',
  },
]

export default function AboutPage() {
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
              À propos de nous
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez notre mission, notre vision et nos valeurs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-dark">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Accompagner les entreprises et organisations dans leur transformation 
                économique et sociale en leur offrant des services de conseil, de 
                formation et d&apos;accompagnement de la plus haute qualité. Nous nous 
                engageons à créer un impact positif et durable en République 
                Démocratique du Congo et dans le monde.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-chocolate mr-3" />
                <h2 className="text-3xl font-bold text-dark">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Être le leader reconnu en matière de transformation organisationnelle 
                et de développement des compétences en RDC et au-delà. Nous aspirons 
                à créer un écosystème où chaque entreprise peut prospérer et contribuer 
                positivement à la société grâce à nos services de qualité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">
                  <value.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-dark mb-8 text-center">
              Notre Histoire
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Growth in Peace Services a été fondée avec la conviction que chaque 
                entreprise mérite un accompagnement de qualité pour réaliser son plein 
                potentiel. Depuis notre création, nous avons accompagné des centaines 
                d&apos;organisations dans leur transformation.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Notre équipe d&apos;experts combine une expertise technique approfondie avec 
                une compréhension approfondie des défis spécifiques aux entreprises en 
                République Démocratique du Congo. Nous nous engageons à fournir des 
                solutions sur mesure qui créent de la valeur durable.
              </p>
              <p className="text-lg leading-relaxed">
                Aujourd&apos;hui, nous sommes fiers d&apos;être reconnus comme un partenaire de 
                confiance pour la transformation organisationnelle, avec un impact qui 
                s&apos;étend bien au-delà de nos frontières.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


