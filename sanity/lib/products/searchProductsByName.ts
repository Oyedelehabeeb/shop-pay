import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function searchProductsByName(searchParam: string) {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
  *[
   _type == "product"
   && name match $searchParam
  ] | order(name asc)
  `);

  try {
    // Use sanity to send the query and pass the search parameter with a wildcard

    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, //Append wildcard for partial match
      },
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
