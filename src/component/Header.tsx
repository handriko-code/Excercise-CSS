import React from 'react'
import "tailwindcss";
import MenuItem from './MenuItem';
import '../app/globals.css';


const Header: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-gray-900 w-full">
      {/* Menu di kiri */}
      
      <div className="flex justify-center">
        <MenuItem title="Home" address="/" className='text-white px-6' />
        <MenuItem title="About" address="/about" className='text-white px-6' />
        <MenuItem title="Contact" address="/contact" className='text-white px-6' />
        <MenuItem title="Skill" address="/skill" className='text-white px-6' />
        <MenuItem title="Portofolio" address="/portofolio" className='text-white px-6'/>
        <MenuItem title="Experience" address="/experience" className='text-white px-6' />
        <MenuItem title="Testimonials" address="/testimonials" className='text-white px-6'/>
      </div>
      

      {/* Button di Kanan */}
      
      <div className="justify-center items-center px-6">
        {/* Button Login */}
        <span className='px-6'>
          <button className="text-white font-medium">
            Login
          </button>
        </span>
        {/* Button Register */}
        <span className='px-6'>
          <button className="text-white font-medium">
            Register
          </button>
        </span>
        {/* Search */}
        <span>
          <div className="flex items-center rounded-lg bg-white w-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full font-serif px-6 rounded-lg text-black placeholder-gray-400"
            />
            <button className="text-white rounded-lg">
              Search
            </button>
          </div>
        </span>
      </div>
      
    </section>
  );
};

export default Header;