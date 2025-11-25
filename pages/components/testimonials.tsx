"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Testimonials(){
  return(
    <motion.div
   initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}} 
   
    className="border-t py-5">
            <h1 className="text-center text-2xl font-semibold text-orange-500 lg:text-lg">Testimonials</h1>
    <section className="mt-8 px-3 bg-orange-100 flex w-full h-32  px-5 py-3 gap-5 mb-10 lg:h-48">
      <img src="/chief.png"
      alt="chief-cook"
      width={100}
      height={100}
      className="-mt-8 lg:w-200"
      />
      
      <div className="flex flex-col text-right">
        <h3 className="font-semibold text-[10px] mb-2 text-orange-500 lg:text-lg">What Our Customers Say About Us</h3>
        <p className="italic text-[8px] text-right font-[poppins] lg:text-md">“The service was prompt and the food was exactly what I needed.The food was flavourful,with a perfect balance of ingredients,fine combination of fresh ingredients and skilled preparation made for a memorable meal.the staff here truly cares about their guests.”</p>
        <div className="flex gap-5 mt-2 text-left justify-end lg:gap-10 lg:mt-5">
          <pre className="text-[8px] lg:text-sm">
          — Khalid Abbas,
          Food Analyst <br />
          
          ⭐⭐⭐⭐⭐
          </pre>
<img src="/profile.png"
       alt="profile"
       width={18}
       height={18}
       className="mb-1 lg:w-30 lg:mb-3"
       />
        </div>
      </div>
    </section>
    <hr />
    </motion.div>
    );
}