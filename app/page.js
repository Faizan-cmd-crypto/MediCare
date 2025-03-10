"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card';
import { Button } from './components/ui/button';
import { Search, Calendar, FileText, Heart } from 'lucide-react';

const features = [
  {
    title: "Find Doctors",
    description: "Search for doctors by Name, Specialty, Location, and Availability.",
    href: "/doctors",
    icon: Search,
  },
  {
    title: "Book Appointments",
    description: "Schedule appointments online with ease.",
    href: "#",
    icon: Calendar,
  },
  {
    title: "View Medical Records",
    description: "Access your medical records securely.",
    href: "#",
    icon: FileText,
  },
  {
    title: "Get Health Tips",
    description: "Stay informed with helpful health tips and advice.",
    href: "#",
    icon: Heart,
  },
];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>MediCare - Your Health Partner</title>
        <meta
          name="description"
          content="MediCare is your trusted healthcare platform, providing easy access to doctors, appointments, and medical services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="container px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Health, Our Priority
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Access quality healthcare services from the comfort of your home. Find doctors, book appointments, and manage your health records all in one place.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/doctors">
                <Button size="lg" className="min-w-[200px]">
                  Find a Doctor
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <feature.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link href={feature.href}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="container px-4 py-16 md:py-24 bg-muted/50">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "100+", label: "Doctors" },
              { number: "1k+", label: "Patients" },
              { number: "1k+", label: "Appointments" },
              { number: "4.9/5", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-3xl font-bold md:text-4xl">{stat.number}</div>
                <div className="text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;