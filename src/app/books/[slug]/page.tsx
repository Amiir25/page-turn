import AuthorDetail from "@/components/AuthorDetail";
import Collapsible from "@/components/Collapsible";
import FavoriteButton from "@/components/FavoriteButton";
import { books, BookType } from "@/data/books";
import { notFound } from "next/navigation";
import React from "react";

type PropsType = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default async function Book({ params }: PropsType) {
  const { slug } = await params;
  const selectedBook = books.find((book) => book.slug === slug);

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
          <AuthorDetail author={author} />
        </Collapsible>
      </div>

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
