"use client"; 
import { motion } from "framer-motion";

import { Truck,CalendarCheck,ShoppingCart } from "lucide-react";

export default function Features(){
  
  const features = [
    {
      id: 1,
      icon: Truck,
      name: "Fast Delivery",
      desc: "Home delivery at your doorstep at your convenient time.",
    },
    {
      id: 2,
      icon: CalendarCheck,
      name: "Advanced Booking",
      desc: "No need running when we are here to serve you and make you feel comfortable.",
    },
    {
      id: 3,
      icon: ShoppingCart,
      name: "Easy Order Online",
      desc: "Enjoy freshly made food with just an easy order and variety of options.",
    },
    
    ];
  
 
  return(
    <motion.section 
    initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
    
    className="w-full px-5 py-3 font-sans mb-20 border-t">
      <h1 className="font-semibold text-2xl text-center mb-4 text-orange-500 lg:text-xl">Our Features</h1>
    <ul className="bg-gray-500 px-5 py-3 rounded-lg space-y-4 text-white">
      
      {features.map((feature) => (
      <li 
      key={feature.id}>
        <div className="flex gap-2 font-semibold text-lg lg:text-2xl">
        <feature.icon />
        <h2>{feature.name}</h2>
        </div>
       <p className="text-sm lg:text-sm border-b pb-5">{feature.desc}</p>
      </li>
      ))}
    </ul>
    </motion.section>
    );
}