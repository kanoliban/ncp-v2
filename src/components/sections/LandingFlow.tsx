import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';
import JourneyVisualization from './journey/JourneyVisualization';

const careTypes = [
  {
    title: 'Diabetic Care',
    description: '1 in 3 need specialized care',
    challenge: 'Regular salons lack medical expertise',
    solutions: [
      'Medical-grade nail care',
      'Circulation monitoring',
      'Preventive screening'
    ]
  },
  {
    title: 'Senior Care',
    description: '50% face mobility challenges',
    challenge: 'Difficulty accessing traditional services',
    solutions: [
      'In-home service delivery',
      'Gentle care techniques',
      'Mobility assistance'
    ]
  },
  {
    title: 'Limited Mobility',
    description: 'Need specialized approaches',
    challenge: 'Traditional settings not accessible',
    solutions: [
      'Adapted care methods',
      'Equipment modification',
      'Comfort-focused service'
    ]
  }
];

const LandingFlow = () => {
  return (
    <section id="care-services" className="w-full py-12 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 space-y-16 relative">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold text-blue-900 mb-4">
            Professional Nail Care
          </h2>
          <p className="text-2xl text-blue-900">
            For Those Who Need It Most
          </p>
        </motion.div>

        {/* Care Types Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {careTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-4"
            >
              <Card className="bg-gray-50 h-[120px]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>

              <div className="bg-red-50 p-4 rounded-lg h-[60px] flex items-center">
                <p className="text-red-900 text-sm">
                  {type.challenge}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg h-[140px]">
                <ul className="space-y-3">
                  {type.solutions.map((solution, i) => (
                    <li key={i} className="flex items-center text-blue-900 text-sm">
                      <Check className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Visualization */}
        <JourneyVisualization />
      </div>
    </section>
  );
};

export default LandingFlow;