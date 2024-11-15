"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper"

const projects = [
    {
        id: 1,
        name: "Sapno Ki Pathshala",
        imageUrl: "/sapno-ki-pathshala.jpg",
        date: "August 2024"
    },
    {
        id: 2,
        name: "Flood Relirf Drive",
        imageUrl: "/flood-relief.JPG",
        date: "July 2023"
    },
    {
        id: 3,
        name: "Genesis 8",
        imageUrl: "/genesis-8.webp",
        date: "April 2024"
    }
]

function Projects() {
    return (
        <MaxWidthWrapper>
            <section className="w-full py-20 bg-white text-[#09090B]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/project/${project.id}`} className="block group">
                                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={project.imageUrl}
                                                alt={`project ${project.id}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {project.name}
                                            </h3>

                                        </div>
                                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                            {project.date}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default Projects
