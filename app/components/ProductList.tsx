import { Button, ListItems } from "@/app/components";
import { Product } from "../types";

type ProductListProps = {
  products: Product[];
  onCreate: () => void;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
};

export const ProductList = ({
  products,
  onCreate,
  onDelete,
  onEdit,
  onView,
}: ProductListProps) => {
  return (
    <div className="">
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-primary font-bold text-5xl">List</h1>
        <div className="w-fit">
          <Button label="Add Product" variant="default" onClick={onCreate} />
        </div>
      </div>
      <ListItems
        products={products}
        onDelete={onDelete}
        onEdit={onEdit}
        onView={onView}
      />
    </div>
  );
};
