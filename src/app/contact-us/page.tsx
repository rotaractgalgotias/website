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
    <div className="h-full w-full bg-white dark:bg-gray-900 py-12 text-black dark:text-white">
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}

          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.div>
            <h1 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-5xl">
              Let&apos;s Make a Difference{" "}
              <span className="text-gray-500">Together</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Send Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-black font-medium"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-black font-medium"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        className="border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-black font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message..."
                      className="min-h-[120px] border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Email</h3>
                        <p className="text-gray-600">
                          contact@rotaractgalgotias.org
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Phone</h3>
                        <p className="text-gray-600">+91 95349 87772</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">
                          Office Hours
                        </h3>
                        <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Address</h3>
                        <p className="text-gray-600">
                          Galgotias Educational Institute of Technology
                          <br />
                          Greater Noida
                          <br />
                          Yamuna Expressway ,Uttar Pradesh 201310
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-2 text-white border border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
                <div className="flex flex-col justify-center items-start p-2 "> 
                  <CardContent className="p-2 flex flex-col justify-center items-start">
                  <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
                    About
                     </h2>
                    <span className="text-gray-500 flex justify-center mb-4 items-center"> 
                      <ContainerTextFlip
                      className="flex justify-center items-center"
                      words={["Rotaract", "Social", "respect", "leadership"]}
                      interval={3000}
                      animationDuration={700}
                      />
                      </span>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    We are a passionate group dedicated to making a real impact
                    through community service, leadership development, and
                    professional networking.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Join us in driving meaningful change while building lifelong
                    friendships and growing together.
                  </p>
                </CardContent> 
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
