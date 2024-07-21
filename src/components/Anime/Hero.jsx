"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = ({ api }) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={32}
        className="h-44 sm:h-56 lg:h-64"
      >
        {api.data?.map((anime, index) => (
          <SwiperSlide key={index} className="relative">
            <div
              style={{
                backgroundImage: `url(${anime.images.webp.image_url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            >
              <div className="w-full h-full bg-white/20 backdrop-blur-sm"></div>
            </div>
            <div className="flex justify-around ml-3">
              <div className="text-white w-96 pt-7 text-shadow-lg">
                <h2 className="text-lg sm:text-xl lg:text-2xl line-clamp-1">
                  {anime.title_english}
                </h2>

                <p className="text-xs sm:text-base line-clamp-4">
                  {anime.synopsis}
                </p>

                <Button
                  as={Link}
                  size="sm"
                  className=" bg-gradient-to-r from-primary to-[#328AB3] mt-1 sm:mt-3 lg:mt-5"
                  href={`anime/${anime.mal_id}`}
                >
                  Detail anime
                </Button>
              </div>
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={100}
                height={40}
                className="h-[9.25rem] sm:h-[10.7rem] sm:w-[7.5rem] lg:h-52 lg:w-36 mr-3 rounded-md mt-3"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
