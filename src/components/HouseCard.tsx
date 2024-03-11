import styled from "styled-components"
import { House, HouseName } from "../store/houses"
import StarIcon from "../icons/starIcon"

type HouseCardProps = {
    house: House
    updateHousePoints: (houseName: HouseName, points: number) => void
}

const HouseCard: React.FC<HouseCardProps> = ({
    house,
    updateHousePoints
}) => {
    return (
        <InfoWrapper>
            <HouseContainer>
                <TitleText>{house.houseName}</TitleText>
                <PointsWrapper>
                    {house.points}
                </PointsWrapper>
            </HouseContainer>
            <ButtonsWrapper>
                <PointsButtonWrapper onClick={() => updateHousePoints(house.houseName, -5)}>
                    -
                </PointsButtonWrapper>
                5
                <PointsButtonWrapper onClick={() => updateHousePoints(house.houseName, 5)}>
                    +
                </PointsButtonWrapper>
            </ButtonsWrapper>
        </InfoWrapper>
    )
}

export default HouseCard

const InfoWrapper = styled.div`
 display: flex;
 flex-direction: column;
`

const HouseContainer = styled.div`
 display: flex;
 width: 10rem;
 flex-direction: column;
 justify-content: space-between;
`

const TitleText = styled.div`
 color: black;
 font-size: 0.9rem;
`

const PointsWrapper = styled.div`
 display: flex;
 color: black;
 align-self: center;
`

const PointsButtonWrapper = styled.div`
 display: flex;
 color: black;
 opacity: 0.5;
 transition: opacity 0.5s ease-out;
 &:hover {
    opacity: 1;
    cursor: pointer;
 }
`

const ButtonsWrapper = styled.div`
 display: flex;
 font-size: 0.9rem;
 color: black;
 justify-content: space-evenly;
`