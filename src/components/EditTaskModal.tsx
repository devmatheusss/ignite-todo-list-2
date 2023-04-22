import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PencilSimple, X } from "@phosphor-icons/react";

export function EditTaskModal({ content }: { content: string }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-base-gray-300 hover:text-product-blue transition-opacity duration-500 ">
          <PencilSimple size={22} weight="bold" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-base-gray-600/50 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-base-gray-500 border border-product-purple p-6 shadow-base-gray-300 outline-none">
          <Dialog.Title className="text-white text-lg font-semibold">
            Editar tarefa
          </Dialog.Title>
          <Dialog.Description className="text-white mt-[10px] mb-5 text-[15px]">
            Edite o conteúdo da sua tarefa abaixo:
          </Dialog.Description>
          <input
            type="text"
            className="h-12 w-full flex flex-1 items-center justify-center rounded-md px-4 outline-none"
            defaultValue={content}
          />

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-product-blue hover:bg-product-blue-dark h-8 flex items-center justify-center rounded-md px-4 outline-none transition text-sm text-white">
                Salvar
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-white hover:bg-base-gray-600/50 absolute top-4 right-4 h-6 w-6 items-center justify-center flex rounded-full outline-none"
              aria-label="Fechar"
            >
              <X size={16} weight="bold" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
