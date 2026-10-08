export type Review = {
  slug: string;
  name: string;
  text: string;
  createdAt: string;
};

const g = globalThis as unknown as {
  favorites?: Set<string>;
  reviews?: Review[];
};

export const favorites = (g.favorites ??= new Set<string>());
export const reviews = (g.reviews ??= []);