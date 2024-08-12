import Link from "next/link"

function F4() {
  return (
    <>
    <h1>F4 page</h1>
    <div>
        
        <Link href={"/f1/f3"}>Link to F3</Link>
    </div>
    </>
  )
}

export default F4