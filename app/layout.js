import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediCare - Easy Access To All",
  description: "MediCare is an Online Platform Easily Accessible to the Massess of Kashmir helping them provide an Easy Accurate Access to the diffrent Renowed Clinicians/Clinics.You can Search for Doctors, Locations of their Clinics, Charges and you can easily Book Appointments Online",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <header className="flex justify-end items-center p-4 gap-4 h-16">
          </header>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
