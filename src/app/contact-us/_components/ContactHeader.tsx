import { motion } from "framer-motion";

export function ContactHeader() {
  return (
    <div className="py-12 md:py-24">
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
            Let&apos;s Make a Difference{" "}
            <span className="text-[#0066cc]">Together</span>
          </h1>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join us in our mission to create positive change in our community
            through service and leadership.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
