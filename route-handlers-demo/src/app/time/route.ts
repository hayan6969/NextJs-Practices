

export const dynamic="force-dynamic";
//to opt out of caching as in next js the get gets cached by default

export async function GET(){
    return Response.json(
       { time:new Date().toLocaleTimeString()}
    )
}