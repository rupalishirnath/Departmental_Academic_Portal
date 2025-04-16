import React from "react";

const Home = () => {
  const years = [
    { 
      title: "First Year", 
      link: "/notes/first-year",
      description: "Basics of engineering, mathematics, physics, and programming.",
    },
    { 
      title: "Second Year", 
      link: "/notes/second-year",
      description: "Core subjects including DSA, OOP, and circuit design, network theory.",
    },
    { 
      title: "Third Year", 
      link: "/notes/third-year",
      description: "Advanced topics such as AI, databases, and networking, CST , Machine Learning and VLSI",
    },
    { 
      title: "Final Year", 
      link: "/notes/final-year",
      description: "Final year projects, research papers, and industry-level knowledge.",
    },
  ];

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-red-800 mb-8">📚 Notes Collection</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Select your academic year to access relevant notes, study materials, and important resources.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {years.map((year, index) => (
          <a
            key={index}
            href={year.link}
            className="bg-red-400 text-white shadow-xl rounded-2xl p-8 text-center hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-3">{year.title}</h2>
            <p className="text-base opacity-90">{year.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
