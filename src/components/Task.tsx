import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Trash } from "@phosphor-icons/react";

import { DataTypes } from "../types";
import { EditTaskModal } from "./EditTaskModal";
import api from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDeleteTask } from "../hooks/useTasks";

interface TaskProps {
  task: DataTypes;
}

export function Task({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.completed);
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useDeleteTask({
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const handleCheckboxChange = (checked: Checkbox.CheckedState) => {
    api.patch(`/tasks/${task.id}`, {
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
        {task.content}
      </p>
      <div className="flex items-center gap-2">
        <EditTaskModal content={task.content} />
        <button
          onClick={() => mutate(task.id)}
          className="text-base-gray-300 hover:text-base-danger transition"
        >
          <Trash size={22} weight="bold" />
        </button>
      </div>
    </div>
  );
}
