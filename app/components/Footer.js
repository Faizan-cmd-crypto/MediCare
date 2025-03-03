import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import picture from '../../public/Logo2.jpg'

const Footer = () => {
  return (
    <>
      <footer className="bg-green-500 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image className="rounded-full "src={picture} alt="MediCare Logo" width={40} height={40}/>
          <p className="ml-2 text-sm">© 2025 MediCare. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-teal-500 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-teal-500 transition-colors duration-300">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer