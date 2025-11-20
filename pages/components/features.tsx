"use client"; 
import { motion } from "framer-motion";

import { Truck,CalendarCheck,ShoppingCart } from "lucide-react";
//implentint the features as array of objects.
export default function Features(){
  return(
    <motion.section 
    initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
    
    className="w-full px-5 py-3 font-sans mb-20 border-t">
      <h1 className="font-semibold text-2xl text-center mb-4 text-orange-500 lg:text-xl">Our Features</h1>
    <dl className="bg-gray-500 px-5 py-3 rounded-lg space-y-4 text-white">
      <dt className="flex gap-2 font-semibold text-lg lg:text-2xl"><Truck /> Fast Delivery</dt>
      <dd className="text-sm lg:text-sm">Home delivery at your doorstep at your convenient time.
      </dd>
      <hr />
      <dt className="flex gap-2 text-lg font-semibold lg:text-2xl"><CalendarCheck /> Advanced Booking</dt>
      <dd className="text-sm lg:text-sm">No need running when we are here to serve you and make you feel comfortable.
      </dd>
      <hr />
      <dt className="flex gap-2 font-semibold text-lg lg:text-2xl"><ShoppingCart /> Easy Order Online</dt>
      <dd className="text-sm lg:text-sm">
        Enjoy freshly made food with just an easy order and variety of options.
      </dd>
    </dl>
    </motion.section>
    );
}