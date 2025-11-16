"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import  Link  from "next/link";

export default function Navbar(){
  const [isOpen , setIsOpen] = useState(false);
  
  return(
    <header className="shadow-md bg-white/40 backdrop-blur-[10px] fixed top-0 left-0 w-full z-50">
      
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
         <img src="./logo.png"
         alt="logo"
         width={80}
         />
        
        {/* laptop only*/}
        
        <nav className="hidden lg:flex space-x-8 text-md transition duration:300">
          <Link href="#" className="hover:text-orange-600">Home</Link>
          <Link href="#" className="hover:text-orange-600">Shop</Link>
          <Link href="#" className="hover:text-orange-600">Services</Link>
          <Link href="#" className="hover:text-orange-600">About</Link>
          <Link href="#" className="hover:text-orange-600">Contact</Link>
        </nav>
        {/* menu icon*/}
        
        <button onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden focus:outline-none"
        >
        {isOpen ? <X width={28} /> : <Menu width={28} />}
        </button>
      </div> 
      {isOpen &&(
      <div className="lg:hidden bg-white/40 backdrop-blur-[10px] shadow-md border-t">
        
        <nav className="flex flex-col space-y-3 text-md px-6 py-4 transition duration:300">
          <Link href="#" className="hover:text-orange-600">Home</Link>
          <Link href="#" className="hover:text-orange-600">Shop</Link>
          <Link href="#" className="hover:text-orange-600">Services</Link>
          <Link href="#" className="hover:text-orange-600">About</Link>
          <Link href="#" className="hover:text-orange-600">Contact</Link>
        </nav>
      </div>
      )}
    </header>
    );
}