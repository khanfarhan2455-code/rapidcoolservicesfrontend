import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Snowflake, Clock, Shield, Award, ChevronRight, Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-dark dark:via-dark-card dark:to-dark">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Active in Oshiwara & Andheri West
            </motion.div>

            {/* Title - FIXED SPACING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RAPID COOL
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                SERVICES
              </span>
            </h1>

            <p className="text-xl text-primary font-semibold mb-4">
              COOLING YOUR COMFORT IS OUR PRIORITY
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              Expert Doorstep Repair, Maintenance, and Diagnostics in Mumbai. We provide rapid fixes for AC, Refrigerators, Washing Machines, and Microwave ovens with genuine spare parts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/#schedule"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Visit
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+917777777777"
                className="btn-outline flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Clock, label: '15-Min Response', color: 'text-orange-500' },
                { icon: Shield, label: '100% Certified', color: 'text-green-500' },
                { icon: Award, label: 'Best Experience', color: 'text-purple-500' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Service Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { name: 'AC Services', price: '₹299', icon: '❄️', color: 'from-blue-400 to-blue-600' },
              { name: 'Refrigerator', price: '₹249', icon: '🧊', color: 'from-cyan-400 to-cyan-600' },
              { name: 'Washing Machine', price: '₹249', icon: '👕', color: 'from-teal-400 to-teal-600' },
              { name: 'Microwave', price: '₹199', icon: '🔥', color: 'from-orange-400 to-orange-600' },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card rounded-2xl p-5 card-hover cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{service.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">From {service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
