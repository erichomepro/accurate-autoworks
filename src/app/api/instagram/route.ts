import { NextResponse } from "next/server";

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || "";

export async function GET() {
  if (!INSTAGRAM_TOKEN) {
    return NextResponse.json({ posts: [] });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,thumbnail_url&limit=16&access_token=${INSTAGRAM_TOKEN}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return NextResponse.json({ posts: [] });
    }

    const data = await res.json();
    return NextResponse.json({ posts: data.data || [] });
  } catch (error) {
    console.error("Instagram fetch error:", error);
    return NextResponse.json({ posts: [] });
  }
}
