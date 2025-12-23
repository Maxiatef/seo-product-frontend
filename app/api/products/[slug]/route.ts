// import { NextResponse } from "next/server";

// const EXTERNAL_API = "http://seoproducts.runasp.net/api/products";

// export async function GET(
//   _req: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params;
//   try {
//     const res = await fetch(`${EXTERNAL_API}/${slug}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       return NextResponse.json(
//         { error: "Upstream error", status: res.status },
//         { status: res.status }
//       );
//     }

//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Fetch failed", details: String(err) },
//       { status: 500 }
//     );
//   }
// }
//===============================================================================

import { NextResponse } from "next/server";

const EXTERNAL_API = "http://seoproducts.runasp.net/api/products";

export async function GET(  _req: Request,
    { params }: { params: Promise<{ slug: string }> }
  ) {
  try {
    const { slug } = await params;
    const res = await fetch(`${EXTERNAL_API}/${slug}`, { cache: "no-store" });
    console.log("External API response status:", res.status);

    if (!res.ok) {
      console.log("External API error:", res.status, res.statusText);
      return NextResponse.json(
        { error: "Upstream error", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log("Fetch error:", err);
    return NextResponse.json(
      { error: "Fetch failed", details: String(err) },
      { status: 500 }
    );
  }
}

