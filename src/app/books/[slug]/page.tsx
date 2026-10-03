import AuthorDetail from "@/components/AuthorDetail";
import Collapsible from "@/components/Collapsible";
import FavoriteButton from "@/components/FavoriteButton";
import { books } from "@/data/books";
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
    </main>
  );
}
