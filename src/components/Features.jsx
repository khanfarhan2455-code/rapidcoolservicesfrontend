import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Clock, Wrench, BadgeCheck, Truck, Headphones, Sparkles } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Background Verified',
      description: 'Every technician is fully background-checked and verified before joining our team.',
      color: 'bg-green-500',
    },
    {
      icon: Award,
      title: 'Skill Certified',
      description: 'All engineers hold professional certifications from leading appliance brands.',
      color: 'bg-blue-500',
    },
    {
      icon: Clock,
      title: '15-Min Response',
      description: 'Lightning-fast response time. We reach your doorstep within 15-30 minutes.',
      color: 'bg-orange-500',
    },
    {
      icon: Wrench,
      title: 'Genuine Spare Parts',
      description: 'Only OEM brand-compliant original spare parts with serial verification.',
      color: 'bg-purple-500',
    },
    {
      icon: BadgeCheck,
      title: 'Flat Rates Upfront',
      description: 'No hidden charges. Transparent pricing with upfront flat-rate diagnostics.',
      color: 'bg-teal-500',
    },
    {
      icon: Truck,
      title: '20KM Service Reach',
      description: 'Covering all of Northwest Mumbai with local dispatch hubs for rapid response.',
      color: 'bg-red-500',
    },
    {
      icon: Headphones,
      title: 'Emergency Support',
      description: '24/7 emergency support available for critical appliance breakdowns.',
      color: 'bg-pink-500',
    },
    {
      icon: Sparkles,
      title: '90-Day Warranty',
      description: 'All repairs come with a 90-day service warranty for peace of mind.',
      color: 'bg-yellow-500',
    },
  ]

  return (
    <section id="features" className="section-padding bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The <span className="gradient-text">Rapid Cool</span> Advantage
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            We go above and beyond to ensure your appliances are running at peak performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-dark hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 dark:hover:from-primary/10 dark:hover:to-accent/10 transition-all duration-300 card-hover"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
