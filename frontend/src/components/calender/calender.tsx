'use client'

import React, { useState } from "react";

const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC = () => {
  const today: Date = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();

  const firstDay: number = new Date(year, month, 1).getDay();
  const lastDate: number = new Date(year, month + 1, 0).getDate();

  const prevMonth = (): void => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = (): void => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const generateCalendar = (): React.ReactNode[] => {
    const days: React.ReactNode[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-gray-400">
          {" "}
        </div>
      );
    }

    for (let date = 1; date <= lastDate; date++) {
      const isToday: boolean =
        date === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      const handleClick = () => {
        const clickedDate = new Date(year, month, date);
        const formattedDate = `${year}-${String(month + 1).padStart(
          2,
          "0"
        )}-${String(date).padStart(2, "0")}`;

        console.log(formattedDate);
      };

      days.push(
        <div
          key={date}
          onClick={handleClick}
          className={`border p-2 text-center rounded ${
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
    <div className="w-80 mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>⟵</button>
        <h2 className="text-lg font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>⟶</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day: string) => (
          <div key={day} className="font-bold text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;
