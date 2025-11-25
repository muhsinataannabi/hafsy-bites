"use client"; 
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

interface CardProps {
  title?: string;
  img?:StaticImageData | string;
  desc?: string;
}


export default function Card({title,img,desc}:CardProps) {
return (
        <div>
         <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}

        className="lg:w-64 w-32 bg-white shadow-lg flex px-2 rounded-lg flex-col border-t mb-8">
          <div className="flex justify-end">
          <Image
            src={img ?? "/food1.png"}
            alt="meat suya"
            width={100}
            height={100}
            className="-mt-8 -mr-6"
          />
          </div>
         <h3 className="text-[15px] font-semibold text-center">{title}</h3>
         <p className="text-[10px] text-center">{desc}</p>
          <h3 className="text-[8px] text-center mb-2">⭐⭐⭐⭐⭐</h3>
     <button className="bg-orange-500 rounded-2xl px-3 text-white text-md mb-2">+Add</button>
        </motion.div>
        </div>
  );
}

