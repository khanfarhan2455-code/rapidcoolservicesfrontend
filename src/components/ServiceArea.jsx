import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

const ServiceArea = () => {
  const areas = [
    'Andheri West', 'Andheri East', 'Oshiwara', 'Juhu',
    'Bandra West', 'Bandra East', 'Khar', 'Santa Cruz',
    'Goregaon', 'Malad', 'Powai', 'Vile Parle',
  ]

  return (
    <section className="section-padding bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Service Reach</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Headquartered in Andheri West, covering 20KM radius for rapid response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-bold text-gray-900 dark:text-white">Andheri West HQ</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">20KM Service Radius</p>
                <p className="text-sm text-green-500 mt-2 font-medium">● Online & Active</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {areas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-3 glass-card rounded-xl"
              >
                <Navigation className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{area}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
