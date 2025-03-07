"use client"
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <Head>
        <title>Contact Us | MediCare</title>
      </Head>
      <main className="mt-20 container mx-auto p-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-center"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-6 text-center"
          >
            Get in touch with us for any inquiries or assistance.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center w-full"
          >
            <motion.div
              variants={scaleUp}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full md:w-1/2 lg:w-2/5 p-6 bg-white rounded-lg shadow-md"
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={scaleUp}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full md:w-1/2 lg:w-2/5 p-6 md:ml-4 bg-gray-100 rounded-lg shadow-md mt-4 md:mt-0"
            >
              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-xl font-bold mb-4"
              >
                Contact Information
              </motion.h2>
              <p>
                <span className="font-bold">Email:</span> faizanahmad1127@gmail.com
              </p>
              <p>University of Kashmir, IOT Zakura Campus</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;