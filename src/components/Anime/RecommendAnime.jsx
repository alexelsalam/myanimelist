"use client";
import { LayoutGroup } from "framer-motion";
import Header from "./Header";
import AnimeScroll from "./AnimeScroll";
import { useEffect, useState } from "react";
import { getNestedAnime, reproduce } from "@/libs/api-libs";

const RecommendAnime = () => {
  const [recommendedAnime, setRecommendedAnime] = useState([]);
  const [recommendAnime, setRecommendAnime] = useState("anime");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      let response = await getNestedAnime(
        `recommendations/${recommendAnime}`,
        "entry"
      );

      response = reproduce(response, 20);
      setRecommendedAnime(response);
    } catch (err) {
      alert(`Error fetching data:${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommendAnime]);

  const recommendHandler = (tab) => {
    setRecommendAnime(tab.toLowerCase());
  };
  return (
    <section className="m-3" aria-label="Recommeded Anime">
      <LayoutGroup id="1">
        <Header
          onClick={recommendHandler}
          tab={["Anime", "Manga"]}
          title={"Recommended"}
        />
        <AnimeScroll
          api={recommendedAnime}
          isLoading={isLoading}
          href={`/recommended/${recommendAnime}`}
        />
      </LayoutGroup>
    </section>
  );
};

export default RecommendAnime;
