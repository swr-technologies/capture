"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

import { Product } from "@/app/types";
import { Button, TextField } from "@/app/components";
import { useProduct } from "@/app/hooks/useProduct";
import { ArrowLeftIcon } from "@/public/icons";
import { Form_Error_Message } from "@/app/utils/data";

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
    formState: { isSubmitting, errors },
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

  return (
    <div className="relative w-full h-full bg-white px-2 text-primary ">
      <div className="flex items-center pt-8 pb-10 gap-8">
        <button
          onClick={onClose}
          className="drawer-button flex-col flex items-center p-2 font-bold text-xl rounded-full text-white hover:bg-primary/25 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        >
          <Image src={ArrowLeftIcon} alt="Go back" />
        </button>
        <h1 className="header">{isEdit ? "Edit" : "Create New"} Product</h1>
      </div>
      <div className="px-16 w-full">
        <h2 className="font-bold text-[28px] pb-8">Product Detail</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <div className="space-y-2">
            <TextField
              key="name"
              {...register("name", { required: true, maxLength: 30 })}
              type="text"
              placeholder="Product name"
              hasValue={!watchedFields["name"]}
              label="Product name"
              labelClassName="invisible peer-focus:visible"
            />
            {errors.name && (
              <p className="text-xs text-red-500 text-medium">
                {Form_Error_Message.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <TextField
              key="price"
              {...register("price", { required: true, min: 1, maxLength: 10 })}
              type="number"
              placeholder="0.00"
              label="Price"
              labelClassName="text-primary/65 peer-focus:text-primary"
              hasValue={!watchedFields["price"]}
              isAmount
            />

            {errors.price && (
              <p className="text-xs text-red-500 text-medium">
                {Form_Error_Message.price}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <TextField
              key="expiration"
              {...register("expiration", { required: true })}
              type="date"
              placeholder="Expiration date"
              hasValue={!watchedFields["expiration"]}
              label="Expiration"
            />
            {errors.expiration && (
              <p className="text-xs text-red-500 text-medium">
                {Form_Error_Message.expiration_date}
              </p>
            )}
          </div>
          <div className="w-fit fixed bottom-8 self-center mt-28">
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
