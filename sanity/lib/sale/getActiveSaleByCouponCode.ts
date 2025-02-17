import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCode";
import { sanityFetch } from "../live";

export async function getActiveSaleByCouponCode(couponCode: CouponCode) {
  const ACTIVE_SALE_BY_QUERY = defineQuery(`
  *[
   _type=="sale" 
   && isActive == true 
   && couponCode == $couponCode
  ] | order(validFrom desc)[0]
  `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_QUERY,
      params: {
        couponCode,
      }, // Include couponCode as a parameter to the query
    });
    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error(
      `Error fetching active sale for coupon code ${couponCode}:`,
      error
    );
    return null;
  }
}
