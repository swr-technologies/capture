import Image from "next/image";
import ArrowLeft from "@/public/icons/arrowLeft.svg";
import { TextField } from "@/app/components";

export const CreateProduct = ({ onClose }: { onClose: () => void }) => {

  return (
    <div className="relative w-full h-full bg-white px-2 text-primary ">
      <div className="flex items-center pt-8 pb-10 gap-8">
        <button onClick={onClose}>
          <Image src={ArrowLeft} alt="" />
        </button>
        <h1 className="font-bold text-5xl">Create New Product</h1>
      </div>
      <div className="px-16">
        <h2 className="font-bold text-[28px]">Pricing Detail</h2>
        <form>
          <TextField  type="text" placeholder="Product name"/>
        </form>
      </div>
    </div>
  );
};
