import { comment, Parser } from 'postcss'
import {comments} from '../data'
import {redirect} from "next/navigation"


//creating interface for params
interface Params{
    id:string
}


export async function GET(_request:Request, {params}: {params:Params}){
if(parseInt(params.id)>comments.length){
    redirect('/comments')
}

    const comment=comments.find(comment=>comment.id===parseInt(params.id))

return Response.json(comment)
}

export async function PATCH(request:Request,{params}:{params:Params}){

    const body = await request.json()
    const {text} =body  //destructuring the body, equal to const text=body.text
    const index=comments.findIndex(comments=>comments.id===parseInt(params.id))
    comments[index].text=text

    return Response.json(comments[index])
}


export async function DELETE(request:Request,{params}:{params:Params}){
    
    const index=comments.findIndex(comment=>comment.id===parseInt(params.id))
    const deletedComment=comments[index]
    comments.splice(index,1) //index being the postion and 1 being the number of elements to be deleted
    return Response.json(deletedComment)
}