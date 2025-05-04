"use client";

import React, { useState } from "react";
import TodoItem from "@/components/todo/TodoItem";
import { Plus } from "lucide-react";
import CreateTodo from "@/components/todo/CreateTodo";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="grid h-screen max-w-5xl grid-rows-[auto_1fr_auto] bg-background mx-auto">
      <div className="h-28 flex justify-between items-center p-8">
        <div>
          <h2 className="text-2xl font-semibold">Good Morning, Linux-DEX</h2>
          <h4 className="text-sm text-gray-500">Today, Sat 03 May 2025</h4>
        </div>

        <div className="relative w-40">
          <select
            id="dropdown"
            className="w-full appearance-none p-2 pr-10 pl-4 rounded bg-accent text-primary outline-none"
          >
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="All">All</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-full">
        <TodoItem name="Team Sync" fromTime="9:00 AM" toTime="10:00 AM" />
        <TodoItem
          name="Design Review"
          fromTime="11:00 AM"
          toTime="11:30 AM"
          checked
        />
      </div>

      <div className="h-20 flex items-center justify-end pr-8 relative">
        <div className="relative group">
          <button
            className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center transition"
            onClick={() => setShowPopup(true)}
          >
            <Plus />
          </button>

          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-accent text-primary text-sm w-32 text-center py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
            Create Todo
          </span>
        </div>
      </div>

      {showPopup && <CreateTodo onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Page;
