import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductByCategory } from "@/sanity/lib/products/getProductByCategory";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductByCategory(slug);
  const categories = await getAllCategories();
  return <div></div>;
}

export default CategoryPage;
