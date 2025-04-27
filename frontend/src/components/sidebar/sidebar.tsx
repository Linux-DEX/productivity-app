"use client";

import { useContext, ReactNode, useEffect, useState } from "react";
import { SidebarContext } from "@/context/sidebarContext";
import { useTheme } from "next-themes";
import ThemeSwitch from "./themeButton";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar must be used within a SidebarContextProvider");
  }

  const { expanded, setExpanded } = context;

  return (
    <aside className="h-screen">
      <nav className="h-full inline-flex flex-col bg-background border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 "
          >
            {expanded ? <span>close</span> : <span>open</span>}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Linux-DEX</h4>
              <span className="text-xs text-gray-600">linuxdex@linux.com</span>
            </div>
            <div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
