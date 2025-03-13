import { client } from "@/sanity/lib/client";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

//This file will allow presentation to set the app in draft mode, which will load the visual editting and query draft content and preview the content as it will appear once everything is published.
const token = process.env.SANITY_API_READ_TOKEN;

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 404 });
  }

  (await draftMode()).enable();

  redirect(redirectTo);
}
