import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"; // Light/Dark mode icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Task<span className="text-blue-500">AI</span></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["Home", "Tasks", "About", "Contact"].map((item) => (
            <li key={item} className="hover:text-blue-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Icons: Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsFillSunFill className="text-yellow-400 text-2xl" /> : <BsMoonFill className="text-gray-600 text-2xl" />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-center mt-4">
          {["Home", "Tasks", "About", "Contact"].map((item) => (
            <li key={item} className="hover:text-blue-500 cursor-pointer" onClick={() => setMenuOpen(false)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
