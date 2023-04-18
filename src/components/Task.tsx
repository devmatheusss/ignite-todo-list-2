import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import Trash from "@phosphor-icons/react/dist/icons/Trash";
import { DataTypes } from "../@types";
import api from "../api";
import {
  CheckIcon,
  DividerHorizontalIcon,
  PlayIcon,
} from "@radix-ui/react-icons";
import { PencilSimple } from "@phosphor-icons/react";
import { EditTaskModal } from "./EditTaskModal";

interface TaskProps {
  task: DataTypes;
}

export function Task({ task }: TaskProps) {
  const [tasks, setTasks] = useState(task);
  const [isChecked, setIsChecked] = useState(tasks.completed);

  const handleClick = () => {
    api.delete(`/tasks/${tasks.id}`).catch((error) => console.error(error));
  };

  const handleCheckboxChange = (checked: Checkbox.CheckedState) => {
    api.patch(`/tasks/${tasks.id}`, {
      completed: checked,
    });
    setIsChecked(!isChecked);
  };

  const handleTaskEdit = () => {
    prompt("Edite a Tarefa:");
  };

  return (
    <div className="flex items-start justify-between gap-4 p-5 w-full bg-base-gray-400 border-base-gray-500 rounded-lg border group">
      <Checkbox.Root
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        className={`w-4 h-4 rounded-full transition border ${
          isChecked
            ? "border-product-purple bg-product-purple"
            : "border-product-blue"
        } hover:border-product-purple`}
      >
        <Checkbox.Indicator>
          <CheckIcon color="white" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <p
        className={`text-sm justify-self-start flex-1 ${
          task.completed ? "line-through text-base-gray-200" : ""
        }`}
      >
        {tasks.content}
      </p>
      <div className="flex items-center gap-2">
        <EditTaskModal content={task.content} />
        <button
          onClick={handleClick}
          className="text-base-gray-300 hover:text-base-danger transition"
        >
          <Trash size={22} weight="bold" />
        </button>
      </div>
    </div>
  );
}
