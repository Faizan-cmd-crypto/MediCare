"use client";
import Head from 'next/head';
import Image from 'next/image';
import profile from "../../public/member.png";
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

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

      <div className="container px-4 py-16 md:py-24">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-center mb-8 md:text-5xl"
        >
          About MediCare
        </motion.h1>
        
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
        >
          MediCare is your trusted partner in healthcare, dedicated to providing you with convenient and comprehensive access to quality medical services.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
        >
          <Card className="p-6">
            <CardContent className="p-0">
              <p className="text-lg mb-4">
                We believe in empowering individuals to take control of their health. Our platform connects you with a wide network of qualified doctors,
                facilitates easy appointment scheduling, and provides secure access to your medical records.
              </p>
              <p className="text-lg">
                At MediCare, we prioritize your well-being. Our mission is to make healthcare more accessible, affordable, and personalized for everyone.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg mb-4">
                To transform healthcare delivery by leveraging technology to provide seamless and personalized healthcare experiences.
              </p>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Patient-centered care</li>
                <li>Integrity and transparency</li>
                <li>Innovation in healthcare</li>
                <li>Accessibility for all</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
            >
              <Card className="overflow-hidden">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={profileImageVariants}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  className="w-full flex justify-center pt-6"
                >
                  <Image
                    src={profile}
                    alt={member}
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                  />
                </motion.div>
                <CardContent className="text-center p-6">
                  <h3 className="text-xl font-semibold mb-1">{member}</h3>
                  <p className="text-muted-foreground">Unity Circle - Group Member</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}