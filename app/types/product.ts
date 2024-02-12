export type Product = {
  id: string;
  name: string;
  price: string;
  expiration: string;
};

export type FieldName =
  | "name"
  | "price"
  | "expiration";

export type NotificationLog = {
  productId: string;
  date: string;
  time: string;
  status: "Success" | "Failed";
};
