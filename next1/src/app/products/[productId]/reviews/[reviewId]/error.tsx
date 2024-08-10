"use client"
import React from 'react'

function ErrorBoundary({error,reset}:{error:Error,reset: ()=>void}) {
  return (
    <div>
      {error.message}
    <button className='border-2 border-white' onClick={()=>{
      console.log("resetting");
      reset();
    }}>Try again</button>
    </div>
  )
}

export default ErrorBoundary