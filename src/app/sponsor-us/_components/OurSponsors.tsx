"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Network, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper"

function OurSponsors() {
  return (
    <div>
      <MaxWidthWrapper>

        <section className="w-full py-20 bg-white text-[#09090B]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <motion.img
                  key={num}
                  src={`/sponsor${num}.png`}
                  alt={`Sponsor ${num}`}
                  className="h-20  object-contain filter  transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              ))}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <section className=" py-20 bg-[#09090B] text-white">
        <MaxWidthWrapper>

          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Users, title: "Global Reach", description: "Connect with a diverse audience of innovators and thought leaders worldwide." },
                { icon: BarChart, title: "Measurable Impact", description: "See tangible results and drive meaningful change through your sponsorship." },
                { icon: Network, title: "Exclusive Network", description: "Join a community of industry pioneers and key decision-makers." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 border-none bg-white text-[#09090B]">
                    <CardContent className="p-8">
                      <div className="bg-gray-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                        <item.icon className="w-12 h-12 text-[#09090B]" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}

export default OurSponsors
