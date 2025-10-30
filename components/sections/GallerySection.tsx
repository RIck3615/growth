'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Image as ImageIcon } from 'lucide-react'

// Placeholder images - à remplacer par vos vraies images
const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', alt: 'Formation en cours', type: 'image' },
  { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Consultation', type: 'image' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Réunion d\'équipe', type: 'image' },
  { id: 4, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'Bureau moderne', type: 'image' },
  { id: 5, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', alt: 'Collaboration', type: 'image' },
  { id: 6, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Réunion stratégique', type: 'image' },
]

// Placeholder videos - à remplacer par vos vraies vidéos
const videos = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Présentation de nos services', url: '#' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', title: 'Témoignage client', url: '#' },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')

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
            Galerie
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos activités en images
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'photos'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <ImageIcon className="inline h-5 w-5 mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-chocolate text-white'
                  : 'text-gray-600 hover:text-chocolate'
              }`}
            >
              <Play className="inline h-5 w-5 mr-2" />
              Vidéos
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'photos' ? (
            <motion.div
              key="photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors">
                      <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarge"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


