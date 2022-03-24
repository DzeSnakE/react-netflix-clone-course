import React, {useCallback} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

/*---> Component <---*/
const SigninButton = ({ children }: PropsType) => {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/signin', {replace: true}), [navigate]);

  return <LinkButton onClick={handleOnClick}>{children}</LinkButton>

}

/*---> Styles <---*/
export const LinkButton = styled.div`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
`

/*---> Interfaces <---*/
interface PropsType {
  children?: string
}

export default SigninButton
