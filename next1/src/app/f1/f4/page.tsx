import Link from "next/link"

function F4() {
  return (
    <>
    <h1>F4 page</h1>
    <div className="flex flex-col justify-between">
        
        <Link href={"/f1/f3"}>Link to F3</Link>
        <Link href={"/about"}>About</Link> 

    </div>
    </>
  )//intercepted route for the about route in the route directory by using (...)
}

export default F4