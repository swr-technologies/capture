import { atom } from "jotai";
import { Product } from "../types";

export const productAtom = atom<Product[]>([]);
