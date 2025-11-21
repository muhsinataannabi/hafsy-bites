"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function SpecialOrders(){
  return(
    <div
    className="w-full pt-10  border-t mt-8 px-5">
      <motion.h4 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
        
      className="font-[poppins] text-2xl font-semibold mb-10 text-center lg:text-xl">Our <span className="text-orange-500">special</span> orders</motion.h4>
      <div className="flex gap-10 flex-wrap justify-center">
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}

       
        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 flex-col rounded-lg hover:scale-[1.085] border-t">
          <div className="flex justify-end">
          <img src="/food1.png"
          alt="meat suya"
          width={100}
          height={100}
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className="-mt-10 -mr-6"
          />
          </div>
         <h3 className="text-[15px] font-semibold mt-2 text-center">Meat Suya</h3>
       
         
         <p className="text-[10px] text-center mb-2">with salad</p>
          <h3 className="text-[8px] mb-1 text-center">⭐⭐⭐⭐⭐</h3>
     <button className="bg-orange-500 rounded-2xl px-3 text-white mt-2 text-md mb-2">+Add</button>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}

        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 flex-col rounded-lg hover:scale-[1.085] border-t">
          <div className="flex justify-end">
          <img src="/food2.png"
          alt="fride rice"
          width={100}
          height={100}
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className="-mt-10 -mr-6"
          />
          </div>
          <h3 className="text-[15px] font-semibold mt-2 text-center">Fride Rice</h3>
         
         <p className="text-[10px] text-center mb-2">with chicken</p>
          <h3 className="text-[8px] mb-1 text-center">⭐⭐⭐⭐⭐</h3>
        <button className="bg-orange-500 rounded-2xl px-3 text-white text-md mt-2 mb-2">+Add</button> 
        </motion.div>
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
 
        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 flex-col rounded-lg hover:scale-[1.085] border-t">
          <div className="flex justify-end">
          <img src="/food3.png"
          alt="chicken"
          width={100}
          height={100}
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className="-mt-10 -mr-6"
          />
          </div>
          <h3 className="text-[15px] font-semibold mt-2 text-center">Chicken</h3>
         
         <p className="text-[10px] text-center mb-2">with egg</p>
          <h3 className="text-[8px] mb-1 text-center">⭐⭐⭐⭐⭐</h3>
           <button className="bg-orange-500 rounded-2xl px-3 text-white text-md mt-2 mb-2">+Add</button>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.8, ease: "easeOut"}}
        viewport={{once:false, amount:0.3}}
    
        className="lg:w-64 w-[40%] bg-white shadow-lg flex px-2 mb-5 flex-col  rounded-lg hover:scale-[1.085] border-t">
          <div className="flex justify-end">
          <img src="/food4.png"
          alt="pizza"
          width={100}
          height={100}
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className="-mt-10 -mr-6"
          />
          </div>
          <h3 className="text-[15px] font-semibold mt-2 text-center">Pizza</h3>
         
         <p className="text-[10px] text-center mb-2">with tomatoes</p>
          <h3 className="text-[8px] mb-1 text-center">⭐⭐⭐⭐⭐</h3>
          <button className="bg-orange-500 rounded-2xl px-3 mt-2 text-white text-md mb-2">+Add</button>
        </motion.div>
        <div>
        <h2 className="font-semibold font-[poppins] text-md lg:text-lg">Every Meal is a Happy Meal</h2>
        <pre className="text-xs mb-5 lg:text-sm">"First,we eat.Then,we do everything else."<br />     
        --MFK.Fisher
        </pre>
        </div>
      </div>
    </div>
    );
}