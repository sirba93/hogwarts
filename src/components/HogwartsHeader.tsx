import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { House } from "../store/houses"
import HousePointsWidget from "./HousePointsWidget"

type HeaderProps = {
    houses: House[]
}

const HogwartsHeader: React.FC<HeaderProps> = ({houses}) => {
    const navigate = useNavigate()
    
    return (
        <HeaderWrapper>
            <HeaderTitle onClick={() => navigate('/')}>HOGWARTS</HeaderTitle>
            <HousePointsWidget houses={houses} />
        </HeaderWrapper>
    )
}

export default HogwartsHeader

const HeaderTitle = styled.div`
 font-size: clamp(1rem, 4vw, 5rem);
 color: black;
 align-self: center;
 padding: 1rem;
 font-family: Telugu MN;
 text-transform: capitalize;
 font-weight: 900;
 &:hover {
    cursor: pointer;
 }
 margin-left: auto;
`

const HeaderWrapper = styled.div`
 display: flex;
 height: 5rem;
 padding: 1rem 0rem 1rem 0rem;
 width: 100%;
 background-color: whitesmoke;
`