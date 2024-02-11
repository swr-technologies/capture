import { atom } from "jotai";
import { Product } from "../types";

export const createProductAtom = atom<Product>({
  name: "",
  price: "",
  expiration: "",
  weight: "",
});
