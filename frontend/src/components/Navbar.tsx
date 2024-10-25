import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black py-4 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Url.Shortify</h1>

        {/* Hamburger menu icon for mobile view */}
        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
          {isMenuOpen ? <HiX className="w-6 h-6 text-gray-100" /> : <HiMenu className="w-6 h-6 text-gray-100" />}
        </button>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/signup"
            className="inline-block rounded bg-gray-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Create an Account
          </a>
          <a
            href="/login"
            className="inline-block rounded bg-gray-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-100 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            Login
          </a>
        </div>
      </div>

      {/* Popup menu for mobile view */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-white border-t border-gray-300 shadow-md mt-2 rounded-b-lg p-4 md:hidden">
          <a
            href="/signup"
            className="block w-full text-center px-4 py-2 mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create an Account
          </a>
          <a
            href="/login"
            className="block w-full text-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-full shadow-md hover:from-gray-900 hover:to-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
