"use client";

import { Product } from "@/sanity.types";
import ProductThumb from "./ProductThumb";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {products?.map((product) => {
        return (
          <div className="flex justify-center" key={product._id}>
            <ProductThumb product={product} />
          </div>
        );
      })}
    </div>
  );
}
