import { Card } from "@nextui-org/react";
import Link from "next/link";
import { LoadingImg } from "./Loading";
import Image from "next/image";

export default function AnimeScroll({ api, isLoading, href }) {
  return (
    <>
      <div className="flex px-4 overflow-x-auto">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <LoadingImg key={index} />
            ))
          : api.data?.map((anime, index) => {
              return (
                <div key={index} className="flex-none mb-4 mr-4">
                  <Card as={Link} href={`anime/${anime.mal_id}`}>
                    <Image
                      src={anime.images?.webp?.image_url}
                      alt="..."
                      width={350}
                      height={350}
                      className="w-full rounded-md h-36 md:h-60 lg:h-[-1rem]"
                    />
                  </Card>
                  <div className="p-1 text-center max-w-[170px] text-wrap">
                    <p className="">{anime.title}</p>
                  </div>
                </div>
              );
            })}

        <div className="flex items-center w-auto">
          <Link href={href} className="font-bold hover:text-primary">
            Lihat <br />
            Selangkapnya
          </Link>
        </div>
      </div>
    </>
  );
}
