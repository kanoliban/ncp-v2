import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-[#1E88E5]" />
              <span className="ml-2 text-lg font-bold">NailCare Pro</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional nail care services delivered by registered nurses.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
              <a href="mailto:care@nailcarepro.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                care@nailcarepro.com
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Minneapolis, MN
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#care-services" className="text-gray-400 hover:text-white transition-colors">Medical Nail Care</a></li>
              <li><a href="/#care-services" className="text-gray-400 hover:text-white transition-colors">Diabetic Foot Care</a></li>
              <li><a href="/#care-services" className="text-gray-400 hover:text-white transition-colors">Senior Care</a></li>
              <li><a href="/#care-services" className="text-gray-400 hover:text-white transition-colors">Home Visits</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NailCare Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}