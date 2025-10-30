'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Image as ImageIcon, Filter, Grid, List } from 'lucide-react'

// Placeholder images - à remplacer par vos vraies images
const allImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', alt: 'Formation en cours', category: 'formation', type: 'image' },
  { id: 2, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Consultation', category: 'conseil', type: 'image' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Réunion d\'équipe', category: 'équipe', type: 'image' },
  { id: 4, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'Bureau moderne', category: 'bureau', type: 'image' },
  { id: 5, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', alt: 'Collaboration', category: 'collaboration', type: 'image' },
  { id: 6, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Réunion stratégique', category: 'conseil', type: 'image' },
  { id: 7, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', alt: 'Workshop', category: 'formation', type: 'image' },
  { id: 8, src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800', alt: 'Présentation', category: 'formation', type: 'image' },
  { id: 9, src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', alt: 'Discussions', category: 'conseil', type: 'image' },
  { id: 10, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Conseil personnalisé', category: 'conseil', type: 'image' },
  { id: 11, src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800', alt: 'Formation digitale', category: 'formation', type: 'image' },
  { id: 12, src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800', alt: 'Événement', category: 'événement', type: 'image' },
]

// Placeholder videos - à remplacer par vos vraies vidéos
const allVideos = [
  { id: 1, thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Présentation de nos services', category: 'présentation', url: '#' },
  { id: 2, thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', title: 'Témoignage client', category: 'témoignage', url: '#' },
  { id: 3, thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', title: 'Formation en action', category: 'formation', url: '#' },
  { id: 4, thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', title: 'Réunion stratégique', category: 'conseil', url: '#' },
]

const categories = ['Tous', 'Formation', 'Conseil', 'Équipe', 'Collaboration', 'Bureau', 'Événement']

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  const filteredImages = selectedCategory === 'Tous' 
    ? allImages 
    : allImages.filter(img => img.category.toLowerCase() === selectedCategory.toLowerCase())

  const filteredVideos = selectedCategory === 'Tous'
    ? allVideos
    : allVideos.filter(vid => vid.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
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
              Galerie
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez nos activités, événements et réalisations en images et vidéos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-8 space-y-6">
            {/* Tab Selector */}
            <div className="flex justify-center">
              <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center ${
                    activeTab === 'photos'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Photos ({allImages.length})
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center ${
                    activeTab === 'videos'
                      ? 'bg-chocolate text-white'
                      : 'text-gray-600 hover:text-chocolate'
                  }`}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Vidéos ({allVideos.length})
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <Filter className="h-5 w-5 text-gray-500 mt-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
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
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                }
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg ${
                      viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
                    }`}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full transition-transform duration-300 group-hover:scale-110 ${
                        viewMode === 'grid' ? 'h-64 object-cover' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity mb-2" />
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium px-4 text-center">
                        {image.alt}
                      </span>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                        {image.category}
                      </span>
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors cursor-pointer">
                        <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                      <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                      <span className="text-white/80 text-xs bg-chocolate/80 px-2 py-1 rounded-full">
                        {video.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {activeTab === 'photos' && filteredImages.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Aucune photo dans cette catégorie.</p>
            </div>
          )}

          {activeTab === 'videos' && filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Aucune vidéo dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-colors z-10 backdrop-blur-sm"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarge"
                className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


