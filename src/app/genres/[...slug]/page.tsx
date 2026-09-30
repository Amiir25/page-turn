import React from 'react'

type PropsType = {
    params: Promise<{ slug: string[] }>
}

export default async function GenrePage({ params }: PropsType) {

    const { slug } = await params;

  return (
    <main>
        <h1>Genres Page</h1>
        <p>Segments recieved: {slug.join(" -> ")}</p>
        <p>Number of segments: {slug.length}</p>
    </main>
  )
}
