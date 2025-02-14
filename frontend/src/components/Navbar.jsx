import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Task<span className="text-yellow-400">AI</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/tasks" className="hover:text-yellow-300">Tasks</Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-yellow-300">Features</Link>
          </li>
        </ul>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
            Login
          </Link>
          <Link to="/signup" className="bg-yellow-400 text-blue-600 px-4 py-2 rounded-md hover:bg-yellow-300">
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/" className="block text-center py-2 hover:bg-blue-500">Home</Link>
          <Link to="/tasks" className="block text-center py-2 hover:bg-blue-500">Tasks</Link>
          <Link to="/features" className="block text-center py-2 hover:bg-blue-500">Features</Link>
          <Link to="/login" className="block text-center py-2 bg-white text-blue-600 rounded-md">Login</Link>
          <Link to="/signup" className="block text-center py-2 bg-yellow-400 text-blue-600 rounded-md">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
