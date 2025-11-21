"use client";
import Image from "next/image";
import Card from "./ui/Card";

export default function SpecialOrders() {
  const specialOrders = [
    {
      id: 1,
      title: "Meat Suya",
      img: "/image/food1.png",
      desc: "with salad",
    },
    {
      id: 2,
      title: "Fride Rice",
      img: "/image/food2.png",
      desc: "with chicken",
    },
    {
      id: 3,
      title: "Chicken",
      img: "/image/food3.png",
      desc: "with egg",
    },
    {
      id: 4,
      title: "Pizza",
      img: "/image/food4.png",
      desc: "with tomatoes",
    },
  ];

  return (
    <div>
      <div>
        {specialOrders.map((order, index) => (
          <Card
            key={index}
            title={order.title}
            img={order.img}
            desc={order.desc}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <div>
          <h2 className="font-semibold font-[poppins] text-md lg:text-lg">
            Every Meal is a Happy Meal
          </h2>
          <pre className="text-xs mb-5 lg:text-sm">
            "First,we eat.Then,we do everything else."
            <br />
            --MFK.Fisher
          </pre>
        </div>
      </div>
    </div>
  );
}