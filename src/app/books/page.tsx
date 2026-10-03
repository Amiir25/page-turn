// import { books } from "@/data/books";
import BookSearch from "@/components/BookSearch";
import { getBooks } from "@/data/books";
import Link from "next/link";

export default async function page() {

  const books = await getBooks();
  
  return (
    <main>
      <h1>Book List</h1>

      {/* Book search */}
      <BookSearch books={books}/>
    </main>
  );
}
