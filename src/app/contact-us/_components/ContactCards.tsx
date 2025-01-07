import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT_CARDS } from "../constants"

const MotionCard = motion(Card)

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CONTACT_CARDS.map((card, index) => (
        <MotionCard 
          key={card.title}
          className="border-none shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <motion.div 
              className="p-3 bg-blue-100 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <card.icon className="w-6 h-6 text-[#0066cc]" />
            </motion.div>
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-500 whitespace-pre-line">{card.content}</p>
          </CardContent>
        </MotionCard>
      ))}
    </div>
  )
} 