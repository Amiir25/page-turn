import { books } from "@/data/books";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const book = books.find(b => b.slug === slug);

    if (!book) {
        return NextResponse.json({ error: "Book not found" }, { status: 404 })
    }

    return NextResponse.json(book);
}