'use client'; // Mark as a client component for Framer Motion

import Head from 'next/head';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'; // Import useState for menu toggle
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  return (
    <>
      <Head>
        <title>MediVitals - Your Health Partner</title>
        <meta name="description" content="Your trusted healthcare platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="ml-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>

            <ThemeToggle />

            <div className="flex items-center space-x-4">
              <AnimatePresence>
                <SignedOut>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SignInButton>
                      <Button variant="default">Sign In</Button>
                    </SignInButton>
                  </motion.div>
                </SignedOut>
              </AnimatePresence>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t md:hidden"
            >
              <div className="container py-4 space-y-4">
                <Link
                  href="/"
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}