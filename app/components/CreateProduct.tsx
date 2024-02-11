"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

import { FieldName, Product } from "@/app/types";
import ArrowLeft from "@/public/icons/arrowLeft.svg";
import { Button, TextField } from "@/app/components";
import { useProduct } from "@/app/hooks/useProduct";

export const CreateProduct = ({
  onClose,
  editingProduct,
}: {
  onClose: () => void;
  editingProduct: Product;
}) => {
  const { createProduct, updateProduct } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<Product>({
    shouldUseNativeValidation: true,
    defaultValues: editingProduct || {},
  });
  const isEdit = !!editingProduct;
  const watchedFields = watch();

  useEffect(() => {
    if (editingProduct) {
      reset(editingProduct);
    }
  }, [editingProduct, reset]);

  const onSubmit = async (data: Product) => {
    try {
      const operation = isEdit ? updateProduct : createProduct;
      await operation({ ...data, id: editingProduct?.id || uuidv4() });
      onClose();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const formFields: { name: FieldName; type: string; placeholder: string }[] = [
    { name: "name", type: "text", placeholder: "Product name" },
    { name: "price", type: "text", placeholder: "Price" },
    { name: "expiration", type: "date", placeholder: "Expiration" },
  ];

  return (
    <div className="relative w-full h-full bg-white px-2 text-primary ">
      <div className="flex items-center pt-8 pb-10 gap-8">
        <button onClick={onClose}>
          <Image src={ArrowLeft} alt="Go back" />
        </button>
        <h1 className="font-bold text-5xl">
          {isEdit ? "Edit" : "Create New"} Product
        </h1>
      </div>
      <div className="px-16 w-full">
        <h2 className="font-bold text-[28px] pb-5">Product Detail</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          {formFields.map((field) => (
            <TextField
              key={field.name}
              {...register(field.name)}
              type={field.type}
              placeholder={field.placeholder}
              required
              hasValue={!watchedFields[field.name]}
            />
          ))}
          <div className="flex w-full gap-4">
            <TextField
              {...register("measurement")}
              type="number"
              placeholder="Measurement"
              required
              hasValue={!watchedFields["measurement"]}
            />
            <TextField
              {...register("measurementUnits")}
              type="text"
              placeholder="Measurement Units"
              required
              hasValue={!watchedFields["measurementUnits"]}
            />
          </div>
          <div className="w-fit self-center mt-28">
            <Button
              variant="default"
              label={editingProduct ? "Save" : "Create"}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
