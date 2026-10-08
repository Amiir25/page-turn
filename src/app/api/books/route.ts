import { books } from "@/data/books";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const q = request.nextUrl.searchParams.get("q")?.toLowerCase();
    const result = q
        ? books.find(book => book.title.toLowerCase().includes(q))
        : books
    
    return NextResponse.json(result || "Search not found");
}