'use client'

import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function FadeInWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={className}
        >
            {children}
        </motion.div>
    );
}
