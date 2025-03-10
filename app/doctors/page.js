'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Search, MapPin, Phone, Award, Clock, CreditCard } from 'lucide-react';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/doctors')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDoctors(data.data);
          setFilteredDoctors(data.data);
        } else {
          console.error('Error fetching doctors:', data.error);
        }
      })
      .finally(() => {
        setIsLoading(false);
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
    <div className="container px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Find Doctors</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Search for specialists, view their qualifications, and book appointments with ease.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={searchBarVariants}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search doctors by name, specialization, or qualification..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-4 border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow shadow-md"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredDoctors && filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <motion.div
                  key={doctor._id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={doctorVariants}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{doctor.Name}</CardTitle>
                      <CardDescription>{doctor.Specialization}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Qualification</h3>
                          <p className="text-muted-foreground">{doctor.Qualification}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-muted-foreground">{doctor.Location}</p>
                          <a 
                            href={doctor.Location_Link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary hover:underline flex items-center mt-1"
                          >
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>View on Map</span>
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Availability</h3>
                          <p className="text-muted-foreground">{doctor.Availability || 'N/A'}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Contact</h3>
                          <p className="text-muted-foreground">{doctor.Contact}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Consultation Fee</h3>
                          <p className="text-muted-foreground">₹{doctor.Consultation_Fee}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Book Appointment</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-xl text-muted-foreground">No doctors found matching your search criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}