"use client";
import React, { useState } from "react";

interface CalendarProps {
  onDateSelect: (date: string) => void;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const generateCalendar = () => {
    const days: React.ReactNode[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-gray-400">
          {" "}
        </div>
      );
    }

    for (let date = 1; date <= lastDate; date++) {
      const isToday =
        date === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      const formattedDate = `${year}-${String(month + 1).padStart(
        2,
        "0"
      )}-${String(date).padStart(2, "0")}`;

      days.push(
        <div
          key={date}
          onClick={() => onDateSelect(formattedDate)}
          className={`cursor-pointer border p-2 text-center rounded ${
            isToday ? "bg-blue-500 text-white font-bold" : ""
          }`}
        >
          {date}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth}>⟵</button>
        <h2 className="text-sm font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>⟶</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1 text-xs font-bold text-center">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {generateCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
