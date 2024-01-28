import { useState, useEffect } from "react";
import { star } from "../assets/icons";
import { products } from "../assets/constants";
import { shoe10, shoe11, shoe12, shoe7, shoe9 } from "../assets/images";

const PopularProductCard = ({ imgURL, name, price, isLast }) => {
  const carrousel = [shoe7, shoe9, shoe10, shoe11, shoe12];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isLast) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isLast]);

  const displayedImage = isLast ? carrousel[currentIndex] : imgURL;

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={displayedImage} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-gray-900 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
