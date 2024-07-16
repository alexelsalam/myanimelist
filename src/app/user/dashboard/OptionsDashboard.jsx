"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Wishlist from "./Wishlist";
import Comments from "./Comments";

const OptionsDashboard = ({ wishlists, comments }) => {
  const tabs = ["Wishlist", "Comments"];
  const [selectedOption, setSelectedOption] = useState(tabs[0]);
  const [option, setOption] = useState(true);

  return (
    <>
      <div className="border-b-1 border-slate-300">
        <ul className="flex justify-center gap-10 my-4">
          {tabs.map((tab) => (
            <li
              key={tab}
              className="relative cursor-pointer"
              onClick={() => [
                setSelectedOption(tab),
                setOption(!option),
              ]}
            >
              <p className="items-center font-bold text-md">{tab}</p>
              {tab === selectedOption && (
                <motion.div
                  layoutId="underline"
                  className="underline"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {option ? (
        <Wishlist wishlists={wishlists} />
      ) : (
        <Comments comments={comments} />
      )}
    </>
  );
};

export default OptionsDashboard;
