"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = ({ tab, title, onClick }) => {
  const tabs = tab;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <header className="flex gap-5 mb-2 ">
      <div className="mx-4 text-xl font-semibold ">
        <h2>{title}</h2>
      </div>
      <ul className="flex gap-4 py-1 border rounded-full ">
        {tabs.map((tab) => (
          <li
            key={tab}
            className="relative cursor-pointer"
            onClick={() => [onClick(tab), setSelectedTab(tab)]}
          >
            <motion.span
              className="pl-3 pr-4 text-center text-white"
              animate={{
                color: tab === selectedTab ? "#fff" : "#000",
              }}
              transition={{
                type: "spring",
                bounce: 0.1,
                delay: 0.1,
              }}
            >
              {tab}
            </motion.span>
            {tab === selectedTab && (
              <motion.div className="tab" layoutId="tab"></motion.div>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
