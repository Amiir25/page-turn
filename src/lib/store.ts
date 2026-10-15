export type User = { id: string; name: string; email: string; passwordHash: string };
export type Review = {
  bookId: string;
  userId: string;
  name: string;
  text: string;
  createdAt: string;
};

const g = globalThis as unknown as {
  users?: User[];
  reviews?: Review[];
  favoritesByUser?: Map<string, Set<string>>;
};

export const users = (g.users ??= []);
export const reviews = (g.reviews ??= []);
const favoritesByUser = (g.favoritesByUser ??= new Map());

export function favoritesOf(userId: string) {
  let set = favoritesByUser.get(userId);
  if (!set) favoritesByUser.set(userId, (set = new Set()));
  return set;
}