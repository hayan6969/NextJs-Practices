import { notFound } from "next/navigation"
function page({params}:{params:{productId:string,reviewId:string}}) {
 
    if(parseInt(params.reviewId) > 1000){
       notFound();
    }
    else{
    return (
 
        <h1>Review {params.reviewId} for product {params.productId}</h1>
    )
    }
 
}

export default page