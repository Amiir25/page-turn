"use client";

import { BookType } from "@/data/books";
import Link from "next/link";
import React, { useState } from "react";
import FavoriteButton from "./FavoriteButton";

export default function BookSearch({ books }: { books: BookType[] }) {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setFilteredBooks(() =>
      value
        ? books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : books,
    );
  };

  return (
    <section>
      <form action="" className="flex items-center justify-center gap-8">
        <label htmlFor="search">Search Books</label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="px-3 py-2 border border-gray-700"
        />
      </form>

      <div className="flex items-center justify-center flex-wrap gap-10">
        {filteredBooks.map((book) => {
          const { id, slug, title, author, year } = book;

          return (
            <Link key={id} href={`/books/${slug}`}>
              <article className="border border-gray-400 p-4 rounded">
                <h1>{title}</h1>
                <div className="flex items-center justify-between">
                  <h2>{author}</h2>
                  <h2>{year}</h2>
                </div>
                <FavoriteButton slug={slug} />
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
