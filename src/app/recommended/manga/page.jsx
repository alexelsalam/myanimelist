import { getNestedAnime } from "@/libs/api-libs";
import dynamic from "next/dynamic";

//agar Component AnimePages bisa berjalan di ssr
const AnimePages = dynamic(
  () => import("@/components/Anime/AnimePages"),
  { ssr: false }
);

export const metadata = {
  title: " Rekomendasi Manga",
};

export default async function Page() {
  let recommended = await getNestedAnime(
    "recommendations/manga",
    "entry"
  );

  recommended = { data: recommended };

  return (
    <>
      <section>
        <div className="my-4 rounded-r-full w-52 bg-primary">
          <h2 className="text-xl font-semibold text-white">
            Recommendations Manga
          </h2>
        </div>
        <AnimePages api={recommended} />
      </section>
    </>
  );
}
