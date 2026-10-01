// import { books } from "@/data/books";
import { getBooks } from "@/data/books";
import Link from "next/link";

export default async function page() {

  const books = await getBooks();
  
  return (
    <main>
      <h1>Book List</h1>
      <div className="flex items-center justify-center flex-wrap gap-10">
        {books.map((book) => {
          const { id, slug, title, author, year } = book;

          return (
            <Link key={id} href={`/books/${slug}`}>
              <article className="border border-gray-400 p-4 rounded">
                <h1>{title}</h1>
                <div className="flex items-center justify-between">
                  <h2>{author}</h2>
                  <h2>{year}</h2>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
