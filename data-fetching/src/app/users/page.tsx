type Users ={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}



async function  page() {
    await new Promise((resolve)=>setTimeout(resolve,3000))
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users =await response.json()
    console.log(users)
  return (
    <h1>
       {
        users.map((user:Users)=>{
            return <div className="m-1 border-2 border-red p-1" key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
                <h4>{user.phone}</h4>
            </div>
        })
       }
    </h1>
  )
}

export default page