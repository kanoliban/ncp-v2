import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { CalendarClock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Launching in Minneapolis • Winter 2024
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
                Professional Nail Care
                <span className="text-[#0A5C99] block mt-3">For Those Who Need It Most</span>
              </h1>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Specialized nail care services delivered by registered nurses, 
              focusing on elderly, diabetic, and mobility-challenged individuals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="shadow-lg hover:shadow-xl"
                onClick={() => navigate('/waitlist')}
              >
                <CalendarClock className="mr-2 h-4 w-4" />
                Join the Waitlist
              </Button>
              <Button 
                variant="outline"
                className="shadow-sm hover:shadow-md"
                onClick={() => navigate('/rn-application')}
              >
                RN Applications Open
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1920"
                alt="Professional nurse providing care"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-full filter blur-3xl opacity-50" />
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}