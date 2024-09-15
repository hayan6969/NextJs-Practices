

type Products ={
    id:number;
    name:string;
    price:number;
    description:string;
}


async function page() {
   
    const response = await fetch ('http://localhost:3001/products',{
        cache:'no-store',
    })
    const products = await response.json()

  return (
    <>
    {
        products.map((product:Products)=>{
            return <div className="m-1 border-2 border-red p-1" key={product.id}>
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>{product.description}</h3>
               
            </div>
        })
    }

    </>
  )
}

export default page