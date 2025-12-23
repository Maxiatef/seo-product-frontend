import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, number, message } = await request.json();
        console.log("Contact form submission:", { name, email, number, message });
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
    }
}