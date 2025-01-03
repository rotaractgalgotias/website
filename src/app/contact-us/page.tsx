'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/schema"
import { useState } from "react"
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper"

const MotionCard = motion(Card)

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', data)
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
   <div>
    <MaxWidthWrapper>
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header Section */}
      <div className=" py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="flex flex-col items-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Make a Difference <span className="text-[#0066cc]">Together</span>
            </h1>
            <motion.p 
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Join us in our mission to create positive change in our community through service and leadership.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 md:px-6 pb-12">
        <div className="grid gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-6 h-6 text-[#0066cc]" />,
                title: "Visit Us",
                content: "Galgotias Educational Institutions Campus, Greater Noida"
              },
              {
                icon: <Phone className="w-6 h-6 text-[#0066cc]" />,
                title: "Call Us",
                content: "+91 123 456 7890"
              },
              {
                icon: <Mail className="w-6 h-6 text-[#0066cc]" />,
                title: "Email Us",
                content: "rotaract@galgotias.edu"
              },
              {
                icon: <Clock className="w-6 h-6 text-[#0066cc]" />,
                title: "Office Hours",
                content: "Monday - Friday\n9:00 AM - 5:00 PM"
              }
            ].map((card, index) => (
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
                    {card.icon}
                  </motion.div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-500 whitespace-pre-line">{card.content}</p>
                </CardContent>
              </MotionCard>
            ))}
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card className="border-none shadow-lg mt-8">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h2 className="text-2xl font-bold">Send us a Message</h2>
                      <p className="text-gray-500">Have questions? We're here to help.</p>
                    </motion.div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">First name</label>
                          <Input
                            id="firstName"
                            {...register('firstName')}
                            placeholder="John"
                            className={errors.firstName ? "border-red-500" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500">{errors.firstName.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">Last name</label>
                          <Input
                            id="lastName"
                            {...register('lastName')}
                            placeholder="Doe"
                            className={errors.lastName ? "border-red-500" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="john@example.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <Input
                          id="subject"
                          {...register('subject')}
                          placeholder="How can we help?"
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-500">{errors.subject.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea 
                          className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                          id="message"
                          {...register('message')}
                          placeholder="Tell us about your interest in Rotaract..."
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit"
                          className="w-full bg-[#0066cc] hover:bg-[#0052a3]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                      {submitSuccess && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-green-600 text-center"
                        >
                          Thank you! Your message has been sent successfully.
                        </motion.p>
                      )}
                    </form>
                  </div>

                  {/* Map Section */}
                  <motion.div 
                    className="relative h-full min-h-[400px] rounded-lg overflow-hidden bg-gray-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <img 
                      src="contact.jpg" 
                      alt="Location map"
                      className="absolute inset-0 w-full h-full object-cover shadow-md"
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
   </div>
  )
}

