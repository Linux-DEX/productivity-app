"use client";

import { useContext, ReactNode } from "react";
import { SidebarContext } from "@/context/sidebarContext";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
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
      <nav
        className="h-full inline-flex flex-col shadow-sm"
        style={{
          backgroundColor: "var(--color-surface)",
          borderRight: "1px solid var(--color-border)",
        }}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <p
            className={`text-xl font-bold text-primary-text overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            DEX
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            {expanded ? (
              <ChevronsLeft className="transition-transform duration-300 hover:scale-125" />
            ) : (
              <ChevronsRight className="transition-transform duration-300 hover:scale-125" />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div
          className="flex items-center p-3 border-t"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4 text-primary-text">
              <h4 className="font-semibold">Linux-DEX</h4>
              <span
                className="text-xs"
                style={{ color: "var(--color-secondary-text)" }}
              >
                linuxdex@linux.com
              </span>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
