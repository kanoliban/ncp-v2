import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Shield, BadgeCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-blue-100 text-[#0A5C99] px-4 py-1 rounded-full text-sm font-medium mb-4"
              >
                Launching Winter 2024
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 mb-6"
              >
                Professional Care When You Need It Most
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                NailCare Pro brings medical-grade nail care directly to your home. Our team of registered nurses 
                provides specialized care for seniors, diabetic patients, and those with limited mobility.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0A5C99] mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  We're on a mission to transform specialized nail care by bringing professional, 
                  medical-grade services directly to those who need them most. Our focus is on 
                  making essential care accessible, safe, and comfortable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Bringing medical expertise to nail care",
                    "Making professional care accessible",
                    "Ensuring safety and comfort",
                    "Supporting independence and dignity"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <Shield className="h-5 w-5 text-[#0A5C99] mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" 
                  alt="Medical professional providing care"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "Treating every client with dignity and respect"
                },
                {
                  icon: Shield,
                  title: "Medical Excellence",
                  description: "Highest standards of medical care and safety"
                },
                {
                  icon: Users,
                  title: "Accessibility",
                  description: "Making care available to everyone who needs it"
                },
                {
                  icon: BadgeCheck,
                  title: "Professional Service",
                  description: "Registered nurses delivering expert care"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-[#0A5C99]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  role: "Registered Nurses",
                  count: "50+",
                  description: "Licensed professionals with specialized training in medical nail care"
                },
                {
                  role: "Care Coordinators",
                  count: "15+",
                  description: "Dedicated team ensuring smooth service delivery and client support"
                },
                {
                  role: "Medical Directors",
                  count: "5+",
                  description: "Overseeing quality of care and medical protocols"
                }
              ].map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">
                        <span className="block text-3xl font-bold text-[#0A5C99] mb-2">{team.count}</span>
                        <span className="text-xl">{team.role}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-600">{team.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0A5C99] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for passionate registered nurses to join our team and help transform 
              specialized nail care.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-[#0A5C99] hover:bg-blue-50"
            >
              Apply as an RN
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;