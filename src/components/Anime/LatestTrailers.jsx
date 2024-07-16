import { Card, CardFooter } from "@nextui-org/react";
import { LoadingVideo } from "./Loading";
import Image from "next/image";
import { useState } from "react";
import { PlayCircle } from "@phosphor-icons/react";

const LatestTrailers = ({ api, isLoading }) => {
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState("");

  return (
    <>
      <div className="flex px-4 overflow-x-auto bg-gradient-to-r from-primary to-[#328AB3] border overflow-hidden rounded-md">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <LoadingVideo key={index} />
            ))
          : api?.data?.map((anime, index) => {
              return (
                <div
                  key={index}
                  className="flex-none my-4 mr-4 max-w-[220px]"
                  onClick={() => setId(anime.trailer.youtube_id)}
                >
                  <Card className="h-[150px] w-[220px] overflow-hidden cursor-pointer">
                    <div onClick={() => setDisplay(true)}>
                      <span className="absolute z-[2] text-white top-[3.5rem] left-[5.3rem] bg-black/50 rounded-full">
                        <PlayCircle size={50} />
                      </span>
                      <Image
                        src={anime.images?.webp?.image_url}
                        alt="..."
                        width={350}
                        height={350}
                      />
                    </div>
                  </Card>
                  <div className="p-1 text-center max-w-[300px] text-wrap">
                    <h3>{anime.title}</h3>
                  </div>
                </div>
              );
            })}
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-10  w-full h-full cursor-pointer bg-black/50 ${
          display ? "block" : "hidden"
        }`}
        onClick={() => [setDisplay(false), setId("")]}
      >
        <div className="max-w-[900px] mx-auto mt-32">
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
            className="w-full h-[350px]"
          />
        </div>
      </div>
    </>
  );
};

export default LatestTrailers;
