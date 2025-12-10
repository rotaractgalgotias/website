"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code,
  Lightbulb,
  Rocket,
  Calendar,
  MapPin,
  Users,
  X,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export default function HackathonPage() {
  const [selectedTrack, setSelectedTrack] = useState<null | {
    title: string;
    icon: React.ReactNode;
    desc: string;
    color: string;
  }>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden relative">
      {/* Global Spotlight Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {/* Navigation (Simple Overlay) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div className="text-2xl font-bold tracking-tighter">ROTARACT</div>
        </div>
        <div className="px-6 py-2 bg-white/20 text-white font-medium rounded-full border border-white/30 cursor-not-allowed">
          Coming Soon
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="z-10 text-center max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
              ROTARACT GALGOTIAS PRESENTS
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl gap-2 font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              SUSTAINABLE
              <br />
              HACKATHON
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Three major events. Endless possibilities. Registration opens soon
            for Tech Hackathon, Creators Hackathon, and Ideathon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <div className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-lg rounded-full cursor-not-allowed">
              Registration Coming Soon
            </div>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Innovate. Create.{" "}
              <span className="text-green-500">Transform</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              The Rotaract Hackathon brings together three exciting events to
              showcase your skills. Whether you're a tech enthusiast, creative
              mind, or innovative thinker, there's a place for you to shine and
              make an impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">48 Hours</h3>
                  <p className="text-sm text-zinc-500">Non-stop innovation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">500+ Hackers</h3>
                  <p className="text-sm text-zinc-500">From across the globe</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Hybrid Mode</h3>
                  <p className="text-sm text-zinc-500">Online & Offline</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                alt="Hackathon Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full blur-[40px] opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-[50px] opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Event Tracks Section */}
      <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Three Major{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Events
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Choose your path and showcase your unique talents. Registration
              opens soon!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tech Hackathon",
                icon: <Code className="w-10 h-10" />,
                desc: "Build innovative tech solutions. Code, create, and compete to develop cutting-edge applications and software.",
                color: "from-blue-400 to-cyan-500",
                border: "group-hover:border-blue-500/50",
                bg: "group-hover:bg-blue-500/10",
              },
              {
                title: "Creators Hackathon",
                icon: <Rocket className="w-10 h-10" />,
                desc: "Unleash your creativity. Design, produce, and present original content that inspires and engages.",
                color: "from-purple-400 to-pink-500",
                border: "group-hover:border-purple-500/50",
                bg: "group-hover:bg-purple-500/10",
              },
              {
                title: "Ideathon",
                icon: <Lightbulb className="w-10 h-10" />,
                desc: "Transform ideas into impact. Brainstorm, pitch, and develop innovative solutions to real-world challenges.",
                color: "from-yellow-400 to-orange-500",
                border: "group-hover:border-yellow-500/50",
                bg: "group-hover:bg-yellow-500/10",
              },
            ].map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 ${track.border} hover:-translate-y-2`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${track.bg}`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-black mb-6 shadow-lg shadow-white/5`}
                  >
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {track.desc}
                  </p>
                  <button
                    onClick={() => setSelectedTrack(track)}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Details Modal */}
      <AnimatePresence>
        {selectedTrack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTrack(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${selectedTrack.color}`}
              />

              <button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedTrack.color} flex items-center justify-center text-black mb-6`}
              >
                {selectedTrack.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">{selectedTrack.title}</h3>
              <p className="text-zinc-400 text-lg mb-8">{selectedTrack.desc}</p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-zinc-500">
                    Evaluation Criteria
                  </h4>
                  <ul className="list-disc list-inside text-zinc-300 space-y-1">
                    <li>Innovation & Creativity</li>
                    <li>Technical Complexity</li>
                    <li>Impact & Feasibility</li>
                  </ul>
                </div>

                <div className="w-full py-4 bg-white/20 text-white font-bold rounded-xl text-center border border-white/30 cursor-not-allowed">
                  Registration Coming Soon
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Section */}
      <section className="py-24 bg-zinc-950 border-t border-white/10 overflow-hidden">
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium tracking-wider mb-4">
              EXPANDING HORIZONS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Registration <span className="text-green-500">Opening Soon</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Get ready to participate in an amazing experience! Keep an eye out
              for registration updates across all three events. Follow us on
              social media for announcements.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10 bg-zinc-950 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h4 className="text-xl font-bold mb-2">Rotaract Galgotias</h4>
            <p className="text-zinc-500 text-sm">
              © 2024 Rotaract Hackathon. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/sustainiblity_hackathon?igsh=YjdmYnpwcmZ3cWpy"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
