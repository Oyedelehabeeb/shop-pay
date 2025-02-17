// import { COUPON_CODES } from "@/sanity/lib/sale/couponCode";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sale/getActiveSaleByCouponCode";

export default async function RamadanBanner() {
  const sale = await getActiveSaleByCouponCode("RAMADAN");

  if (!sale?.isActive) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg">
      Ramadan Banner
    </div>
  );
}
