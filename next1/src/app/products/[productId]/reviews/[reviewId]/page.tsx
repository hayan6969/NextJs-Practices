import { notFound } from "next/navigation"


function getRandomint(count:number){
    return Math.floor(Math.random()*count);
}
function page({params}:{params:{productId:string,reviewId:string}}) {
 const random=getRandomint(2);
 if(random===1){
    throw new Error("Error loading review");
 }
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