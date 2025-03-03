"use client";
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <Head>
        <title>MediCare - Your Health Partner</title>
        <meta
          name="description"
          content="MediCare is an Online Platform Easily Accessible to the Massess of Kashmir helping them provide an Easy Accurate Access to the diffrent Renowed Clinicians/Clinics.You can Search for Doctors, Locations of their Clinics, Charges and you can easily Book Appointments Online"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex min-h-screen flex-col items-center justify-center bg-white"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-3xl font-bold mb-8 text-center text-green-500 md:text-4xl lg:text-5xl"
        >
          Welcome to MediCare
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mx-3"
        >
          <motion.a
            href="/doctors"
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-200 ease-in-out"
          >
            <h2 className="text-xl font-medium mb-2 text-green-500">
              Find Doctors &rarr;
            </h2>
            <p className="text-gray-500">
              Search for doctors by Name, Specialty, Location, and Availability.
            </p>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-200 ease-in-out"
          >
            <h2 className="text-xl font-medium mb-2 text-green-500">
              Book Appointments &rarr;
            </h2>
            <p className="text-gray-500">Schedule appointments online with ease.</p>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-200 ease-in-out"
          >
            <h2 className="text-xl font-medium mb-2 text-green-500">
              View Medical Records &rarr;
            </h2>
            <p className="text-gray-500">Access your medical records securely.</p>
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md  transition-transform duration-200 ease-in-out"
          >
            <h2 className="text-xl font-medium mb-2 text-green-500">
              Get Health Tips &rarr;
            </h2>
            <p className="text-gray-500">
              Stay informed with helpful health tips and advice.
            </p>
          </motion.a>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Header;