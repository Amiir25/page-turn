import { books } from "@/data/books";
import { notFound } from "next/navigation";
import React from "react";

type PropsType = {
  params: Promise<{ slug: string }>;
};

export default async function page({ params }: PropsType) {
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
    </main>
  );
}


