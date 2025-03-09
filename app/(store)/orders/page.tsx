import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Orders() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await getMyOrders(userId);
  return <div>Orders</div>;
}
