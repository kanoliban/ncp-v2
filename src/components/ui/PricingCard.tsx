import { motion } from 'framer-motion'
import { Card, CardContent } from "./card"
import { Clock, Shield, Sparkles } from 'lucide-react'
import { Button } from "./button"

interface PricingCardProps {
  title: string
  price: string
  duration: string
  features: string[]
  popular?: boolean
  index: number
}

export default function PricingCard({
  title,
  price,
  duration,
  features,
  popular = false,
  index
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group h-full"
    >
      <Card className={`h-full relative flex flex-col transform transition-all duration-300 hover:scale-102 ${
        popular ? 'border-[#0A5C99] border-2' : ''
      }`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0A5C99] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center bg-blue-100 text-[#0A5C99] px-2 py-1 rounded-full text-xs font-medium">
            <Sparkles className="h-3 w-3 mr-1" />
            Pre-Launch Price
          </span>
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-[#0A5C99] mb-2">{title}</h3>
            <div className="flex items-center justify-center mb-1">
              <span className="text-3xl font-bold text-[#2D3748]">${price}</span>
              <span className="text-gray-500 ml-2">/ visit</span>
            </div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-[#2D3748]">
                  <Shield className="h-4 w-4 text-[#1E88E5] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Button Section - Always at the bottom */}
            <Button 
              className="w-full h-14 bg-gradient-to-r from-[#0A5C99] to-[#1E88E5] hover:from-[#1565C0] hover:to-[#1976D2] text-white font-medium transition-all duration-300"
            >
              Choose {title}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}