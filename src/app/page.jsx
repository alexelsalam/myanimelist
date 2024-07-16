import Hero from "@/components/Anime/Hero";
import { getAnime, getNestedAnime } from "../libs/api-libs";
import TopAnime from "@/components/Anime/TopAnime";
import RecommendAnime from "@/components/Anime/RecommendAnime";
import Trailers from "@/components/Anime/Trailers";
import Footer from "@/components/Footer/Footer";

export default async function Page() {
  const nowAnime = await getAnime("seasons/now", "limit=5");

  return (
    <>
      <Hero api={nowAnime} />
      <RecommendAnime />
      <Trailers />
      <TopAnime />
      <Footer />
    </>
  );
}
