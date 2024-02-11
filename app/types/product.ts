export type Product = {
  id: string;
  name: string;
  price: string;
  expiration: string;
  measurement: number;
  measurementUnits:string
};

export type FieldName = "name" | "price" | "measurement" | "measurementUnits" | "expiration";
