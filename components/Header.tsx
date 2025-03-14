"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useCartStore from "@/store/store";

function Header() {
  const { user } = useUser();
  // const { getItemCount } = useCartStore();
  // const itemCount = useCartStore((state) => state.items.length);
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  async function createPassKey() {
    try {
      const response = await user?.createPasskey();
      console.log("Passkey created:", response);
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
    }
  }
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* Top row */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-700 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Shop{`'n`}Pay
        </Link>

        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2
           rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/cart"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-yellow-700 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-4 h-4 sm:w-6 sm:h-6 hidden sm:block" />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {itemCount}
            </span>
            <span> My Cart</span>
          </Link>

          {/* User area */}

          <ClerkLoaded>
            {user && (
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-yellow-700 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-4 h-4 sm:w-6 sm:h-6 hidden sm:block" />
                <span>My Orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}

            {user?.passkeys.length === 0 && (
              <button
                onClick={createPassKey}
                className="bg-white hover:bg-yellow-300 hover:text-white animate-pulse text-yellow-700 font-bold py-2 px-4 rounded border-yellow-700 hover:border-yellow-300 border"
              >
                Create passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
