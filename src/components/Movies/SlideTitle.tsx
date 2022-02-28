import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SlideTitle({ children}: PropsType){
    return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
    font-size: 24px;
    color: #E5E5E5;
    font-weight: bold;
    margin-bottom: 20px;
    
    @media (max-width: 650px){
        text-align: center;
        }
`

/*---> Interfaces <---*/
interface PropsType{
    children: string
}

export default SlideTitle