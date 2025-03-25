import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = {
  coordinators: [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
      description: "10+ years of experience in event management and coordination",
    },
    {
      name: "Michael Chen",
      role: "Technical Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
      description: "Expert in technical planning and execution of large-scale events",
    },
  ],
  acumenTeam: [
    {
      name: "Emily Rodriguez",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&q=80",
      description: "Leads strategic planning and business development",
    },
    {
      name: "David Kim",
      role: "Analytics Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&q=80",
      description: "Specializes in data analysis and performance optimization",
    },
    {
      name: "Lisa Wang",
      role: "Innovation Manager",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&q=80",
      description: "Drives innovation and new technology initiatives",
    },
  ],
};

type Category = "all" | "coordinators" | "acumenTeam";

export function Team() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Update active category
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setSelectedMember(null);
  };

  // Filter members
  const getFilteredMembers = () => {
    if (activeCategory === "all") {
      return [...teamMembers.coordinators, ...teamMembers.acumenTeam];
    } else if (activeCategory === "coordinators") {
      return teamMembers.coordinators;
    } else {
      return teamMembers.acumenTeam;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white">Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the brilliant minds shaping our vision and driving innovation
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex justify-center mb-16 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <CategoryButton
            label="All"
            isActive={activeCategory === "all"}
            onClick={() => handleCategoryChange("all")}
          />
          <CategoryButton
            label="Coordinators"
            isActive={activeCategory === "coordinators"}
            onClick={() => handleCategoryChange("coordinators")}
          />
          <CategoryButton
            label="Acumen Team"
            isActive={activeCategory === "acumenTeam"}
            onClick={() => handleCategoryChange("acumenTeam")}
          />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {getFilteredMembers().map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              index={index}
              isSelected={selectedMember === member.name}
              onClick={() =>
                setSelectedMember(selectedMember === member.name ? null : member.name)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? "bg-indigo-600 text-white"
          : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.button>
  );
}

interface Member {
  name: string;
  role: string;
  image: string;
  description: string;
}

function TeamMember({
  member,
  index,
  isSelected,
  onClick,
}: {
  member: Member;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 ${
        isSelected
          ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-900/20"
          : "shadow-md shadow-black/30 hover:shadow-lg hover:shadow-black/40"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      layout
    >
      <div className="cursor-pointer" onClick={onClick}>
        <div className="aspect-square relative overflow-hidden">
          <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
          <motion.div
            className="absolute inset-0 bg-indigo-900 bg-opacity-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isSelected ? 0.6 : 0 }}
            whileHover={{ opacity: 0.4 }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-indigo-300 mt-1">{member.role}</p>
        </div>
      </div>

      {/* Expandable description */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isSelected ? "auto" : 0,
          opacity: isSelected ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6">
          <div className="w-full h-px bg-gray-700 mb-4" />
          <p className="text-gray-300">{member.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}