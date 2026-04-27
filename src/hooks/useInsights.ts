import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanityClient";
import { INSIGHTS_QUERY, INSIGHTS_BY_TAG_QUERY } from "@/lib/queries";

export interface Insight {
  _id: string;
  title: string;
  slug: string;
  tag: string;
  teaser: string;
  readTime: string;
  publishedAt: string;
  featured?: boolean;
  contentType?: "pdf" | "link";
  pdfUrl?: string;
  externalUrl?: string;
}

export function useInsights(tag?: string) {
  return useQuery<Insight[]>({
    queryKey: ["insights", tag ?? "all"],
    queryFn: () =>
      sanityClient.fetch(tag && tag !== "All" ? INSIGHTS_BY_TAG_QUERY(tag) : INSIGHTS_QUERY),
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
}
