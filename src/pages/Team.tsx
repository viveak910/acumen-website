import { motion } from "framer-motion";

const teamMembers = {
  coordinators: [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
      description: "10+ years of experience in event management and coordination"
    },
    {
      name: "Michael Chen",
      role: "Technical Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      description: "Expert in technical planning and execution of large-scale events"
    }
  ],
  acumenTeam: [
    {
      name: "Emily Rodriguez",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
      description: "Leads strategic planning and business development"
    },
    {
      name: "David Kim",
      role: "Analytics Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      description: "Specializes in data analysis and performance optimization"
    },
    {
      name: "Lisa Wang",
      role: "Innovation Manager",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&q=80",
      description: "Drives innovation and new technology initiatives"
    }
  ]
};

export function Team() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white pt-24 px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-16 text-center">Our Team</h1>
        
        {/* Coordinators Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-[#ecad29]">Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.coordinators.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center px-4">{member.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#ecad29] mt-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Acumen Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-[#ecad29]">Acumen Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.acumenTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center px-4">{member.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#ecad29] mt-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}