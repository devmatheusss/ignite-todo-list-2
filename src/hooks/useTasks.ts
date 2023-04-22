import { DataTypes } from "../types";
import { useQuery, useMutation } from "@tanstack/react-query";
import api from "../api";

type UseTasksProps = {
  onSuccess?: ((data: DataTypes[]) => void) | undefined;
  onError?: ((err: unknown) => void) | undefined;
};

async function getTasks(): Promise<DataTypes[]> {
  const res = await api.get("/tasks");
  return res.data;
}

function postTask(task: { content: string; completed: boolean }) {
  return api.post("/tasks", task);
}

function deleteTask(id: string) {
  return api.delete(`/tasks/${id}`);
}

export function useTasks({ onSuccess, onError }: UseTasksProps) {
  return useQuery(["tasks"], getTasks, {
    onSuccess,
    onError,
  });
}

export function usePostTask() {
  return useMutation(postTask);
}

export function useDeleteTask({ onSuccess }: UseTasksProps) {
  return useMutation(deleteTask);
}
