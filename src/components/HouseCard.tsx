import styled from "styled-components"
import { House, HouseName } from "../store/houses"
import StarIcon from "../icons/starIcon"

type HouseCardProps = {
    house: House
    updateHousePoints: (houseName: HouseName) => void
}

const HouseCard: React.FC<HouseCardProps> = ({
    house,
    updateHousePoints
}) => {
    return (
        <InfoWrapper>
            <HouseContainer>
                <ImageContainer>
                    {/* <InnerImageContainer src={house image} /> */}
                </ImageContainer>
                <TitleText>{house.houseName}</TitleText>
                <PointsWrapper>
                    {house.points}
                </PointsWrapper>
            </HouseContainer>
            <PointsButtonsWrapper onClick={() => updateHousePoints(house.houseName)}>
                <StarIcon />
            </PointsButtonsWrapper>
        </InfoWrapper>
    )
}

export default HouseCard

const InfoWrapper = styled.div`
 display: flex;
`

const HouseContainer = styled.div`
 display: flex;
 border-radius: 0.4rem;
 background-color: white;
 width: 10rem;
 height: 12rem;
 flex-direction: column;
 padding: 1rem;
 margin: 0 0 1rem 1rem;
 justify-content: space-between;
`

const TitleText = styled.div`
 color: black;
 height: 2rem;
 font-size: 0.9rem;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
`

const DescriptionText = styled.div`
 color: darkgrey;
 height: 2rem;
 font-size: 0.8rem;
 overflow: hidden;
 text-overflow: ellipsis;
 text-align: left;
 white-space: nowrap;
`

const ImageContainer = styled.div`
 display: flex;
 width: 10rem;
 min-height: 7rem;
 justify-content: center;
`

const InnerImageContainer = styled.img`
 display: flex;
 object-fit: contain;
 max-width: 10rem;
 max-height: 7rem;
`

const PointsWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`

const PointsButtonsWrapper = styled.div`
 display: flex;
 width: 3rem;
 height: 3rem;
 padding: 1rem;
 opacity: 0.5;
 transition: opacity 0.5s ease-out;
 &:hover {
    opacity: 1;
    cursor: pointer;
 }
`