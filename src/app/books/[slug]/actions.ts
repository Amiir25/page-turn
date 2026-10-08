"use server"

import { reviews } from "@/lib/store";
import { revalidatePath } from "next/cache";

export async function addReview(formData: FormData) {
    const slug = String(formData.get("slug") ?? "" .trim());
    const name = String(formData.get("name") ?? "" .trim());
    const text = String(formData.get("text") ?? "" .trim());

    if (!slug || !name || ! text) return;

    reviews.push({ slug, name, text, createdAt: new Date().toISOString() });
    revalidatePath(`/books/${slug}`);
}