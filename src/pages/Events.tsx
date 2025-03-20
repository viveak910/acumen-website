import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Global Tech Summit 2025",
    date: "March 15-17, 2025",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Join industry leaders and innovators at the biggest tech conference in Asia"
  },
  {
    id: 2,
    title: "Eco Innovation Forum",
    date: "April 5-7, 2025",
    location: "Stockholm",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Exploring sustainable solutions for a greener future"
  },
  {
    id: 3,
    title: "Digital Marketing Excellence",
    date: "May 20-22, 2025",
    location: "New York",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
    description: "Master the latest digital marketing strategies and tools"
  },
  {
    id: 4,
    title: "AI & Machine Learning Conference",
    date: "June 10-12, 2025",
    location: "London",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    description: "Discover the future of artificial intelligence and machine learning"
  }
];

export function Events() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-24 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-16 text-center">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-[#2a2a2a] hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-[#ecad29]">{event.date}</p>
                    <p className="text-gray-300">{event.location}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-[#ecad29] text-black rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Register
                  </motion.button>
                </div>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}