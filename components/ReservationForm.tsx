'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Calendar, Clock, AlertCircle, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

interface ReservationFormData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message: string
}

const services = [
  'Conseil en stratégie',
  'Formation professionnelle',
  'Accompagnement personnalisé',
  'Optimisation des processus',
  'Développement organisationnel',
  'Innovation et transformation',
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00'
]

const WHATSAPP_NUMBER = '243898233777' // Format sans + pour WhatsApp

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationFormData>()

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const onSubmit = (data: ReservationFormData) => {
    // Formater le message WhatsApp
    const message = `📅 *Réservation de rendez-vous*\n\n` +
      `👤 *Nom:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📞 *Téléphone:* ${data.phone}\n\n` +
      `🎯 *Service demandé:* ${data.service}\n` +
      `📅 *Date souhaitée:* ${formatDate(data.date)}\n` +
      `⏰ *Heure souhaitée:* ${data.time}\n\n` +
      (data.message ? `💬 *Message:*\n${data.message}\n\n` : '') +
      `_Message envoyé depuis le site web Growth in Peace Services_`

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message)
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg flex items-start"
      >
        <MessageCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold mb-1">Réservation via WhatsApp</p>
          <p className="text-sm">Après validation, vous serez redirigé vers WhatsApp pour envoyer votre demande de réservation directement à notre équipe.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Nom complet *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Le nom est requis' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'L\'email est requis',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresse email invalide'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Téléphone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Le téléphone est requis' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
            placeholder="+243 XXX XXX XXX"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
            Service souhaité *
          </label>
          <select
            id="service"
            {...register('service', { required: 'Veuillez sélectionner un service' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-dark mb-2">
            Date souhaitée *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              id="date"
              type="date"
              {...register('date', { required: 'La date est requise' })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
            />
          </div>
          {errors.date && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.date.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-dark mb-2">
            Heure souhaitée *
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              id="time"
              {...register('time', { required: 'L\'heure est requise' })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
            >
              <option value="">Sélectionnez une heure</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {errors.time && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chocolate focus:border-transparent"
          placeholder="Informations supplémentaires..."
        />
      </div>

      <Button
        type="submit"
        variant="chocolate"
        size="lg"
        className="w-full"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Envoyer via WhatsApp
      </Button>
    </form>
  )
}

