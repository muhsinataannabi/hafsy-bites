"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import  Link  from "next/link";

export default function Navbar(){
  const [isOpen , setIsOpen] = useState(false);
 const navLinks = [
  { name:  "Home", href: "/", },
  { name:  "Shop", href: "/", },
  { name:  "Services", href: "/", },
  { name:  "About", href: "/", },
  { name:  "Contact", href: "/", },
   ]; 
  return(
    <header className="shadow-md bg-white/40 backdrop-blur-[10px] fixed top-0 left-0 w-full z-50">
      
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
         <img src="/logo.png"
         alt="logo"
         width={80}
         height={20}
         />
        
        {/* laptop only*/}
        
        <nav className="hidden lg:flex text-md transition duration:300">
          <ul className="space-x-8">
            {navLinks.map((navLink,index) => (
            <li key={index}>
          <Link href={navLink.href} className="hover:text-orange-600">{navLink.name}</Link>
            </li>
            ))}
          </ul>
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
        
        <nav className="flex flex-col text-md px-6 py-4 transition duration:300">
           <ul className="space-y-3">
            {navLinks.map((navLink,index) => (
            <li key={index}>
          <Link href={navLink.href} className="hover:text-orange-600">{navLink.name}</Link>
            </li>
            ))}
          </ul>
        </nav>
      </div>
      )}
    </header>
    );
}