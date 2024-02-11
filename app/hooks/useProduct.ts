import { useAtom } from "jotai";
import { productAtom } from "../atoms/productAtom";
import { Product } from "../types";

export const useProduct = () => {
  const [products, setProducts] = useAtom(productAtom);

  const createProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };
  const deleteProduct = (productId: string) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return {
    products,
    createProduct,
    updateProduct,
    deleteProduct
  };
};