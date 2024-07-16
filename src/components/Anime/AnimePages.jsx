"use client";
import { Card, CardFooter } from "@nextui-org/react";
import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { LoadingImg } from "./Loading";

export default function AnimePages({ api, isLoading }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <LoadingImg key={index} />
            ))
          : api.data?.map((anime, index) => {
              return (
                <Card
                  as={Link}
                  href={`/anime/${anime.mal_id}`}
                  key={index}
                  className="max-w-[157px] relative rounded-lg"
                >
                  <div className="absolute top-0 right-0 z-10 p-1 text-xs text-center rounded-md bg-primary text-slate-200">
                    {anime.status ? (
                      <span>{anime.status}</span>
                    ) : (
                      <span>Currently</span>
                    )}
                  </div>
                  <Image
                    src={anime.images.webp.image_url}
                    alt="..."
                    width={250}
                    height={250}
                    className="max-h-[220px]"
                  />
                  <CardFooter>
                    <div className="line-clamp-3">
                      <p>{anime.title}</p>
                    </div>
                    <div className="absolute bottom-0 flex right-1">
                      <Star
                        size={19}
                        className="pt-[0.2rem] text-primary"
                      />
                      {anime.score ? (
                        <span>{anime.score}</span>
                      ) : (
                        <span>{(Math.random() * 10).toFixed(1)}</span>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
      </div>
    </>
  );
}
