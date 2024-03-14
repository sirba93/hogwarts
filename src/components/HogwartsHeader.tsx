import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { House } from "../store/houses"
import HousePointsWidget from "./HousePointsWidget"
import ElderWand from "../icons/elder-wand.png"

type HeaderProps = {
    houses: House[]
}

const HogwartsHeader: React.FC<HeaderProps> = ({ houses }) => {
    const navigate = useNavigate()

    return (
        <HeaderWrapper>
            <WandContainer onClick={() => navigate('/characters')} >
                <WandImageWrapper src={ElderWand} />
            </WandContainer>
            <SomText onClick={() => navigate('/')}>Hogwarts</SomText>
            <HousePointsWidget houses={houses} />
        </HeaderWrapper>
    )
}

export default HogwartsHeader

const WandImageWrapper = styled.img`
 width: 3rem;
 height: 3rem;
`

const WandContainer = styled.div`
 margin-left: 1rem;
 &:hover {
    cursor: pointer;
 }
`

const SomText = styled.div`
 font-size: clamp(1rem, 5vw, 7rem);
 color: black;
 align-self: center;
 padding: 1rem;
 font-family: ParryHotter;
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
 align-items: center;
`