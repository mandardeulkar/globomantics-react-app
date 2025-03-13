import React from 'react'

const DisplayComponent = ({ data, onBack }) => {
  return (
    <div>
      <h2>Form Data:</h2>
      <p>Username: {data.username}</p>
      <p>Message: {data.useraddress}</p>
      <p>Gender: {data.usergender}</p>
      <p>Agree: {data.useragreement ? 'Yes' : 'No'}</p>
      <button onClick={onBack}>Back</button>
    </div>
  )
}

export default DisplayComponent