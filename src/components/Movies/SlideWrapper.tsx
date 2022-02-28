import React, {ReactNode} from "react";
import styled from "styled-components";

/*---> Component <---*/
function SlideWrapper({children, ...restProps}: PropsType){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

/*---> Interfaces <---*/
interface PropsType{
    children: ReactNode
        key: string
}

export default SlideWrapper