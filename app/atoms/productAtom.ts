import { atom } from "jotai";
import { Product } from "../types";

export const productAtom = atom<Product[]>([]);
export const isCreateProductModalOpenAtom = atom<boolean>(false);
