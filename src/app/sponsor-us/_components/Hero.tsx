"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className='className="flex min-h-[calc(100dvh-6rem)] flex-col items-center bg-[#09090B] text-white"'>
        <section className="w-full relative overflow-hidden h-[calc(100dvh-6rem)] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              fill
              src="https://github.com/rotaractgalgotias/images/blob/main/cover/Zindagi%20ki%20pathshala.JPG?raw=true"
              alt="Hero background"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </motion.div>
          <div className="relative z-20 text-center max-w-4xl px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              Become a Sponsor Today
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-300"
            >
              Join our community of sponsors and help shape the future of our
              project. Every contribution makes a difference.{" "}
            </motion.p>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-white text-[#09090B] hover:bg-gray-200 text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#09090B] to-transparent z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </section>
      </div>
    </div>
  );
}

export default Hero;
