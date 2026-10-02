"use client"

import React, { useState } from 'react'

export default function FavoriteButton({ slug }: { slug: string }) {
    const [favorited, setFavorited] = useState(false);
  return (
    <button
        onClick={() => setFavorited(!favorited)}
        aria-label={`Favorited ${slug}`}
        className='rounded border px-3 py-1'
    >
        {favorited ? "❤️ Saved" : "🤍 Save"}
    </button>
  )
}
