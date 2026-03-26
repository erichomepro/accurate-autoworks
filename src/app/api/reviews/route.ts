import { NextResponse } from "next/server";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const PLACE_QUERY = "Accurate Autoworks Stony Plain Alberta";

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ reviews: [], rating: 0, totalReviews: 0 });
  }

  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": "places.rating,places.userRatingCount,places.reviews",
      },
      body: JSON.stringify({
        textQuery: PLACE_QUERY,
        maxResultCount: 1,
      }),
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!res.ok) {
      console.error("Google Places API error:", res.status);
      return NextResponse.json({ reviews: [], rating: 0, totalReviews: 0 });
    }

    const data = await res.json();
    const place = data.places?.[0];

    if (!place) {
      return NextResponse.json({ reviews: [], rating: 0, totalReviews: 0 });
    }

    const reviews = (place.reviews || []).map((r: any) => ({
      author: r.authorAttribution?.displayName || "Anonymous",
      rating: r.rating || 5,
      text: r.text?.text || "",
      time: r.relativePublishTimeDescription || "",
    }));

    return NextResponse.json({
      reviews,
      rating: place.rating || 0,
      totalReviews: place.userRatingCount || 0,
    });
  } catch (error) {
    console.error("Reviews fetch error:", error);
    return NextResponse.json({ reviews: [], rating: 0, totalReviews: 0 });
  }
}
