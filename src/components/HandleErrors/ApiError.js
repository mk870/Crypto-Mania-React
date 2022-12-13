import React from 'react'
import { ErrorStyles } from './ErrorStyles'

const ApiError = ({error}) => {
  return (
    <ErrorStyles>
      <h1 className='error'>{error}</h1>
    </ErrorStyles>
  )
}

export default ApiError