import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { House, HouseName, updateHousePoints } from "../store/houses"
import HouseCard from "./HouseCard"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import HogwartsBanners from "../icons/HogwartsBanners"
import HogwartsLogo from "../icons/hogwarts-logo.png"

const animations = {
    open: {
        opacity: 1,
        y: 0,
        zIndex: 1100,
        transition: {
            duration: 0.1,
            opacity: {
                ease: 'linear',
                duration: 0.2,
            },
        },
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.1,
            opacity: {
                ease: 'linear',
                duration: 0.1,
                delay: 0.1,
            },
        },
        transitionEnd: {
            zIndex: -1,
        },
    },
}

type HousePointsWidgetProps = {
    houses: House[]
}

const HousePointsWidget: React.FC<HousePointsWidgetProps> = ({ houses }) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch<AppDispatch>()

    async function updateSelectedHousePoints(houseName: HouseName, points: number) {

        let foundHouse = houses.find((house) => house.houseName === houseName) as House

        foundHouse = {houseName: foundHouse.houseName, points: foundHouse.points + points}

        const housesToUpdate = houses.map((house) => house.houseName !== houseName ? house : foundHouse)

        await dispatch((updateHousePoints(housesToUpdate)))
    }

    return (
        <HousePointsContainer>
            <HouseIconContainer onClick={() => setIsOpen(!isOpen)}>
                <HogwartLogoWrapper src={HogwartsLogo} />
            </HouseIconContainer>
            <HouseContainer
                variants={animations}
                layout
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            >
                <BannerContainer>
                    <HogwartsBanners />
                </BannerContainer>
                <HouseCardWrapper>
                    {houses?.map((house) => (
                        <HouseCard
                            updateHousePoints={(houseName, points) => updateSelectedHousePoints(houseName, points)}
                            key={house.houseName}
                            house={house} />
                    ))}
                </HouseCardWrapper>
            </HouseContainer>
        </HousePointsContainer>
    )

}

export default HousePointsWidget

const HogwartLogoWrapper = styled.img`
 width: 3rem;
 height: 3rem;
`

const HouseCardWrapper = styled.div`
 display: flex;
 flex-direction: row;
`

const BannerContainer = styled.div`
 display: flex;
 width: 40rem;
 height: 40rem;
`

const HousePointsContainer = styled.div`
 display: flex;
 position: relative;
 align-items: baseline;
 margin-left: auto;
`

const HouseIconContainer = styled.div`
 margin-right: 1rem;
 &:hover {
    cursor: pointer;
 }
`

const HouseContainer = styled(motion.div)`
 top: calc(100% + 2rem);
 position: absolute;
 background-color: white;
 box-shadow: 0 10px 10px 0 rgba(77,77,79,0.08),0 0 10px 0 rgba(77,77,79,0.16);
 border-radius: 1rem;
 right: 0;
 display: flex;
 flex-direction: column;
 overflow: hidden;
 height: 40rem;
 z-index: 100;
`

const HouseTitle = styled.div`
 display: flex;
 font-size: 1.6rem;
 border-bottom: 0.1rem solid grey;
 color: black;
 justify-content: center;
`