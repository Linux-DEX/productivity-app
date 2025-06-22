"use client";

import React, { useEffect, useRef, useState } from "react";
import Calendar from "../calender/calender";
import { CalendarDays, Clock, ChevronLeft } from "lucide-react";
import { create } from "@/api/todo";
import { CreateTodoParams } from "@/types/todo";

interface CreateTodoProps {
  onClose: () => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<"default" | "calendar" | "time">(
    "default"
  );

  const [createTask, setCreateTask] = useState<CreateTodoParams>({
    task: "",
    list: "",
    date: "",
    fromTime: "",
    toTime: "",
    priority: "",
    taskDesc: "",
  });

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCreateTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = async () => {
    try {
      console.log("Create Task:", createTask);
      const response = await create(createTask);
      console.log('Task created: ', response);
      onClose();
    } catch (error) {
      console.log('Failed to create task:', error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        ref={popupRef}
        className="bg-surface p-6 rounded-xl shadow-xl w-[90%] max-w-md relative space-y-4"
      >
        <input
          type="text"
          name="task"
          placeholder="Create new Task"
          className="w-full border p-2 rounded bg-muted text-primary"
          value={createTask.task}
          onChange={handleInput}
        />

        <div className="flex justify-between gap-2">
          <div className="relative flex-1">
            <select
              name="list"
              className="w-full appearance-none p-2 pr-10 pl-4 rounded bg-accent text-primary outline-none"
              value={createTask.list}
              onChange={handleInput}
            >
              <option value="" disabled>
                No List
              </option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="List of book">List of book</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <button
            className="px-3 py-2 rounded bg-blue-500 text-white"
            onClick={() =>
              setViewMode(viewMode === "calendar" ? "default" : "calendar")
            }
          >
            {viewMode === "calendar" ? <ChevronLeft /> : <CalendarDays />}
          </button>

          <button
            className="px-3 py-2 rounded bg-blue-500 text-white"
            onClick={() =>
              setViewMode(viewMode === "time" ? "default" : "time")
            }
          >
            {viewMode === "time" ? <ChevronLeft /> : <Clock />}
          </button>
        </div>

        {viewMode === "calendar" && (
          <div>
            <Calendar
              onDateSelect={(date) => {
                setCreateTask((prev) => ({ ...prev, date }));
                setViewMode("default");
              }}
            />
            {createTask.date && (
              <p className="text-xs mt-1 text-primary">
                Selected: <strong>{createTask.date}</strong>
              </p>
            )}
          </div>
        )}

        {viewMode === "time" && (
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-sm text-gray-600">From</label>
              <input
                type="time"
                name="fromTime"
                value={createTask.fromTime}
                onChange={handleInput}
                className="w-full border p-2 rounded bg-muted text-primary"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-600">To</label>
              <input
                type="time"
                name="toTime"
                value={createTask.toTime}
                onChange={handleInput}
                className="w-full border p-2 rounded bg-muted text-primary"
              />
            </div>
          </div>
        )}

        {viewMode === "default" && (
          <textarea
            name="taskDesc"
            placeholder="Add notes"
            className="w-full h-32 border p-2 rounded bg-muted text-primary"
            value={createTask.taskDesc}
            onChange={handleInput}
          />
        )}

        <div className="relative flex-1">
          <select
            name="priority"
            className="w-full appearance-none p-2 pr-10 pl-4 rounded bg-accent text-primary outline-none"
            value={createTask.priority}
            onChange={handleInput}
          >
            <option value="" disabled>
              Add to priority
            </option>
            <option value="P1">Priority 1</option>
            <option value="P2">Priority 2</option>
            <option value="P3">Priority 3</option>
            <option value="P4">Priority 4</option>
            <option value="P5">Priority 5</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <button
            className="bg-accent text-primary w-full px-6 py-2 rounded hover:bg-primary/90 transition"
            onClick={handleCreateTask}
          >
            Create new task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
