"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export default function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  // Only show the button if we're in a live environment or outside presentation tool (not draft or unknown)
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  async function handleClick() {
    await fetch("/draft-mode/disable");
    router.refresh();
  }
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2 z-50"
    >
      Disable Draft Mode
    </button>
  );
}
