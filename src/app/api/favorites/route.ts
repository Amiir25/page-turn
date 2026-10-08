import { books } from "@/data/books";
import { favorites } from "@/lib/store";
import { NextResponse } from "next/server";

async function readBook(request: Request) {
    const body = await request.json().catch(() => null);
    return typeof body?.slug === "string" ? body.slug : null;
}

// GET
export async function GET() {
    return NextResponse.json({ favorites: [...favorites] });
}

// POST
export async function POST(request: Request) {
    const slug = await readBook(request);
    if (!slug) {
        return NextResponse.json({ error: "Book slug is required" }, { status: 400 });
    }

    if (!books.some(b => b.slug === slug)) {
        return NextResponse.json({ error: "Unknown book" }, { status: 404 });
    }

    favorites.add(slug);
    return NextResponse.json({ slug }, { status: 201 });
}

// DELETE
export async function DELETE(request: Request) {
    const slug = await readBook(request);
    if (!slug) {
        return NextResponse.json({ error: "Book slug is required" }, { status: 400 })
    }

    favorites.delete(slug);
    return NextResponse.json({ slug });
}