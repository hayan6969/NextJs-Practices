import { Metadata } from "next"  //type metadata

//dynamic routes in next js
type Props={
  params:{
    productId: String
  }
}
export const generateMetadata=({params}:Props):Metadata => {
  return {
    title: `Product ${params.productId}`,
  }
}

function page({params}:Props) {   //params is an object that contains the dynamic route parameters
  return (   //the paran tyoe defination says its an object that contains a key productId of type string
    <div>product details {params.productId}</div>
  )
}

export default page