"use client";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
export default function Hero() {
  return (
    <motion.section 
   initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}} 
    
    className="lg:flex w-full min-h-screen px-5 pt-32 justify-start lg:gap-10">
      <header>
        <h2
        className="font-semibold text-3xl font-[poppins] leading-normal lg:text-6xl">
          Enjoy <span className="text-orange-500">Delicious Foods </span>that speaks louder than Words.
        </h2>
        <p className="text-xs font-sans lg:text-md">
          Delicious food not only satisfies your hunger but also boosts your mood, strengthens social bonds, and creates lasting memories.
        </p>
        <div className="flex items-center mt-2 transition duration-300">
          <button className="bg-orange-500 px-5 py-2 rounded-full hover:bg-orange-600 shadow-lg font-sans hover:shadow-2xl text-white font-semibold text-lg lg:text-2xl mt-2 flex gap-2">
            Place order <ShoppingCart />
          </button>
        </div>
      </header>
      <aside>
        <div className="w-64 h-64 bg-orange-500 rounded-full mt-10 lg:mt-0 relative lg:w-96 lg:h-96">
          <img src="food.png"
          alt="food image"
          width={200}
          className="absolute top-0 left-0 lg:w-400"
          />
        </div>
      </aside>
    </motion.section>
  );
}

