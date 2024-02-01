import React from 'react'

function DisplayData(props) {
  return (
    <div>
      <h1>{props.FirstName}</h1>
      <h1>{props.LastName}</h1>
    </div>
  )
}

export default DisplayData
