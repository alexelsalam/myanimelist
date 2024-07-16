"use client";
import { LayoutGroup } from "framer-motion";
import Header from "./Header";
import AnimeScroll from "./AnimeScroll";
import { useEffect, useState } from "react";
import { getAnime } from "@/libs/api-libs";

const TopAnime = () => {
  const [topList, setTopList] = useState([]);
  const [top, setTop] = useState("anime");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getAnime(`top/${top}`, "limit=10");

      setTopList(response);
    } catch (err) {
      alert(`Error fetching data:${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top]);

  const topHandler = (tab) => {
    setTop(tab.toLowerCase());
  };

  return (
    <section className="m-3" aria-label="Top Anime">
      <LayoutGroup id="3">
        <Header
          onClick={topHandler}
          tab={["Anime", "Manga"]}
          title={"Top List"}
        />
        <AnimeScroll
          api={topList}
          isLoading={isLoading}
          href={`/populer/${top}`}
        />
      </LayoutGroup>
    </section>
  );
};

export default TopAnime;
