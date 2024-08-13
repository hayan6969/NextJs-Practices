import { type NextRequest } from "next/server"
import  {headers,cookies} from "next/headers"
export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList=headers();

    cookies().set("results per page","20")
    
    console.log(cookies().get("results per page"))
    const theme=request.cookies.get("theme")
    console.log(theme)
    console.log(requestHeaders.get("Authorization"))
    console.log(headerList.get("Authorization"))
    return new Response("<h1>profile api data</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}
