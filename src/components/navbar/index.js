"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and close the mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#ffe4e6] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="  flex-shrink-0 ">
          <a href="/" className="text-white text-3xl font-bold">
            <Image 
              src='/logos/rf.png'
              
              alt='logo'
              height={100}
              width={190}
              loading='lazy'
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-black  hover:text-[#500724] mr-4"
              onClick={handleLinkClick} // Close menu on link click
            >
             HOME
            </a>
            <a
              href="/UspPage"
              className="block mt-4 lg:inline-block lg:mt-0 text-black  hover:text-[#500724] mr-4"
              onClick={handleLinkClick} // Close menu on link click
            >
              LIFE AT RAKHIS FASHIONS
            </a>
            <a
              href="https://www.onati-global.com/"
              className="block mt-4 lg:inline-block lg:mt-0 text-t-black  hover:text-[#500724] mr-4"
              onClick={handleLinkClick} // Close menu on link click
            >
              ONATI GLOBAL
            </a>
            <a
              href="https://www.rebblebee.com/KidsGirlsClothes"
              className="block mt-4 lg:inline-block lg:mt-0  text-black  hover:text-[#500724] mr-4"
              onClick={handleLinkClick} // Close menu on link click
            >
             REBBLEBEE
            </a>
            <a
              href="https://www.wetailor4u.com/"
              className="block mt-4 lg:inline-block lg:mt-0  text-black  hover:text-[#500724]"
              onClick={handleLinkClick} // Close menu on link click
            >
              WETAILOR4U
            </a>
            <a
              href="https://www.ogiftbangalore.com/"
              className="block mt-4 lg:inline-block lg:mt-0  text-black  hover:text-[#500724] mx-3" 
              onClick={handleLinkClick} // Close menu on link click
            >
             OGIFT
            </a>
            <a
              href="https://www.linkedin.com/company/onatiglobal/"
              className="block mt-4 lg:inline-block lg:mt-0  text-black  hover:text-[#500724] mx-3" 
              onClick={handleLinkClick} // Close menu on link click
            >
             LINKEDIN
            </a>
          </div>
          <div>
           
         
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a
            href="/"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
           HOME
          </a>
          <a
            href="/UspPage"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
           LIFE AT RAKHIS FASHIONS
          </a>
          <a
            href="https://www.onati-global.com/"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
        ONATI GLOBAL
          </a>
          <a
            href="https://www.rebblebee.com/KidsGirlsClothes"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
           REBBLEBEE
          </a>
          <a
            href="https://www.wetailor4u.com/"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
           WETAILOR4U
          </a>
          <a
            href="https://www.ogiftbangalore.com/"
            className="block mt-4 text-[#831843]  hover:text-[#500724]"
            onClick={handleLinkClick} // Close menu on link click
          >
        OGIFT
          </a>
          <a
              href="https://www.linkedin.com/company/onatiglobal/"
             className="block mt-4 text-[#831843]  hover:text-[#500724]"
              onClick={handleLinkClick} // Close menu on link click
            >
            LINKEDIN
            </a>
          <div className="mt-4">
        
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
