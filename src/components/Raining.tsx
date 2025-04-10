import React from 'react';
import Rainingl from './Rainingl';
import arunaImg from './aruna.webp';
import image from './image.webp';
import image2 from './image2.webp';
import n from './n.webp';
import m from './sponsor2.webp'
import mm from './some.webp'

const coordinators = [
  {
    name: "Dr. S. V. Ramana",
    role: "Principal",
    image: "https://ik.imagekit.io/tmdgdnv8a/WhatsApp%20Image%202025-04-02%20at%2020.30.14.jpeg?updatedAt=1743606872861"
  },
  {
    name: "Dr. K. Ram Mohan Rao",
    role: "HOD, IT",
    image: "https://ik.imagekit.io/tmdgdnv8a/WhatsApp%20Image%202025-04-02%20at%2020.30.15.jpeg?updatedAt=1743607901543",
  },
  {
    name: "Dr. S. Aruna",
    role: "Faculty Coordinator",
    image: arunaImg
  },
  
  {
    name: "Shahnawaz",
    role: "Overall Acumen IT Coordinator ",
    image: "https://media-hosting.imagekit.io/eeae518d2ea7481c/WhatsApp%20Image%202025-04-03%20at%2022.44.14_8df02570.jpg?Expires=1838308506&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S544YlvpswI6ttik2hkhPbIQE9V6Saaxsqw0rqmHIqCJ~uEOFsDBwOlG65xT0qmCTfWDoyWUI2xZ2pmevATJEWvpaok~aY6t2gVgeK5g6OCp9PBrc8S-utb9I5B8oZtImwPycwoGBG3X1eyHNnWIcp4u2~ZqueMeZ8~nFoehrugTDvwQWuMJ9X-OftLU-XgH-~RWW2xC5cLb1Xss5rBs4NBclZqEqVRGsOA7o2TaNOUcZ36Sow3hiqw~BKVNMZ5RMlwP49E-Tp623FAXtvgBEln8LBB8kIqeq7vanTBzvSW09N0UPcHYeiEhb1naUBvrwsiG9frsgsklTqHwDTUtjg__",
    role2 : "Head of Logistics"
  },
  {
    name: "Manoj Aripaka",
    role: "Overall Coordinator",
    role2: "Head of Design and Technology",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/WhatsApp%20Image%202025-04-02%20at%2018.26.40_18255732.jpg?updatedAt=1743601417728"
  },
  {
    name: "Phani Meghana",
    role: "Overall Coordinator",
    role2: "Head of Marketing and Logistics",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/PHANI%20MEGHANA_.jpg?updatedAt=1743601422526"
  },
  {
    name: "Srinithi",
    role: "Overall Coordinator",
    role2: "Head of Marketing and Logistics",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/srinithi.png?updatedAt=1743601417737"
  },
  {
    name: "S Bagawan Reddy",
    role: "Overall Coordinator",
    image: "https://ik.imagekit.io/tmdgdnv8a/WhatsApp%20Image%202025-04-02%20at%2020.23.55.jpeg?updatedAt=1743606872161"
  },
  {
    name: "L Bhavani",
    role: "Overall Coordinator",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Bhavani.jpg?updatedAt=1743749477512"
  },
  
  {
    name: "Vaishnavi Cheruku",
    role: "Design Lead",
    image: "https://ik.imagekit.io/tmdgdnv8a/IMG_20250402_223258.jpg?updatedAt=1743870811629"
  },
  {
    name: "Saakshi",
    role: "Marketing Lead",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Saakshi.jpg?updatedAt=1743601421341"
  },
  {
    name: "Sharath",
    role: "Logistics Lead",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Sharath.jpg?updatedAt=1743601417941"
  },
  {
    name: "B Nitish Kumar ",
    role: "Logistics Lead",
    image: mm
  },
  {
    name: "Goutham Siddarth",
    role: "Creative Lead",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Goutham%20Siddarth.jpg?updatedAt=1743829897879"
  },
  {
    name: "Jai Chandra",
    role: "Technology Lead",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Jai%20Chandra%20.jpeg?updatedAt=1743601417588"
  },

  {
    name: "Viveak",
    role: "Developer",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/WhatsApp%20Image%202025-04-02%20at%2018.27.12_5725ed88.jpg?updatedAt=1743601417226"
  },
  {
    name: "Vibhas",
    role: "Developer",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Organisers/Vibhas.jpg?updatedAt=1743749495944"
  }
];

const galleryImages = [
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/IMG_2302.HEIC?updatedAt=1743601009557",
    title: "",
    description: ""
  },
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/2.jpg?updatedAt=1743601009852",
    title: "",
    description: ""
  },
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/4.jpg?updatedAt=1743601008663",
    title: "Innovation Lab",
    description: "Where ideas transform into reality"
  },
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/3%20(1).jpg?updatedAt=1743602735020",
    title: "Robotics Competition",
    description: "Pushing the boundaries of automation"
  },
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/5.jpg?updatedAt=1743601010000",
    title: "Team Collaboration",
    description: "Working together to achieve greatness"
  },
  {
    url: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Gallery/6.jpg?updatedAt=1743601010100",
    title: "Award Ceremony",
    description: "Celebrating success and achievements"
  }
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 z-0">
        <Rainingl />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        
        {/* Gallery Section */}
        <section className="min-h-screen py-20 px-4 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Gallery</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden group">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    
                    <div className="w-full h-1 bg-green-400/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 transition-all duration-[5000ms] ease-linear"
                        style={{
                          width: '100%',
                          transform: 'translateX(-100%)',
                          animation: 'progress 5s linear infinite'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-green-400 w-6' 
                        : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coordinators Section */}
        <section className="min-h-screen py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Our Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {coordinators.map((coordinator, index) => (
                <div 
                  key={index}
                  className="bg-black/50 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative mb-6">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name}
                      className="w-full h-80 mx-auto object-cover border-4 border-green-400 rounded-lg" // Increased height to h-80
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black/50" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{coordinator.name}</h3>
                    <p className="text-green-400 mb-2">{coordinator.role}</p>
                    {coordinator.role2 && <p className="text-green-400">{coordinator.role2}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Sponsors</h2>
            {/* Display side by side on larger screens, stack on smaller screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
              <div
                onClick={() => window.open('https://rinno.tech', '_blank')}
                className="cursor-pointer w-80 h-80 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={image}
                  alt="Sponsor 1"
                  className="object-contain w-full h-full"
                />
              </div>
              <div
                onClick={() => window.open('https://learning.decluttered.co.in', '_blank')}
                className="cursor-pointer w-80 h-80 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={image2}
                  alt="Sponsor 2"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 place-items-center mt-8">
              <div
                onClick={() => window.open('https://www.sapphirehomes.co.in/', '_blank')}
                className="cursor-pointer w-80 h-80 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={m}
                  alt="Sponsor 2"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
