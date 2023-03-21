import React from 'react'

const Error = ({ msj }) => {
  return (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
      <strong className='font-bold'>{msj}</strong>
    </div>
  )
}

export default Error
