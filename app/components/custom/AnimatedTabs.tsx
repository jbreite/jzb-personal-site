"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AnimatedTabs({
  tabs,
  activeTab,
  onTabChange,
}: AnimatedTabsProps) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <motion.ul
          layout
          className={clsx(
            "relative cursor-pointer px-2 py-1 font-open-runde outline-none transition-colors",
            activeTab === tab ? "text-black" : "text-[#959698]"
          )}
          tabIndex={0}
          key={tab}
          onFocus={() => onTabChange(tab)}
          onMouseOver={() => onTabChange(tab)}
          onMouseLeave={() => onTabChange(tab)}
        >
          {activeTab === tab ? (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-lg bg-[#F6F7F9]"
            />
          ) : null}
          <span className="relative text-inherit">{tab}</span>
        </motion.ul>
      ))}
    </div>
  );
}
