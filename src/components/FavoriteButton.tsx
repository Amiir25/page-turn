"use client"

import React, { useEffect, useState } from 'react'

export default function FavoriteButton({ slug }: { slug: string }) {
    const [favorited, setFavorited] = useState(false);
    const [errMeg, setErrMsg] = useState("");

    useEffect(() => {
      fetch("/api/favorites")
        .then(r => r.json())
        .then(d => setFavorited(d.favorites.includes(slug)));
    }, [slug])

    const handleFavorite = async () => {
      setFavorited(!favorited);
      const res = await fetch("http://localhost:3000/api/favorites", {
        method: favorited ? "DELETE" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      })

    }

  return (
    <button
        onClick={handleFavorite}
        aria-label={`Favorited ${slug}`}
        className='rounded border px-3 py-1'
    >
        {favorited ? "❤️ Saved" : "🤍 Save"}
    </button>
  )
}
