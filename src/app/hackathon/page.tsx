"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Lightbulb, Rocket, Calendar, MapPin, Users } from "lucide-react";

export default function HackathonPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
            {/* Navigation (Simple Overlay) */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference">
                <div className="text-2xl font-bold tracking-tighter">ROTARACT</div>
                <a
                    href="#register"
                    className="px-6 py-2 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform"
                >
                    Register Now
                </a>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0">
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
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
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
                        Innovate for a greener future. Join the ultimate convergence of minds to solve global challenges through technology.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                    >
                        <button className="group relative px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-green-400">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Hacking <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
                </motion.div>
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
                            Code for a <span className="text-green-500">Sustainable</span> Tomorrow
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            The Sustainable Hackathon is more than just a coding competition. It's a movement to leverage technology for environmental and social good. We bring together developers, designers, and visionaries to build solutions that matter.
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
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Placeholder for an image or 3D element */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-zinc-700 text-xl font-mono">Visual Placeholder</span>
                            </div>
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
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Arena</span></h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Three distinct tracks designed to challenge your creativity, coding skills, and problem-solving abilities.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Ideathon",
                                icon: <Lightbulb className="w-10 h-10" />,
                                desc: "Brainstorm and pitch revolutionary ideas to solve real-world problems.",
                                color: "from-yellow-400 to-orange-500",
                                border: "group-hover:border-yellow-500/50",
                                bg: "group-hover:bg-yellow-500/10"
                            },
                            {
                                title: "Codeathon",
                                icon: <Code className="w-10 h-10" />,
                                desc: "Turn coffee into code. Build functional prototypes in a high-energy sprint.",
                                color: "from-blue-400 to-cyan-500",
                                border: "group-hover:border-blue-500/50",
                                bg: "group-hover:bg-blue-500/10"
                            },
                            {
                                title: "Megathon",
                                icon: <Rocket className="w-10 h-10" />,
                                desc: "The ultimate challenge. Integrate hardware and software for massive impact.",
                                color: "from-purple-400 to-pink-500",
                                border: "group-hover:border-purple-500/50",
                                bg: "group-hover:bg-purple-500/10"
                            }
                        ].map((track, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 ${track.border} hover:-translate-y-2`}
                            >
                                <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${track.bg}`} />

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-black mb-6 shadow-lg shadow-white/5`}>
                                        {track.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed mb-8">
                                        {track.desc}
                                    </p>
                                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all">
                                        Details <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10 bg-zinc-950 text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h4 className="text-xl font-bold mb-2">Rotaract Galgotias</h4>
                        <p className="text-zinc-500 text-sm">© 2024 Sustainable Hackathon. All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
