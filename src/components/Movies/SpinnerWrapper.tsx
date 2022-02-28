import React, {ReactNode} from "react";
import styled from "styled-components";

/*---> Component <---*/
function SpinnerWrapper({children}: PropsType){
    return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
    /* border: 1px solid red; */
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

/*---> Interfaces <---*/
interface PropsType{
    children: ReactNode
}

export default SpinnerWrapper