"use client";

import { Product } from "@/sanity.types";
import useCartStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddToCartProps {
  product: Product;
  disabled?: boolean;
}

export default function AddToCartButton({ product, disabled }: AddToCartProps) {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  //
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removeItem(product._id)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
      >
        <span
          className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}
        >
          -
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        onClick={() => addItem(product)}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-700 hover:bg-yellow-300"}`}
      >
        <span className="text-xl font-bold text-white">+</span>
      </button>
    </div>
  );
}
