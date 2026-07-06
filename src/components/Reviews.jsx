import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      name: 'Shoiba K',
      location: 'Oshiwara',
      service: 'Air Conditioner Services',
      rating: 5,
      text: 'Extremely professional service. Tech arrived within 25 minutes of booking for our split AC gas charging. Transparent pricing of ₹299 + gas charges, very satisfied with their promptness!',
      date: '2026-06-15',
    },
    {
      name: 'Irfan A',
      location: 'Andheri West',
      service: 'Refrigerator Repair',
      rating: 5,
      text: 'Our double door LG fridge stopped cooling suddenly. The technician identified a thermostat failure, repaired it on the spot, and gave us a 90-day warranty. Strongly recommended dynamic team!',
      date: '2026-06-10',
    },
    {
      name: 'Ravi K',
      location: 'Bandra West',
      service: 'Washing Machine Repair',
      rating: 4,
      text: 'Had a water drainage issue in my Samsung front load. They cleared the pump clog quickly. Very polite behavior and pocket-friendly repair rates.',
      date: '2026-06-08',
    },
    {
      name: 'Sneha M',
      location: 'Juhu',
      service: 'Air Conditioner Services',
      rating: 5,
      text: 'Excellent jet cleaning service for our Juhu flat. They put a specialized collector bag to prevent wall damage. Air draft is cold and fresh now.',
      date: '2026-06-02',
    },
    {
      name: 'Vivek S',
      location: 'Goregaon West',
      service: 'Microwave Oven Repair',
      rating: 4,
      text: 'Buttons on the microwave membrane weren't working. They replaced the panel. Service was done in 45 minutes flat at my doorstep.',
      date: '2026-05-28',
    },
  ]

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="section-padding bg-white dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Customer <span className="gradient-text">Voice</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
            Read transparent feedback from households across Northwest Mumbai.
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-100 dark:border-yellow-800">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{averageRating}</div>
            <div className="text-left">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Based on {reviews.length} Local Submissions</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{review.text}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{review.date}</span>
              </div>

              <div className="mt-3 px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs text-primary font-medium inline-block">
                {review.service}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
