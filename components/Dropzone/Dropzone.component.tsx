"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { toast } from "react-toastify";

export const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => toast.error("Envio do documento cancelado");
      reader.onerror = () => toast.success("Erro ao enviar o documento");
      reader.onload = () => {
        const binaryStr = reader.result;
        localStorage.setItem("fileSent", binaryStr as string);
        toast.success("Documento enviado com sucesso");
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1048576,
  });

  return (
    <div className="mt-5">
      <h1 className="my-5 font-semibold text-center">
        Para que você consiga ter acesso às unidades, precisamos que nos envie
        algum documento.
      </h1>
      <div
        aria-label="dropzone"
        className="border p-2 rounded-md cursor-pointer text-center border-dashed border-gray-300 hover:border-gray-500 transition-colors duration-300"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p className="text-sm">
          Arraste e solte arquivos aqui, ou clique para selecionar arquivos
        </p>
      </div>
    </div>
  );
};
