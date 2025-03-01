"use client";

import useCartStore from "@/store/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage() {
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("Basket items:", groupedItems);
  return <div>this is the cart page</div>;
}
