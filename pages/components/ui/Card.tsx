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
        <div className="flex gap-5 flex-wrap justify-center">
         <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}

        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 gap-10 rounded-lg hover:scale-[1.085] flex-col border-t">
          <div className="flex justify-end">
          <Image
            src={img ?? "/food1.png"}
            alt="meat suya"
            width={100}
            height={100}
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            className="-mt-10 -mr-6"
          />
          </div>
         <h3 className="text-[15px] font-semibold text-center">{title}</h3>
         <p className="text-[10px] text-center">{desc}</p>
          <h3 className="text-[8px] text-center">⭐⭐⭐⭐⭐</h3>
     <button className="bg-orange-500 rounded-2xl px-3 text-white text-md">+Add</button>
        </motion.div>
        </div>
  );
}

