import React, { useState } from "react";

import AddIcon from "../assets/plus.svg";
import { TodoList } from "../components/TodoList";
import { usePostTask } from "../hooks/useTasks";
import { Loading } from "../components/Loading";

export function Main() {
  const [value, setValue] = useState("");

  const { mutate, isLoading } = usePostTask();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ content: value, completed: false });
    setValue("");
  };

  return (
    <main className="max-w-3xl m-auto">
      {isLoading && <Loading />}
      <form
        onSubmit={handleSubmit}
        className="-mt-6 flex items-stretch h-12 gap-2 w-full"
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="px-4 rounded-lg bg-base-gray-500 border border-base-gray-700 placeholder:text-base-gray-300 flex-1 outline-none shadow-lg focus:border-product-purple-dark transition ring-0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="px-4 rounded-lg bg-product-blue-dark hover:bg-product-blue transition font-bold text-sm shadow-lg flex items-center gap-2">
          Criar
          <img src={AddIcon} alt="Criar" />
        </button>
      </form>
      <TodoList />
    </main>
  );
}
