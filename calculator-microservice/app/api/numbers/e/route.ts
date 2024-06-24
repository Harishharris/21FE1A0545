import { NextResponse } from "next/server";
import { changeWindowCurrState, changeWindowprevState, windowCurrState, windowPrevState } from "@/utils";

export async function GET(req: Request) {
    const URL = 'http://20.244.56.144/test/even'
    const res  = await fetch(URL, {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5MjEwMjczLCJpYXQiOjE3MTkyMDk5NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAwYjI0ZDg5LWMxOGMtNDdkNS04YTU4LTcxN2NhM2FiM2QxYSIsInN1YiI6ImhhcmlzaC4xNjYzNEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJ2aWduYW4gbGFyYSIsImNsaWVudElEIjoiMDBiMjRkODktYzE4Yy00N2Q1LThhNTgtNzE3Y2EzYWIzZDFhIiwiY2xpZW50U2VjcmV0IjoiUW9ZYXVuRE9FZnRVdVZvSiIsIm93bmVyTmFtZSI6IkhhcmlzaCIsIm93bmVyRW1haWwiOiJoYXJpc2guMTY2MzRAZ21haWwuY29tIiwicm9sbE5vIjoiMjFGRTFBMDU0NSJ9.7MWdX__P9qN83_kqCOmE-Yug6DwRd73eulfWlCGpjJs"
        },
        cache: 'no-store'
    })
    const data = await res.json();

    if (!data.numbers) {
        return NextResponse.json("Error!");
    }
    
    const average = data.numbers.reduce((a: number, b: number) => a + b) / data.numbers.length;
    changeWindowprevState(windowCurrState)
    changeWindowCurrState(data.numbers)
    return NextResponse.json({
        windowPrevState: windowCurrState,
        windowCurrState: windowPrevState,
        numbers: [...data.numbers],
        avg: average
    })
}
