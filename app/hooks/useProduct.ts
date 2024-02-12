import { useAtom } from "jotai";
import {
  isCreateProductModalOpenAtom,
  productAtom,
} from "@/app/atoms/productAtom";
import { Product } from "../types";

export const useProduct = () => {
  const [products, setProducts] = useAtom(productAtom);
  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useAtom(
    isCreateProductModalOpenAtom
  );
  const createProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  const deleteProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
    isCreateProductModalOpen,
    setIsCreateProductModalOpen
  };
};
