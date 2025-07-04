"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12 text-black dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <motion.div
            className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Let&apos;s Make a Difference{" "}
            <span className="text-gray-500">Together</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                Send Message
              </h2>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-black font-medium text-sm sm:text-base"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-black font-medium text-sm sm:text-base"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black font-medium text-sm sm:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black font-medium text-sm sm:text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black font-medium text-sm sm:text-base">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black font-medium text-sm sm:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message..."
                    className="min-h-[100px] sm:min-h-[120px] border-gray-300 focus:border-black focus:ring-black text-sm sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white text-sm sm:text-base py-2 sm:py-3"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-black text-sm sm:text-base">Email</h3>
                      <p className="text-gray-600 text-sm sm:text-base break-words">
                        contact@rotaractgalgotias.org
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-black text-sm sm:text-base">Phone</h3>
                      <p className="text-gray-600 text-sm sm:text-base">+91 95349 87772</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-black text-sm sm:text-base">
                        Office Hours
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-black text-sm sm:text-base">Address</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Galgotias Educational Institute of Technology
                        <br />
                        Greater Noida
                        <br />
                        Yamuna Expressway, Uttar Pradesh 201310
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-2 text-white border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-4 sm:p-6 flex flex-col justify-center items-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight">
                  About
                </h2>
                <span className="text-gray-500 flex justify-center mb-3 sm:mb-4 items-center text-sm sm:text-base"> 
                  <ContainerTextFlip
                    className="flex justify-center items-center"
                    words={["Rotaract", "Social", "Respect", "Leadership"]}
                    interval={3000}
                    animationDuration={700}
                  />
                </span>
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-3 sm:mb-4">
                  We are a passionate group dedicated to making a real impact
                  through community service, leadership development, and
                  professional networking.
                </p>
                <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
                  Join us in driving meaningful change while building lifelong
                  friendships and growing together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
