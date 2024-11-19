import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowRight, Calendar, CheckCircle2, ClipboardCheck, HeartPulse, HelpCircle, PhoneCall, ShieldCheck, UserCheck, Shield, Lock, AlertTriangle, FileCheck, Zap, Phone } from 'lucide-react'

const journeySteps = [
  {
    title: "Beginning Your Care Journey",
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    description: "Simple and supported first contact",
    concerns: [
      "Difficulty with self-care",
      "Worries about medical conditions",
      "Uncertainty about professional care"
    ],
    solutions: [
      "Easy online or phone booking",
      "Insurance verification assistance",
      "Initial health screening"
    ],
    action: "Schedule Your First Visit"
  },
  {
    title: "Professional Assessment",
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    description: "Comprehensive medical evaluation",
    concerns: [
      "Understanding health needs",
      "Previous care experiences",
      "Current health status"
    ],
    solutions: [
      "RN-led evaluation",
      "Personalized care planning",
      "Medical history review"
    ],
    action: "Learn About Our Process"
  },
  {
    title: "Your First Care Visit",
    icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
    description: "Experienced, gentle care at home",
    concerns: [
      "Comfort and safety",
      "Quality of care",
      "Medical standards"
    ],
    solutions: [
      "Medical-grade equipment",
      "Sterile procedures",
      "Gentle techniques"
    ],
    action: "Explore Our Services"
  },
  {
    title: "Ongoing Care & Monitoring",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    description: "Continuous support and progress tracking",
    concerns: [
      "Maintaining progress",
      "Regular monitoring",
      "Long-term health"
    ],
    solutions: [
      "Regular check-ups",
      "Progress documentation",
      "Care plan adjustments"
    ],
    action: "View Care Plans"
  }
];

const safetyStandards = [
  { icon: Shield, text: "Certified RNs", description: "All care providers are licensed registered nurses" },
  { icon: Lock, text: "HIPAA Compliant", description: "Your medical information is secure and protected" },
  { icon: AlertTriangle, text: "Infection Control", description: "Hospital-grade sterilization protocols" },
  { icon: FileCheck, text: "Insurance Compliance", description: "Documentation for insurance claims" },
  { icon: Zap, text: "Sterile Equipment", description: "Medical-grade tools and supplies" },
  { icon: Phone, text: "24/7 Support", description: "Round-the-clock clinical support" }
];

const JourneyVisualization: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0A5C99] mb-3">How It Works with NailCare Pro</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our professional medical-grade nail care journey, designed with your comfort and safety in mind
          </p>
        </div>

        <Card className="border-blue-100">
          <CardHeader className="pb-4">
            <div className="text-center mb-4">
              <p className="text-sm text-blue-600 animate-pulse">Click each step below to learn more</p>
            </div>
            
            {/* Journey Progress Bar */}
            <div className="relative mb-6">
              <div className="h-2 bg-gray-200 rounded">
                <div 
                  className="h-2 bg-blue-600 rounded transition-all duration-500"
                  style={{ width: `${(activeStep + 1) * 25}%` }}
                />
              </div>
              <div className="flex justify-between -mt-3">
                {journeySteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      index <= activeStep ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                    title={`Step ${index + 1}: ${step.title}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Current Step Detail */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    {journeySteps[activeStep].icon}
                    <div>
                      <CardTitle>{journeySteps[activeStep].title}</CardTitle>
                      <CardDescription>{journeySteps[activeStep].description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold flex items-center mb-2">
                        <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                        Common Concerns
                      </h4>
                      <ul className="space-y-2">
                        {journeySteps[activeStep].concerns.map((concern, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                            {concern}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center mb-2">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Our Solutions
                      </h4>
                      <ul className="space-y-2">
                        {journeySteps[activeStep].solutions.map((solution, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card className="border-blue-100">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Duration</h4>
                          <p className="text-sm text-gray-600">30-45 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <UserCheck className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Care Provider</h4>
                          <p className="text-sm text-gray-600">Registered Nurse (RN)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Safety Standards</h4>
                          <p className="text-sm text-gray-600">Medical-grade equipment & protocols</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  className="w-full py-3 px-4 flex items-center justify-center space-x-2"
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                >
                  <span>{journeySteps[activeStep].action}</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>

          <CardFooter className="mt-6 border-t pt-6">
            <div className="w-full">
              <h4 className="text-center text-lg font-semibold text-blue-700 mb-4">
                Our Medical-Grade Standards
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {safetyStandards.map((standard, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <standard.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gray-900">{standard.text}</p>
                      <p className="text-xs text-gray-600">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default JourneyVisualization