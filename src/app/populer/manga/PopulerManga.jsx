"use client";

import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnime } from "@/libs/api-libs";
import AnimePages from "@/components/Anime/AnimePages";

export default function PopulerManga() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const data = await getAnime("top/manga", `page=${page}`);
      setTopAnime(data);
    } catch (error) {
      alert(`Error fetching data:${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <section>
        <div className="w-48 my-4 rounded-r-full bg-primary">
          <h2 className="text-xl font-semibold text-white">
            Populer Anime
          </h2>
        </div>
        <AnimePages api={topAnime} isLoading={isLoading} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </>
  );
}
