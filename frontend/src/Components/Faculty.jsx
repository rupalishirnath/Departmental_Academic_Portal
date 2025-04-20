import React from "react";

const facultyData = [
  {
    name: "RRM Sir",
    subject: "VLSI , EDC , ACD",
    qualification: "Ph.D. from IIT Kharagpur in 2003",
    description: "Highly experienced and simplifies complex concepts.",
    image: "../Pics/lord.webp",
  },
  {
    name: "UK Mam",
    subject: "MCA , Digital image processing",
    qualification: "Ph.D",
    description: "Makes learning interactive and practical.",
    image: "../Pics/usha.webp",
  },
  {
    name: "Dr. D.D. Doye",
    subject: "LINEAR INTEGRATED CIRCUITS",
    qualification: "Ph.D from SRTMU Nanded in 2003",
    description: "Excellent problem-solving approach.",
    image: "../Pics/doye.webp",
  },
  {
    name: "Tamboli Sir",
    subject: "Embedded Systems",
    qualification: "Ph.D from Dr.BAMU Ch.Sambhajinagar",
    description: "Passionate about digital circuits and logic.",
    image: "../Pics/tamboli.webp",
  },
  {
    name: "Bhalerao Sir",
    subject: "Digital Electronics",
    qualification: "Ph.D completed in 2008",
    description: "Deep knowledge and clear explanations.",
    image: "../Pics/bhalerao.webp",
  },
  {
    name: "Jatti Sir",
    subject: "CST , DC",
    qualification: "Ph.D from IIT Roorkee",
    description: "Encourages logical thinking and coding.",
    image: "../Pics/jatti.jpg",
  },
  {
    name: "Nandedkar Sir",
    subject: "Machine Learning",
    qualification: "Ph.D. from IIT Kharagpur in 2008",
    description: "Great at breaking down complex topics.",
    image: "../Pics/nandedkar.webp",
  },
  {
    name: "Ingole Sir",
    subject: "SIGNALS AND SYSTEMS",
    description: "Engaging lectures with practical insights.",
    image: "../Pics/ingole.webp",
  },
  {
    name: "Padma Mam",
    subject: "dvd",
    description: "Patient and ensures deep understanding.",
    image: "../Pics/padma.webp",
  },
  {
    name: "Nitin Sir",
    subject: "CONTOL SYSTEM & DATA STRUCTURES",
    qualification: "M.Tech in Electronics",
    description: "Explains real-world applications effectively.",
    image: "../Pics/nitin.webp",
  },
 

  
];

const Faculty = () => {
  return (
    <div className="bg-red-100 min-h-screen py-10">
      <h2 className="text-4xl text-center font-bold text-red-700 mb-6">
        Our Faculty Members
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-red-500"
            />
            <h3 className="text-2xl font-semibold text-green-800">
              {faculty.name}
            </h3>
            <p className="text-green-600 font-medium">{faculty.subject}</p>
            <p className="text-gray-700 text-sm mt-2">
              {faculty.qualification}
            </p>
            <p className="text-gray-600 mt-2 italic">{faculty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
