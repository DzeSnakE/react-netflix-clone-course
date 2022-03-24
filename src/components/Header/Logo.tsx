import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

/*---> Component <---*/
const Logo = () => {
  const history = useNavigate()

  return (
    <Image
      src='/images/misc/logo.svg'
      alt='Netflix logo'
   />
  )
}

/*---> Component <---*/
export const Image = styled.img`
  height: 32px;
  width: 108px;
  cursor: pointer;
`

export default Logo
