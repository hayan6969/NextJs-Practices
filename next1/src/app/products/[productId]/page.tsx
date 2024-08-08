//dynamic routes in next js


function page({params}:{params:{productId: String}}) {   //params is an object that contains the dynamic route parameters
  return (   //the paran tyoe defination says its an object that contains a key productId of type string
    <div>product details {params.productId}</div>
  )
}

export default page