import React, { useEffect, useState } from "react"; 
import { useFormik } from "formik";
import * as Yup from "yup";

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { use } from "framer-motion/client";

interface Event {
  place : string;
  title : string ;
  id: number;
  description: string;
  bimage: string;
  location: string;
  image: string;
  price: number;
}

// --- Interface Updated ---
interface FormValues {
  name: string;
  email: string; 
  branch: string;
  section: string;
  year: string;
  rollNo: string;
  college: string;
  selectedEvents: string[];
  transactionId: string;
  paymentScreenshotLink: string;
}

const RegistrationForm: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);

const events: Event[] = [
  {
    place: "",
    title: "PAPER AND POSTER",
    id: 1,
    location: "Some Location",
    price: 100,
    description:
      "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
    image: "https://ik.imagekit.io/k42ezweav/1.jpg?updatedAt=1743174714752",
    bimage: "https://ik.imagekit.io/k42ezweav/1.jpg?updatedAt=1743174714752",
  },
  {
    place: "",
    title: "WEBATHON(PER TEAM)",
    id: 2,
    location: "Some Location",
    price: 150,
    description:
      "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/2.jpg?updatedAt=1743174841409",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/web1.jpg?updatedAt=1743177035393",
  },
  {
    place: "",
    title: "PROJECT EXPO(PER TEAM)",
    id: 3,
    location: "Some Location",
    price: 100,
    description:
      "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/3.jpg?updatedAt=1743174841415",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/projexp1.webp?updatedAt=1743177036134",
  },
  {
    place: "",
    title: "PHOTOGRAPHY CHALLENGE",
    id: 4,
    location: "Some Location",
    price: 50,
    description:
      "Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/4.jpg?updatedAt=1743174841419",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/photo1.jpg?updatedAt=1743177035751",
  },
  {
    place: "",
    title: "IPL AUCTION",
    id: 5,
    location: "Some Location",
    price: 50,
    description:
      "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/5.jpg?updatedAt=1743174841139",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/ipl1.jpg?updatedAt=1743177034708",
  },
  {
    place: "",
    title: "BGMI",
    id: 6,
    location: "Some Location",
    price: 250,
    description:
      "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/6.jpg?updatedAt=1743174841584",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/bgmi1.webp?updatedAt=1743177036284",
  },
  {
    place: "",
    title: "DIGITAL PING PONG",
    id: 7,
    location: "Some Location",
    price: 50,
    description:
      "Fushimi Inari Shrine, famous for its thousands of vibrant red torii gates, winds through the wooded forest of Mount Inari. This iconic Shinto shrine is dedicated to Inari, the god of rice and prosperity, attracting visitors from all over the world.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/7.jpg?updatedAt=1743174847074",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen/7.jpg?updatedAt=1743174847074",
  },
  {
    place: "",
    title: "SCARY HOUSE",
    id: 8,
    location: "Some Location",
    price: 50,
    description:
      "Bora Bora, a jewel in French Polynesia, is synonymous with luxury and natural beauty. Its turquoise lagoon, overwater bungalows, and lush volcanic slopes create an idyllic setting for romance and adventure.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/8.jpg?updatedAt=1743174848349",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/scary1.png?updatedAt=1743177036759",
  },
  {
    place: "",
    title: "MINI GOLF",
    id: 9,
    location: "Some Location",
    price: 50,
    description:
      "Machu Picchu, the lost city of the Incas, is an awe-inspiring archaeological site nestled high in the Andes Mountains. Its intricate stonework and stunning panoramic views offer a glimpse into the ingenuity and artistry of the Inca civilization.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/9.jpg?updatedAt=1743174847891",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/golf.avif?updatedAt=1743177036400",
  },
  {
    place: "",
    title: "EXTRACTION",
    id: 10,
    location: "Some Location",
    price: 50,
    description:
      "Oia, a picturesque village on the island of Santorini, is renowned for its whitewashed buildings, blue-domed churches, and breathtaking sunsets over the Aegean Sea. Its romantic ambiance and stunning vistas make it a sought-after destination for travelers worldwide.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/10.jpg?updatedAt=1743174848397",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/extract1.jpg?updatedAt=1743177034835",
  },
  {
    place: "",
    title: "BINARY BOUNTY HUNT",
    id: 11,
    location: "Some Location",
    price: 50,
    description:
      "Lake Louise, located in Banff National Park, is a pristine alpine lake known for its turquoise waters, surrounded by towering mountains and glaciers. It's a haven for outdoor enthusiasts, offering activities such as hiking, canoeing, and ice skating.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/11.jpg?updatedAt=1743174848907",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/sherlock1.jpg?updatedAt=1743177035675",
  },
  {
    place: "",
    title: "DRONE DOJO",
    id: 13,
    location: "Some Location",
    price: 50,
    description:
      "Zhangjiajie National Forest Park, with its towering sandstone pillars, inspired the floating mountains in the movie Avatar. Hiking through this surreal landscape offers breathtaking views and a sense of wonder.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/13.jpg?updatedAt=1743174841273",
    bimage: "https://ik.imagekit.io/k42ezweav/AcumenBG/drone1.jpg?updatedAt=1743177039038",
  },
  {
    place: "",
    title: "NERF TAG",
    id: 14,
    location: "Some Location",
    price: 225,
    description:
      "Salar de Uyuni, the world's largest salt flat, is a vast, otherworldly expanse that creates stunning mirror-like reflections during the rainy season. Its surreal beauty and unique geological formations make it a photographer's dream.",
    image: "https://ik.imagekit.io/k42ezweav/Acumen/14.jpg?updatedAt=1743174841245",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen/14.jpg?updatedAt=1743174841245",
  },
  {
    place: "",
    title: "AGENTS TALE",
    id: 15,
    location: "Some Location",
    price: 50,
    description: "",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/14.png?updatedAt=1743699431936",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/14.png?updatedAt=1743699431936",
  },
  {
    place: "",
    title: "VR ZONE",
    id: 16,
    location: "Some Location",
    price: 50,
    description: "",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/15.png?updatedAt=1743699432592",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/15.png?updatedAt=1743699432592",
  },
  {
    place: "",
    title: "WHISPER CHALLENGE",
    id: 17,
    location: "Some Location",
    price: 30,
    description: "",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/16.png?updatedAt=1743699432416",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/16.png?updatedAt=1743699432416",
  },
  {
    place: "",
    title: "GEO GUESSR",
    id: 18,
    location: "Some Location",
    price: 50,
    description: "",
    image: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/17.png?updatedAt=1743699429416",
    bimage: "https://ik.imagekit.io/k42ezweav/Acumen%20Final/Mobile%20Posters/17.png?updatedAt=1743699429416",
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  branch: Yup.string().required("Branch is required"),
  section: Yup.string().required("Section is required"),
  year: Yup.string().required("Year is required"),
  rollNo: Yup.string().required("Roll No is required"),
  college: Yup.string().required("College name is required"),
  selectedEvents: Yup.array().min(1, "Select at least one event"),
  transactionId: Yup.string().when("selectedEvents", {
    is: (selectedEvents: number[]) => selectedEvents && selectedEvents.length > 0,
    then: () => Yup.string().required("Transaction ID is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
  paymentScreenshotLink: Yup.string().when("selectedEvents", {
    is: (selectedEvents: number[]) => selectedEvents && selectedEvents.length > 0,
    then: () => Yup.string()
                      .url("Please enter a valid URL (e.g., Google Drive link)")
                      .required("Payment screenshot link is required"),
    otherwise: () => Yup.string().notRequired(),
  }),
});

const [showSuccess, setShowSuccess] = useState(false);

const formik = useFormik<FormValues>({
  initialValues: {
    name: "",
    email: "", 
    branch: "",
    section: "",
    year: "",
    rollNo: "",
    college: "",
    selectedEvents: [],
    transactionId: "",
    paymentScreenshotLink: "",
  },
  validationSchema,
  onSubmit: async (values) => {
    try {
      console.log("Form submitted with values:", values);
      console.log("Total amount to be paid:", totalAmount);

      const registrationData = {
        name: values.name,
        email: values.email,
        branch: values.branch,
        section: values.section,
        year: values.year,
        rollNo: values.rollNo,
        college: values.college,
        selectedEvents: values.selectedEvents,
        totalAmount: totalAmount,
        transactionId: values.transactionId,
        paymentScreenshotLink: values.paymentScreenshotLink
      };

      const response = await fetch('https://backend-hum5.onrender.com/api/register', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify(registrationData), 
      }); 
      
      if (!response.ok) { 
        throw new Error('Network response was not ok'); 
      } 
      
      const result = await response.json(); 
      console.log('Backend response:', result); 
          
      setShowSuccess(true);
      console.log("Registration successful:", result);
      formik.resetForm(); 
      setTotalAmount(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing your registration. Please try again.");
    }
  },
});

React.useEffect(() => {
  const selectedEventIds = formik.values.selectedEvents;
  const total = events
    .filter(event => selectedEventIds.includes(event.title))
    .reduce((sum, event) => sum + event.price, 0);

  setTotalAmount(total);
}, [formik.values.selectedEvents, events]); 

React.useEffect(() => {
  if (showSuccess) {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [showSuccess]);

const handleEventToggle = (eventTitle: string) => {
  const currentSelectedEvents = [...formik.values.selectedEvents];
  if (currentSelectedEvents.includes(eventTitle)) {
    const updatedEvents = currentSelectedEvents.filter(title => title !== eventTitle);
    formik.setFieldValue("selectedEvents", updatedEvents);
  } else {
    formik.setFieldValue("selectedEvents", [...currentSelectedEvents, eventTitle]);
  }
};

useEffect(() => {
  const fetchData = async () => {
    const req = await fetch("https://acumenbackend.onrender.com/api", {
      method: "GET",
    });
  }

  fetchData();
}, []);

return (
  <div className="container mx-auto px-4 py-24 max-w-3xl">
    <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-[#00ff00] mb-8 text-center">
        ACUMEN IT 2025 Registration
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Personal Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Name */}
           <div>
             <label htmlFor="name" className="block text-white mb-2">Full Name *</label>
             <input
               id="name"
               type="text"
               name="name"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.touched.name && formik.errors.name && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.name}</div>
             )}
           </div>
           {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-1 text-sm">{formik.errors.email}</div>
            )}
          </div>
           {/* Branch */}
           <div>
             <label htmlFor="branch" className="block text-white mb-2">Branch *</label>
             <input
               id="branch"
               type="text"
               name="branch"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.branch}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.touched.branch && formik.errors.branch && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.branch}</div>
             )}
           </div>

           {/* Section */}
           <div>
             <label htmlFor="section" className="block text-white mb-2">Section *</label>
             <input
               id="section"
               type="text"
               name="section"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.section}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.touched.section && formik.errors.section && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.section}</div>
             )}
           </div>

           {/* Year */}
           <div>
             <label htmlFor="year" className="block text-white mb-2">Year *</label>
             <select
               id="year"
               name="year"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.year}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             >
               <option value="">Select Year</option>
               <option value="1">1st Year</option>
               <option value="2">2nd Year</option>
               <option value="3">3rd Year</option>
               <option value="4">4th Year</option>
             </select>
             {formik.touched.year && formik.errors.year && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.year}</div>
             )}
           </div>

           {/* Roll No */}
           <div>
             <label htmlFor="rollNo" className="block text-white mb-2">Roll No *</label>
             <input
               id="rollNo"
               type="text"
               name="rollNo"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.rollNo}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.touched.rollNo && formik.errors.rollNo && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.rollNo}</div>
             )}
           </div>

           {/* College Name */}
           <div>
             <label htmlFor="college" className="block text-white mb-2">College Name *</label>
             <input
               id="college"
               type="text"
               name="college"
               className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
               value={formik.values.college}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
             />
             {formik.touched.college && formik.errors.college && (
               <div className="text-red-500 mt-1 text-sm">{formik.errors.college}</div>
             )}
           </div>
        </div>

        {/* Events Selection */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-[#00ff00] mb-4">Select Events *</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-2 max-h-60 overflow-y-auto"> {/* Added scroll */}
            {events.map(event => (
              <div key={event.id} className="flex items-center bg-gray-800 bg-opacity-50 p-3 rounded-md">
                <input
                  type="checkbox"
                  id={`event-${event.id}`}
                  className="h-5 w-5 accent-[#00ff00] cursor-pointer"
                  checked={formik.values.selectedEvents.includes(event.title)}
                  onChange={() => handleEventToggle(event.title)} 
                  onBlur={formik.handleBlur} 
                  name="selectedEvents" 
                />
                <label htmlFor={`event-${event.id}`} className="ml-3 text-white flex-1 cursor-pointer">
                  {event.title}
                </label>
                <span className="text-[#00ff00] font-medium">₹{event.price}</span>
              </div>
            ))}
          </div>
          {/* Ensure error message shows correctly */}
          {formik.touched.selectedEvents && formik.errors.selectedEvents && (
             <div className="text-red-500 mt-2 text-sm">{formik.errors.selectedEvents}</div>
          )}
        </div>

        {/* Total Amount and QR Code */}
        {formik.values.selectedEvents.length > 0 && (
          <div className="bg-gray-800 p-4 rounded-md mt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Total Amount:</h3>
              <span className="text-xl font-bold text-[#00ff00]">₹{totalAmount}</span>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <div className="bg-white p-4 rounded-md">
                <img
                  src="https://media-hosting.imagekit.io/1f6f0b73eb514eb9/WhatsApp%20Image%202025-04-03%20at%2023.12.19.jpeg?Expires=1838353410&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z-jvJlwjU4Z2VSo7oJBLNaiaQGz7wbONagEi19AAW9kraDj4yGg~CPOCXpdMHx2I3aoPjcGC8yirdpIrcSk60B5Yxx5kac-4-R5Aj2L68bJa2YoKh5MiLkS1~tQoLScpfUYnmK3Ybq9nW0YqDW3wDborh~Q-xNKmGlOFnGJvmI46hgOSoW0~Eep3T-yIoDMrslx~OKryzLc3Z51ejfRlgosSAAr6Z3w8ylSJhbRQSheoX5HPJL64fgsSHjk~0H-v6WpmoUxR2kXdCuvSIDosed1HJqEh7vHR9B81MdT0b8MGJvAEY7z3h2LnbqnrNiRLqXbUHLFOtqLlCgO4Ms0seA__"
                  alt="Payment QR Code"
                  className="w-48 h-48"
                />
              </div>
              <p className="mt-2 text-white text-center">
                Scan this QR code to make a payment of ₹{totalAmount}
              </p>
              <p>
                for queries contact : 8688569105
              </p>
            </div>
          </div>
        )}

        {/* Payment Details */}
        {formik.values.selectedEvents.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#00ff00] mb-4">Payment Details</h2>
            <div className="space-y-6">
              {/* Transaction ID */}
              <div>
                <label htmlFor="transactionId" className="block text-white mb-2">Transaction ID *</label>
                <input
                  id="transactionId"
                  type="text"
                  name="transactionId"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                  value={formik.values.transactionId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter payment transaction ID"
                />
                {formik.touched.transactionId && formik.errors.transactionId && (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.transactionId}</div>
                )}
              </div>

              {/* Payment Screenshot Link */}
              <div>
                <label htmlFor="paymentScreenshotLink" className="block text-white mb-2">Payment Screenshot Drive Link *</label>
                <input
                  id="paymentScreenshotLink"
                  type="text"
                  name="paymentScreenshotLink"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                  value={formik.values.paymentScreenshotLink}
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  placeholder="Paste Google Drive link (ensure sharing settings allow access)"
                />
                {formik.touched.paymentScreenshotLink && formik.errors.paymentScreenshotLink && (
                  <div className="text-red-500 mt-1 text-sm">{formik.errors.paymentScreenshotLink}</div>
                )}
                <p className="text-gray-400 text-sm mt-2">
                  Upload your payment screenshot to Google Drive, get a shareable link (ensure anyone with the link can view), and paste it here.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className={`bg-[#00ff00] text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-opacity-80 transition-colors ${formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={formik.isSubmitting} 
          >
            {formik.isSubmitting ? "Submitting..." : "Complete Registration"}
          </button>
        </div>
      </form>
    </div>
    {showSuccess && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-green-500 text-white p-6 rounded-lg flex items-center space-x-4 animate-fade-in">
        <CheckCircleIcon className="h-8 w-8" />
        <div>
          <h3 className="text-lg font-semibold">Registration Successful!</h3>
          <p className="text-sm">Thank you for registering for Acumen IT 2025.</p>
        </div>
      </div>
    </div>
  )}   
  </div>
);
};

export default RegistrationForm;
