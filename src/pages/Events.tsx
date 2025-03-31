import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Paper and Poster Presentation",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/paper1.jpg?updatedAt=1743339388886"
  },
  {
    id: 2,
    title: "Webathon",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/web1.jpg?updatedAt=1743339389220"
  },
  {
    id: 3,
    title: "Project Expo",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/projexp1.webp?updatedAt=1743339389342"
  },
  {
    id: 4,
    title: "Photography Challenge",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/photo1.jpg?updatedAt=1743339389340"
  },
  {
    id: 5,
    title: "IPL Auction",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/ipl1.jpg?updatedAt=1743339389333"
  },
  {
    id: 6,
    title: "BGMI Tournament",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/bgmi1.webp?updatedAt=1743339389545"
  },
  {
    id: 7,
    title: "Digital Ping Pong",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/7.jpg?updatedAt=1743174847074"
  },
  {
    id: 8,
    title: "Scary House",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/scary1.png?updatedAt=1743339389559"
  },
  {
    id: 9,
    title: "Mini Golf",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/golf.avif?updatedAt=1743339389184"
  },
  {
    id: 10,
    title: "Capture The Flag",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/extract1.jpg?updatedAt=1743339389224"
  },
  {
    id: 11,
    title: "Binary Bounty Hunt",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/sherlock1.jpg?updatedAt=1743339389549"
  },
  {
    id: 12,
    title: "Pixel Art",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/12.jpg?updatedAt=1743174839235"
  },
  {
    id: 13,
    title: "Drone Dojo",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/register%20page/drone1.jpg?updatedAt=1743339393130"
  },
  {
    id: 14,
    title: "Laser Tag",
    location: "Vasavi College of Engineering",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/14.jpg?updatedAt=1743174841245"
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
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}