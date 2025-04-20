import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold text-green-800 mb-8">📖 About Our Notes App</h1>

      {/* Problem Students Face */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-green-200 mb-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">💭 The Struggle Every Student Faces</h2>
        <p className="text-lg text-green-700 leading-relaxed">
          As exams approach, students often find themselves searching for well-organized notes. The challenge is real—  
          some students have incomplete class notes, others rely on their friends, and many don’t even know which faculty members can guide them best.  
          In a rush, students waste hours gathering notes from multiple sources, yet they still miss out on crucial topics.
        </p>
        <p className="text-lg text-green-700 leading-relaxed mt-4">
          Imagine this: **It’s just a week before your exams, and you’re struggling to find proper notes for an important subject.**  
          You ask classmates, scroll through WhatsApp groups, and visit faculty offices, only to end up with unorganized PDFs and handwritten notes.  
          **Wouldn’t it be great if all your study materials were in one place?**
        </p>
      </div>

      {/* Solution Offered by Notes App */}
      <div className="bg-green-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-green-300 mb-10">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">🎯 Our Mission: Making Notes Easily Accessible</h2>
        <p className="text-lg text-green-700 leading-relaxed">
          We understand how stressful exam time can be, and that’s why we built this **Notes App**—a **one-stop platform**  
          where you can access **well-organized, faculty-recommended study materials** instantly.  
        </p>
        <p className="text-lg text-green-700 leading-relaxed mt-4">
          Instead of wasting valuable time searching for notes, students can now **download high-quality study materials in seconds**  
          and focus on what really matters—understanding concepts and acing exams! 🚀
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-green-200 mb-10">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">🚀 Key Features of Our Notes App</h2>
        <ul className="list-disc list-inside text-green-700 space-y-3 text-lg">
          <li>📚 **Comprehensive Notes** – Access study materials for every subject, sorted by year and semester.</li>
          <li>👨‍🏫 **Know Your Faculty** – Find out which professor teaches what, along with their expertise and notes.</li>
          <li>🔍 **Easy Search & Filter** – Quickly locate notes by faculty name, subject, or topic.</li>
          <li>📥 **Download PDFs** – Save notes for offline access anytime, anywhere.</li>
          <li>💡 **Exam Tips & Guidance** – Learn from faculty-recommended strategies to score better in exams.</li>
        </ul>
      </div>

      {/* Why This Matters */}
      <div className="bg-green-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-green-300 mb-10">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">🤔 Why This Matters for Every Student</h2>
        <p className="text-lg text-green-700 leading-relaxed">
          Many students fail to perform well in exams **not because they don’t study**,  
          but because they spend too much time **collecting** study materials rather than **studying them.**
        </p>
        <p className="text-lg text-green-700 leading-relaxed mt-4">
          By providing a **centralized and structured** platform for academic resources,  
          we eliminate the confusion and ensure that **no student is left behind** in the preparation process.
        </p>
      </div>

      {/* Final Message */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-green-200">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">📌 Our Promise to Students</h2>
        <p className="text-lg text-green-700 leading-relaxed">
          We are committed to making your learning experience **simpler, smarter, and stress-free.**  
          Our notes app is designed to ensure that **you have everything you need to succeed, right at your fingertips.**
        </p>
        <p className="text-lg text-green-700 leading-relaxed mt-4">
          So, the next time exams are near, you won’t have to worry about **“Where do I get notes from?”**  
          Instead, you’ll have a **trusted source** that provides everything you need in an **organized and efficient** way.  
        </p>
        <p className="text-xl font-semibold text-green-800 mt-6 text-center">
          📚 **Happy Studying & Best of Luck for Your Exams!** 🎉
        </p>
      </div>
    </div>
  );
};

export default About;
