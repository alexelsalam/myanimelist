import CommentBox from "@/components/DetailAnime/CommentBox";
import CommentInput from "@/components/DetailAnime/CommentInput";
import Wishlist from "@/components/DetailAnime/Wishlist";
import Options from "@/components/utilities/Options";
import { getAnime } from "@/libs/api-libs";
import { getAuthSession } from "@/libs/auth-libs";
import Image from "next/image";
import prisma from "@/libs/prisma";

export async function generateMetadata({ params: { id } }) {
  const anime = await getAnime(`anime/${id}`);
  const title = anime.data.title_english;

  return {
    title,
  };
}

export default async function Page({ params: { id } }) {
  const anime = await getAnime(`anime/${id}`);
  const user = await getAuthSession();

  const collection = await prisma.wishlist.findFirst({
    where: { user_mail: user?.email, anime_mal_id: id },
  });

  return (
    <section className="p-4">
      <div className="w-auto h-auto rounded-md mb-10 bg-slate-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] relative">
        <div className="absolute -right-2 -top-1">
          <Wishlist
            anime_mal_id={id}
            user_mail={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
            collection={collection}
          />
        </div>
        <div>
          <h1 className="p-4 text-2xl font-extrabold">
            {anime.data.title} ( {anime.data.year} )
          </h1>
        </div>
        <div className=" md:flex md:gap-5 md:p-3">
          <div className="mx-5 md:mx-0 md:py-6">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.images.jpg.image_url}
              height={150}
              width={150}
              className="w-96 rounded-md h-[28rem] md:h-64 md:w-52 lg:h-[-1rem]"
            />
          </div>
          <ul className="w-full py-4">
            <li className="rowli">
              <b>Genre:</b>
              <span className="colspan">
                {anime.data.genres.map((genre, index) => {
                  return (
                    <span key={index}>
                      <a href="#">{genre.name}, </a>
                    </span>
                  );
                })}
              </span>
            </li>
            <li className="rowli">
              <b>Type:</b>
              <span className="colspan">
                <a href="#">{anime.data.type}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Episode:</b>
              <span className="colspan">
                <a href="#">{anime.data.episodes}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Status:</b>
              <span className="colspan">
                <a href="#">{anime.data.status}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Aired:</b>
              <span className="colspan">
                <a href="#">{anime.data.aired.from}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Priemiered:</b>
              <span className="colspan">
                <a href="#">
                  {anime.data.season} {anime.data.year}
                </a>
              </span>
            </li>
            <li className="rowli">
              <b>Broadcast:</b>
              <span className="colspan">
                <a href="#">
                  {anime.data.broadcast.day}{" "}
                  {anime.data.broadcast.time}{" "}
                  {anime.data.broadcast.timezone}
                </a>
              </span>
            </li>
            <li className="rowli">
              <b>Producers:</b>
              <span className="colspan">
                {anime.data.producers.map((producer, index) => {
                  return (
                    <span key={index}>
                      <a href="#">{producer.name}, </a>
                    </span>
                  );
                })}
              </span>
            </li>

            <li className="rowli">
              <b>Studios:</b>
              <span className="colspan">
                {anime.data.studios.map((studio, index) => {
                  return (
                    <span key={index}>
                      <a href="#">{studio.name}, </a>
                    </span>
                  );
                })}
              </span>
            </li>
            <li className="rowli">
              <b>Source:</b>
              <span className="colspan">
                <a href="#">{anime.data.source}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Duration:</b>
              <span className="colspan">
                <a href="#">{anime.data.duration}</a>
              </span>
            </li>
            <li className="rowli">
              <b>Rating:</b>
              <span className="colspan">
                <a href="#">{anime.data.rating}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Options
        sinopsis={anime.data.synopsis}
        youtubeId={anime.data.trailer.youtube_id}
      />

      {user && (
        <CommentInput
          anime_mal_id={id}
          user_email={user?.email}
          anime_title={anime.data.title}
          username={user?.name}
          image={user?.image}
        />
      )}

      <CommentBox anime_mal_id={id} image={user?.image} />
    </section>
  );
}
