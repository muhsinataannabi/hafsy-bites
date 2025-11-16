"use client";
import { motion } from "framer-motion";
export default function NewsLetter(){
  return(
    <motion.fieldset 
    initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
    
    className="flex flex-col bg-white rounded-lg shadow-md  border px-5 py-3 mb-20 m-5 transition duration-500">
      <legend className="font-semibold text-center text-orange-500 text-lg">Subscribe to our News Letter</legend>
      <label className="mb-5">Name: </label>
      <input
      type="text"
      placeholder="enter your name"
      className="focus:outline-none p-2 rounded-lg border mb-5"
      />
      
      <label className="mb-5">Email:</label>
      <input
      type="email"
      placeholder="enter your email"
      className="focus:outline-none p-2 rounded-lg border mb-5"
      />
      <button className="bg-orange-500 rounded-lg px-5 py-1 text-white font-semibold hover:bg-orange-600 hover:shadow-md">Subscribe</button>
    </motion.fieldset>
    );
}