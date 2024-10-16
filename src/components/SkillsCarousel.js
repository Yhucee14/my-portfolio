import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Skills } from "./constants";

const SkillsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 7000, // Controls the speed of the animation (ms)
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Infinite autoplay
    cssEase: "linear", // Smooth linear animation
    arrows: false, // Hide navigation arrows
    pauseOnHover: true,
  };

  return (
    <div className=" w-full px-4 shadow-sm shadow-white mt-4 rounded-lg mx-auto py-4 overflow-hidden">
      <Slider {...settings}>
        {Skills.map((skill, index) => (
          <div key={index} className="sm:px-4  py-3">
            <div className="bg-[#00151cb5] text-white flex flex-row justify-center xx:gap-1 sm:gap-5  sm:px-2 text-center py-4 rounded-lg ">
              <div>
                <Image
                  src={skill.img}
                  alt="img"
                  className="w-10 h-10 sm:w-16 sm:h-16  rounded-full"
                />
              </div>

              <div className="flex sm:text-center sm:justify-center px-1 items-center ">
                <p className="sm:text-2xl  sm:font-bold">{skill.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsCarousel;
