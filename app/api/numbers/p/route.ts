import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const URL = 'http://20.244.56.144/test/even'
    const res  = await fetch(URL)
    const data = await res.json();
    console.log(data)
    return NextResponse.json({ msg: "hello"})
}