import { NextResponse } from 'next/server';
import allSchools from "@/data/schools.json"

export const runtime = 'edge';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const rawQuery = searchParams.get('q') || "";

    const cleanQuery = rawQuery
        .replace(/^(โรงเรียน|รร\.?)/g, "")
        .trim()
        .toLowerCase();

    try {

        if (!cleanQuery) {
            return NextResponse.json(allSchools.slice(0, 4));
        }

        const filtered = allSchools
            .filter((name: string) => name.toLowerCase().includes(cleanQuery))
            .slice(0, 4);

        return NextResponse.json(filtered);
    } catch (error) {
        return NextResponse.json({ error: "Local data not found" }, { status: 500 });
    }
}