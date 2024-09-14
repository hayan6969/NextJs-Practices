

function loading() {
  return (
   //creating a loading spinner using tailwind css

    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  )
}

export default loading