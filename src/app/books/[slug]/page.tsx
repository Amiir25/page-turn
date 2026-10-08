import AuthorInfo from "@/components/AuthorInfo";
import Collapsible from "@/components/Collapsible";
import FavoriteButton from "@/components/FavoriteButton";
import { books, BookType } from "@/data/books";
import { reviews } from "@/lib/store";
import { notFound } from "next/navigation";
import React from "react";
import { addReview } from "./actions";

type PropsType = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function Book({ params }: PropsType) {
  const { slug } = await params;
  const selectedBook = books.find((book) => book.slug === slug);
  const bookReviews = reviews.filter(r => r.slug === slug);

  if (!selectedBook) {
    notFound();
  }

  // Related books
  const [book1, book2, book3] = await Promise.all([
    books.find(book => book.title === "Dune"),
    books.find(book => book.title === "Beloved"),
    books.find(book => book.title === "The Hobbit")
  ]);

  const { title, author, year, description } = selectedBook;
  return (
    <main>
      <h1>{title}</h1>
      <div className="flex items-center justify-between">
        <h2>{author}</h2>
        <h2>{year}</h2>
      </div>
      <p>{description}</p>

      <div className="flex items-center gap-10">
        <FavoriteButton slug={slug} />
        <Collapsible title="About the Author">
          <AuthorInfo author={author} />
        </Collapsible>
      </div>

      {/* Review form */}
      <form action={addReview} className="flex flex-col max-w-100">
        <input type="hidden" name="slug" value={slug}  className="border border-gray-500"/>
        <input type="text" name="name" placeholder="Your name"  className="border border-gray-500"/>
        <textarea name="text" placeholder="Your review" className="border border-gray-500"></textarea>
        <button type="submit" className="bg-gray-800 p-4 rounded">Post Review</button>
      </form>

      <ul>
        <h2>Past Reviews</h2>
        {bookReviews.map((r) => (
          <li key={r.createdAt}>
            <strong>{r.name}</strong>: {r.text}
          </li>
        ))}
      </ul>

      {/* Related books */}
      <div className="mt-8">
        <h2>Related Books</h2>
        <p>{book1?.title}</p>
        <p>{book2?.title}</p>
        <p>{book3?.title}</p>
      </div>
    </main>
  );
}
