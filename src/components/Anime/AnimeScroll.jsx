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
                <div key={index} className="flex-none mr-4">
                  <div
                    href={`anime/${anime.mal_id}`}
                    className="w-32 h-auto rounded-md sm:w-36 lg:w-40"
                  >
                    <Image
                      src={anime.images?.webp?.image_url}
                      alt="..."
                      width={150}
                      height={150}
                      className="w-full rounded-md h-44 sm:h-52 sm:w-36 lg:w-40 lg:h-[225px]"
                    />
                  </div>
                  <div className="w-32 text-center sm:w-36 lg:w-40 text-wrap">
                    <p className="text-sm sm:text-base lg:text-lg">
                      {anime.title}
                    </p>
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
