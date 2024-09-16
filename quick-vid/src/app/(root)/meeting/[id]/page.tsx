import React from 'react'

const Meeting = ({params}:{params:{id:string}}) => {
  return (
    <div>
      Meeting room no. {params.id}
    </div>
  )
}

export default Meeting
