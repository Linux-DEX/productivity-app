"use client";

import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";

type TodoItemProps = {
  name: string;
  fromTime: string;
  toTime: string;
  checked?: boolean;
};

const TodoItem: React.FC<TodoItemProps> = ({
  name,
  fromTime,
  toTime,
  checked = false,
}) => {
  return (
    <div className="flex items-center justify-between bg-surface p-4 rounded-xl shadow mb-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          defaultChecked={checked}
          className="w-5 h-5 bg-accent"
        />
        <p className="font-medium text-primary">{name}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="">
          <p className="text-sm text-secondary whitespace-nowrap">
            {fromTime} – {toTime}
          </p>
        </div>
        <div>
          <EllipsisVerticalIcon className="w-5 h-5 text-primary hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
