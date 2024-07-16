"use client";

import { useEffect, useState } from "react";
import React from "react";
import { getAnime } from "@/libs/api-libs";
import { LayoutGroup } from "framer-motion";
import Header from "./Header";
import LatestTrailers from "./LatestTrailers";

const Trailers = () => {
  const [trailer, setTrailer] = useState([]);
  const [apiTrailer, setApiTrailer] = useState("season");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiEndPoint =
        apiTrailer === "season" ? "seasons/now" : "top/anime";
      const response = await getAnime(apiEndPoint, "limit=10");

      setTrailer(response);
    } catch (err) {
      alert(`Error fetching data:${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiTrailer]);

  const trailerHandler = (tab) => {
    setApiTrailer(tab.toLowerCase());
  };

  return (
    <>
      <section className="m-3" aria-label="Latest Trailer">
        <LayoutGroup id="2">
          <Header
            onClick={trailerHandler}
            title={"Latest Trailer"}
            tab={["Season", "Top"]}
          />
          <LatestTrailers api={trailer} isLoading={isLoading} />
        </LayoutGroup>
      </section>
    </>
  );
};

export default Trailers;
