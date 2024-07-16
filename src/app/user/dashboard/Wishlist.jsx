"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter } from "@nextui-org/react";

export default function Wishlist({ wishlists }) {
  return (
    <section className="w-full px-4 mt-4 animate-fadeInRight">
      <div className="flex flex-wrap gap-5 my-5">
        {wishlists.map((wishlist, index) => {
          return (
            <Card
              as={Link}
              href={`/anime/${wishlist.anime_mal_id}`}
              key={index}
              className="max-w-[157px] relative rounded-lg"
            >
              <Image
                src={wishlist.anime_image}
                alt="..."
                width={250}
                height={250}
                className="max-h-[220px]"
              />
              <CardFooter className="">
                <div className="line-clamp-3">
                  <p>{wishlist.anime_title}</p>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
