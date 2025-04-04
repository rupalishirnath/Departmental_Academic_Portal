import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notes App of SGGSIE&T</h1>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-green-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-300">About</Link></li>
          <li><Link to="/faculty" className="hover:text-green-300">Faculty</Link></li>
          <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-200">Login</Link>
          <Link to="/signup" className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 bg-green-700 p-4 mt-2">
          <li><Link to="/" className="hover:text-green-300" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-green-300" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/faculty" className="hover:text-green-300" onClick={() => setIsOpen(false)}>Faculty</Link></li>
          <li><Link to="/contact" className="hover:text-green-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-200" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/signup" className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-700" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
        </ul>
      )}
    </nav>
  );
}
