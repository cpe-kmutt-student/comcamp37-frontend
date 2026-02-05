import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const rawQuery = searchParams.get('q') || "";

    const cleanQuery = rawQuery
        .replace(/^(โรงเรียน|รร\.?)/g, "")
        .trim()
        .toLowerCase();

    try {
        const filePath = path.join(process.cwd(), 'data', 'schools.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allSchools: string[] = JSON.parse(fileData);

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