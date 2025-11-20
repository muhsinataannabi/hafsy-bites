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

        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 flex-col rounded-lg hover:scale-[1.085] border-t">
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
         <h3 className="text-[15px] font-semibold mt-2 text-center">{title}</h3>
       
         
         <p className="text-[10px] text-center mb-2">{desc}</p>
          <h3 className="text-[8px] mb-1 text-center">⭐⭐⭐⭐⭐</h3>
     <button className="bg-orange-500 rounded-2xl px-3 text-white mt-2 text-md mb-2">+Add</button>
        </motion.div>
    </div>
  )
}

