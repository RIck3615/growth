import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-primary">
                Growth in Peace Services
              </h3>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Entreprise de conseil, de formation et d'accompagnement engagée 
              dans la transformation économique et sociale des entreprises en 
              RDC et dans le monde.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/nos-services" className="text-gray-300 hover:text-primary transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-300 hover:text-primary transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:servicesgps72@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  servicesgps72@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a href="tel:+243898233777" className="text-gray-300 hover:text-primary transition-colors">
                  +243 898 233 777
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-300">
                  2317, avenue Saio<br />
                  Université Omnia Omnibus<br />
                  Commune de Kasavubu<br />
                  RDC
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Growth in Peace Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

