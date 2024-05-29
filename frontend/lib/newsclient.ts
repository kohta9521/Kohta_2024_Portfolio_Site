import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_NEWS_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY || "",
});
