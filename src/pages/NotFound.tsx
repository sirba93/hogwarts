import { PictureWrapper } from "./Presentation"
import Snape from "../pictures/snape.jpg"
import styled from "styled-components"

const NotFound: React.FC = () => {
    return (
        <>
            <PictureWrapper src={Snape} />
            <NotFoundTextWrapper>Clearly, routing isn't everything</NotFoundTextWrapper>
        </>
    )
}

export default NotFound

const NotFoundTextWrapper = styled.div`
 color: black;
 font-size: 3rem;
`