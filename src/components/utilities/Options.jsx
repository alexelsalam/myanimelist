"use client";

import { useState } from "react";
import YoutubePlayer from "./YoutubePlayer";
import { motion } from "framer-motion";

const Options = ({ sinopsis, youtubeId }) => {
  const tabs = ["Sinopsis", "Trailer"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [option, setOption] = useState(true);

  return (
    <>
      <section className="flex justify-center gap-5 mt-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs py-2 overflow-hidden text-center border rounded-md cursor-pointer border-slate-500"
            onClick={() => [setSelectedTab(tab), setOption(!option)]}
          >
            <motion.div
              animate={{
                color: tab === selectedTab ? "#fff" : "#000",
              }}
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              {tab}
            </motion.div>
            {tab === selectedTab && (
              <div className="absolute top-0 left-0 w-full h-full rounded-md bg-primary -z-10"></div>
            )}
          </div>
        ))}
      </section>
      {option ? (
        <div className="w-auto h-auto m-5 rounded-md shadow-md">
          <p className="p-2 font-medium">{sinopsis}</p>
        </div>
      ) : (
        <div>
          <YoutubePlayer youtubeId={youtubeId} />
        </div>
      )}
    </>
  );
};

export default Options;
