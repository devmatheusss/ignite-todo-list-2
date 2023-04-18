import React, { useState } from "react";
import getTasks from "../hooks/getTasks";

import Clipboard from "../assets/clipboard.svg";
import { Task } from "./Task";

export function TodoList() {
  const { data } = getTasks();

  const tasksCompletedFiltered = data.filter((task) => task.completed);

  return (
    <section className="pt-16 flex flex-col gap-6">
      <section className="flex items-center w-full justify-between text-sm font-bold">
        <div className="flex items-center gap-2">
          <h2 className="text-product-blue">Tarefas criadas</h2>
          <span className="px-2 py-0.5 rounded-xl bg-base-gray-400 text-base-gray-200 text-xs">
            {data.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-product-purple">Concluídas</h2>
          <span className="px-2 py-0.5 rounded-xl bg-base-gray-400 text-base-gray-200 text-xs">
            {tasksCompletedFiltered.length} de {data.length}
          </span>
        </div>
      </section>
      <section
        className={`w-full rounded-lg border-base-gray-400 ${
          data.length === 0 ? "py-16 px-6 border-t" : ""
        } flex flex-col items-center gap-4`}
      >
        {data.length === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <img src={Clipboard} alt="Icone de lista" />
            <div className="text-base-gray-300">
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <>
            {data.map((task) => {
              return <Task key={task.id} task={task} />;
            })}
          </>
        )}
      </section>
    </section>
  );
}
