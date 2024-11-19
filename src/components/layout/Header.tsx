import { useState, useEffect } from 'react'
import { ShieldCheck, CalendarClock } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Services', href: '/#care-services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && location.pathname !== '/') {
      window.location.href = href;
    }
  }

  const handleWaitlistClick = () => {
    navigate('/waitlist');
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-sm shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 text-[#0A5C99]"
            >
              <ShieldCheck className="h-8 w-8" />
              <span className="text-xl font-bold">NailCare Pro</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-[#1E88E5]' : 'text-gray-800 hover:text-[#0A5C99]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-[#1E88E5]' : 'text-gray-800 hover:text-[#0A5C99]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <Link to="/waitlist" className="text-sm text-[#0A5C99] font-medium">
                Launching Winter 2024
              </Link>
              <Button
                className="bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md"
                onClick={handleWaitlistClick}
              >
                <CalendarClock className="mr-2 h-4 w-4" />
                Join Waitlist
              </Button>
            </motion.div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col space-y-1.5 w-6">
              <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-gray-800'
              }`} />
              <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-gray-800'
              }`} />
              <span className={`block h-0.5 w-full transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-700' : 'bg-gray-800'
              }`} />
            </div>
          </Button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
              <nav className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  item.href.startsWith('/#') ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsOpen(false);
                      }}
                      className="block py-2 text-gray-700 hover:text-[#0A5C99]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-gray-700 hover:text-[#0A5C99]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white shadow-sm hover:shadow-md"
                  onClick={() => {
                    handleWaitlistClick();
                    setIsOpen(false);
                  }}
                >
                  <CalendarClock className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}