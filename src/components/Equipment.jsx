import React from 'react'
import { motion } from 'framer-motion'
import { Gauge, Activity, Zap, Thermometer } from 'lucide-react'

const Equipment = () => {
  const items = [
    { icon: Gauge, title: 'Manifold Gauges', desc: 'Precision pressure measurement' },
    { icon: Activity, title: 'Digital Multimeters', desc: 'Electrical diagnostics' },
    { icon: Zap, title: 'Insulation Testers', desc: 'Safety verification' },
    { icon: Thermometer, title: 'Infrared Thermometers', desc: 'Temperature analysis' },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            State-Of-The-Art <span className="gradient-text">Equipment</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            We diagnose every appliance issue using proper tools for 100% accuracy before changing parts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment
