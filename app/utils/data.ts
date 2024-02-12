import { NotificationLog } from "@/app/types";
import { Chart, ScannerIcon } from "@/public/icons";

export const headers = ["Product", "Expiry date", "Price"];

export const navbarContent = [
  {
    title: "Overview",
    items: [
      {
        id: 1,
        name: "Dashboard",
        path: "#",
        icon: Chart,
      },
      {
        id: 2,
        name: "Camera Scanner",
        path: "product-scanner",
        icon: ScannerIcon,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        id: 3,
        name: "List",
        path: "product-list",
      },
    ],
  },
];

export const logs: NotificationLog[] = [
  {
    productId: "002390",
    date: "Jan 21",
    time: "14:03",
    status: "Failed",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "002390",
    date: "Jan 21",
    time: "14:03",
    status: "Failed",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "002390",
    date: "Jan 21",
    time: "14:03",
    status: "Failed",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "002390",
    date: "Jan 21",
    time: "14:03",
    status: "Failed",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
  {
    productId: "003390",
    date: "Jan 21",
    time: "14:03",
    status: "Success",
  },
];

export const Form_Error_Message = {
  name: "Please enter a correct product name.",
  price: "Price should not be $ 0.00",
  expiration_date: "Expiration date should be indicated properly.",
} as const;
