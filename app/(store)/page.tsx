import ProductView from "@/components/ProductView";
import RamadanBanner from "@/components/RamadanBanner";
// import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <RamadanBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
