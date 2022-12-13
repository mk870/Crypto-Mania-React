import React from 'react'
import { LoaderStyles } from './LoaderStyles'
import { Oval } from  'react-loader-spinner'

const Spinner = () => {
  return (
    <LoaderStyles>
      <Oval
        height="200"
        width="200"
        color="#00BFFF"
        ariaLabel='loading'
      />
    </LoaderStyles>
  )
}

export default Spinner