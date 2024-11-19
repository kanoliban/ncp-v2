import { motion } from 'framer-motion'
import { Button } from "../ui/button"
import { CalendarClock, Info, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#0A5C99] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Launching Winter 2024
          </span>
          <h2 className="text-3xl font-bold mb-6">Join Our Pre-Launch List</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be among the first to experience medical-grade nail care provided by registered nurses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              variant="secondary"
              className="w-40 bg-white text-[#0A5C99] hover:bg-[#E6F3FF] shadow-lg hover:shadow-xl"
              onClick={() => navigate('/waitlist')}
            >
              <CalendarClock className="mr-2 h-4 w-4" />
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              className="w-40 border-white text-white hover:bg-white hover:text-[#0A5C99] shadow-sm hover:shadow-md"
              onClick={() => navigate('/about')}
            >
              <Info className="mr-2 h-4 w-4" />
              Learn More
            </Button>
            <Button
              variant="outline"
              className="w-40 border-white text-white hover:bg-white hover:text-[#0A5C99] shadow-sm hover:shadow-md"
              onClick={() => window.location.href = 'mailto:care@nailcarepro.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}