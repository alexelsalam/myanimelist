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
    <section>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={32}
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
            <div className="flex justify-around py-3 ml-3">
              <div className="text-white w-96 pt-7 text-shadow-lg">
                <h2 className="pb-3 text-xl">
                  {anime.title_english}
                </h2>
                <div className="max-h-[100px] overflow-hidden pb-3">
                  <p className="">{anime.synopsis}</p>
                </div>
                <Button
                  as={Link}
                  size="sm"
                  className=" bg-gradient-to-r from-primary to-[#328AB3]"
                  href={`anime/${anime.mal_id}`}
                >
                  Detail anime
                </Button>
              </div>
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={150}
                height={150}
                className="mr-3 rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
