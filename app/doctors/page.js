'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDoctors(data.data);
          setFilteredDoctors(data.data);
        } else {
          console.error('Error fetching doctors:', data.error);
        }
      });
  }, []);

  useEffect(() => {
    if (doctors) {
      setFilteredDoctors(
        doctors.filter((doctor) =>
          doctor &&
          (doctor.Name && doctor.Name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (doctor.Specialization && doctor.Specialization.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (doctor.Qualification && doctor.Qualification.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [doctors, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const doctorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={searchBarVariants}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors by name, specialization, or qualification..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-md"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredDoctors && filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor._id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={doctorVariants}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{doctor.Name}</h2>
                <p className="text-gray-600 mb-2"><strong>Specialization:</strong> {doctor.Specialization}</p>
                <p className="text-gray-600 mb-2"><strong>Qualification:</strong> {doctor.Qualification}</p>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {doctor.Location}</p>
                <p className="text-gray-600 mb-2">
                  <strong>Google Map Location Link:</strong>{' '}
                  <a href={doctor.Location_Link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Map
                  </a>
                </p>
                <p className="text-gray-600 mb-2"><strong>Availability:</strong> {doctor.Availability || 'N/A'}</p>
                <p className="text-gray-600 mb-2"><strong>Contact:</strong> {doctor.Contact}</p>
                <p className="text-gray-600 mb-4"><strong>Fee:</strong> ₹{doctor.Consultation_Fee}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                  Book Appointment
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}