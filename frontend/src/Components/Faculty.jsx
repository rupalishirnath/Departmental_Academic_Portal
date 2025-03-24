import React from "react";

const facultyData = [
  {
    name: "RRM Sir",
    subject: "VLSI , EDC , ACD",
    qualification: "Ph.D. in Applied Mathematics",
    description: "Highly experienced and simplifies complex concepts.",
    image: "../Pics/lord.webp",
  },
  {
    name: "UK Mam",
    subject: "MCA",
    qualification: "M.Sc. in Physics",
    description: "Makes learning interactive and practical.",
    image: "../Pics/usha.webp",
  },
  {
    name: "Dr. D.D. Doye",
    subject: "LINEAR INTEGRATED CIRCUITS",
    qualification: "Ph.D",
    description: "Excellent problem-solving approach.",
    image: "../Pics/doye.webp",
  },
  {
    name: "Tamboli Sir",
    subject: "Embedded Systems",
    qualification: "M.E. in Digital Systems",
    description: "Passionate about digital circuits and logic.",
    image: "../Pics/tamboli.webp",
  },
  {
    name: "Bhalerao Sir",
    subject: "ControlS the Systems",
    qualification: "Ph.D. in Control Engineering",
    description: "Deep knowledge and clear explanations.",
    image: "../Pics/bhalerao.webp",
  },
  {
    name: "Jatti Sir",
    subject: "CST , DC",
    qualification: "M.Tech in Computer Science",
    description: "Encourages logical thinking and coding.",
    image: "../Pics/jatti.jpg",
  },
  {
    name: "Nandedkar Sir",
    subject: "Machine Learning",
    qualification: "M.Tech in Embedded Systems",
    description: "Great at breaking down complex topics.",
    image: "../Pics/nandedkar.webp",
  },
  {
    name: "Ingole Sir",
    subject: "SIGNALS AND SYSTEMS",
    qualification: "Ph.D. in Telecommunications",
    description: "Engaging lectures with practical insights.",
    image: "../Pics/ingole.webp",
  },
  {
    name: "Padma Mam",
    subject: "dvd",
    qualification: "Ph.D. in Organic Chemistry",
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
    <div className="bg-green-100 min-h-screen py-10">
      <h2 className="text-4xl text-center font-bold text-green-700 mb-6">
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
              className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-green-500"
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
