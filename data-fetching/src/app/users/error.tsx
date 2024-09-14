"use client"
function error({error}:{error:Error}) {
  return (
    //display error message in red colour
    <h1 className="text-red-500">
     Error Occured: {error.message}
    </h1>
  )
}

export default error