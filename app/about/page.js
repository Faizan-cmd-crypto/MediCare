"use client";
import Head from 'next/head';
import Image from 'next/image';
import profile from "../../public/member.png";
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const profileImageVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  };

  const teamMembers = [
    "Faizan Ahmad",
    "Mehvish Bhat",
    "Iqra Bhat",
    "Mir Nazar",
    "Maryam Mirza",
    "Humaira",
  ];

  return (
    <>
      <Head>
        <title>About MediCare | Your Health Partner</title>
      </Head>

      <main className="mt-20 container mx-auto p-4 bg-gray-100">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          About MediCare
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-6 text-center"
        >
          MediCare is your trusted partner in healthcare, dedicated to providing you with convenient and comprehensive access to quality medical services.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <p className="text-lg mb-4">
              We believe in empowering individuals to take control of their health. Our platform connects you with a wide network of qualified doctors,
              facilitates easy appointment scheduling, and provides secure access to your medical records.
            </p>
            <p className="text-lg mb-4">
              At MediCare, we prioritize your well-being. Our mission is to make healthcare more accessible, affordable, and personalized for everyone.
            </p>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-bold mt-8 mb-4"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }, (_, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={profileImageVariants}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
              >
                <Image
                  src={profile}
                  alt={teamMembers[index]}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
              </motion.div>
              <h3 className="text-xl font-semibold">{teamMembers[index]}</h3>
              <p className="text-gray-500">Unity Circle - Group Member</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}