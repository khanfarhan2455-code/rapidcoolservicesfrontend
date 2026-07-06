import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Search, Wrench, CheckCircle } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: '01',
      title: 'Book Online',
      description: 'Fill the schedule form or call us. Get instant confirmation within 15 minutes.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Search,
      number: '02',
      title: 'Diagnostic Phase',
      description: 'Our certified engineer arrives with precision equipment for accurate diagnostics.',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Execution Phase',
      description: 'Repair using genuine OEM parts with full transparency and upfront pricing.',
      color: 'from-teal-400 to-teal-600',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Warranty & Support',
      description: '90-day warranty on all repairs with dedicated follow-up support.',
      color: 'from-green-400 to-green-600',
    },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Simple 4-step process to get your appliances repaired hassle-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
              )}

              <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary/20`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-5xl font-bold text-gray-200 dark:text-gray-700 absolute top-0 right-4">{step.number}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
