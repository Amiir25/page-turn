"use client";

import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

type Favorites = { favorites: string[] };

export default function FavoriteButton({ slug }: { slug: string }) {
  const { data, error, isLoading, mutate } = useSWR<Favorites>(
    "/api/favorites",
    fetcher,
  );
  const favorited = data?.favorites.includes(slug) ?? false;

  async function toggle() {
    const next = !favorited;
    const apply = (cur?: Favorites): Favorites => {
      const set = new Set(cur?.favorites ?? []);
      if (next) set.add(slug);
      else set.delete(slug);
      return { favorites: [...set] };
    };

    await mutate(
      async (cur) => {
        const res = await fetch("/api/favorites", {
          method: next ? "POST" : "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });
        if (!res.ok) throw new Error("Failed");
        return apply(cur);
      },
      { optimisticData: apply, rollbackOnError: true, revalidate: true },
    );
  }

  if (isLoading) return <span>Loading status...</span>;
  if (error) return <span>Coudn't load</span>;

  return (
    <button
      onClick={toggle}
      disabled={isLoading}
      aria-label={`Favorited ${slug}`}
      className="rounded border px-3 py-1"
    >
      {favorited ? "❤️ Saved" : "🤍 Save"}
    </button>
  );
}
