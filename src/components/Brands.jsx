import React from 'react'
import { motion } from 'framer-motion'

const Brands = () => {
  const brands = [
    'LG', 'Samsung', 'Daikin', 'Whirlpool', 'Voltas', 'Carrier',
    'Hitachi', 'Panasonic', 'Godrej', 'Haier', 'Bosch', 'IFB',
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
            Expertly Servicing <span className="gradient-text">All Major Brands</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Disclaimer: All trademark logos belong to respective OEM owners. We are an independent multi-brand diagnostic service provider.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 flex items-center justify-center h-16 card-hover"
            >
              <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
