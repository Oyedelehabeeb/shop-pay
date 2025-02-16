import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getAllCategories() {
  const ALL_CATEGORIES = defineQuery(`
  *[_type == "category"] | order(name asc)
  `);

  try {
    const categories = await sanityFetch({
      query: ALL_CATEGORIES,
    });
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
}
