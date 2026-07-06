import React from 'react'
import { motion } from 'framer-motion'
import { Snowflake, Refrigerator, WashingMachine, Microwave, Wrench, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: 'Air Conditioner Services',
      description: 'Expert diagnostics, gas charging, leak repairs, and deep filter cleaning for window and split ACs.',
      price: '₹299',
      features: ['Gas Charging', 'Leak Repair', 'Filter Cleaning', 'Compressor Check'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator Repair',
      description: 'Professional compressor replacement, gas refilling, and thermostat repairs for double/single door fridges.',
      price: '₹249',
      features: ['Compressor Fix', 'Gas Refill', 'Thermostat Repair', 'Cooling Issue'],
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
      icon: WashingMachine,
      title: 'Washing Machine Repair',
      description: 'Reliable fixes for drum issues, water outlet blockage, motor replacement, and motherboard repairs.',
      price: '₹249',
      features: ['Drum Repair', 'Motor Fix', 'Water Outlet', 'Motherboard'],
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    },
    {
      icon: Microwave,
      title: 'Microwave Oven Repair',
      description: 'Quick doorstep solution for heating failures, spark issues, touch panel repair, and magnetron replacement.',
      price: '₹199',
      features: ['Heating Fix', 'Spark Issue', 'Touch Panel', 'Magnetron'],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            <Wrench className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expert <span className="gradient-text">Appliance Repairs</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Professional, certified, and fully background-verified Mumbai technicians with genuine spare parts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden card-hover group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: 'transparent', stroke: 'currentColor' }} />
                  {/* Fallback icon styling */}
                  <div className={`absolute w-7 h-7 bg-gradient-to-r ${service.color} rounded-lg opacity-20`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Visiting Charge</p>
                    <p className="text-2xl font-bold gradient-text">{service.price}</p>
                  </div>
                  <a
                    href="/#schedule"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
