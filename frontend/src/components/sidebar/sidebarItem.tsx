"use client";

import { SidebarContext } from "@/context/sidebarContext";
import React, { useContext } from "react";

interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
  alert?: boolean;
}

export default function SidebarItem({
  text,
  icon,
  active = false,
  alert = false,
}: SidebarItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarItem must be used within a SidebarContextProvider");
  }

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active ? "bg-accent/10 text-accent" : "hover:bg-accent/5 text-primary"
        }
      `}
      style={{
        backgroundColor: active ? "var(--color-accent-hover)" : undefined,
        color: active ? "var(--color-primary-text)" : undefined,
      }}
    >
      <span>{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-accent ${
            expanded ? "" : "top-2"
          }`}
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            text-sm invisible opacity-0 -translate-x-3
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
          style={{
            backgroundColor: "var(--color-surface)",
            color: "var(--color-primary-text)",
            boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
          }}
        >
          {text}
        </div>
      )}
    </li>
  );
}
