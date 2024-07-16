import { getAnime } from "@/libs/api-libs";
import AnimeList from "@/components/Anime/AnimeScroll";

export async function generateMetadata({ params }) {
  return {
    title: params,
  };
}

export default async function Page({ params }) {
  const { keyword } = params;
  const decodeURl = decodeURI(keyword);
  const searchAnime = await getAnime("anime", `q=${decodeURl}`);
  return (
    <>
      <section>
        <h2 className="p-4 text-lg text-white">{`Search anime ${decodeURl}`}</h2>
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
