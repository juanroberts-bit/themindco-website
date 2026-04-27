import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanityClient";
import { EVENTS_QUERY } from "@/lib/queries";

export interface SanityEvent {
  _id: string;
  title: string;
  type: "hosting" | "attending";
  location: string;
  date: string;
  sortKey: number;
  description: string;
  link?: string;
}

export function useEvents() {
  return useQuery<SanityEvent[]>({
    queryKey: ["events"],
    queryFn: () => sanityClient.fetch(EVENTS_QUERY),
    staleTime: 1000 * 60 * 5, // 5 min cache
  });
}
