"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link); // Wrap Link with motion()

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-9xl font-extrabold text-white mb-4 drop-shadow-2xl"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl text-white font-bold mb-8"
        >
          Page Not Found
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-white mb-4"
        >
          The page you are looking for does not exist.
        </motion.p>

        <MotionLink // Use MotionLink instead of Link
          href="/"
          className="bg-white text-teal-500 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-200 ease-in-out"
          whileHover={{ scale: 1.1 }}
        >
          Go Back Home
        </MotionLink>
      </div>
    </motion.div>
  );
}