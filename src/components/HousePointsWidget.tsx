import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { House, HouseName, updateHousePoints } from "../store/houses"
import Scrollbars from "rc-scrollbars"
import HouseCard from "./HouseCard"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"

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

    async function updateSelectedHousePoints(houseName: HouseName) {

        let housesToUpdate = { ...houses }

        await dispatch((updateHousePoints(housesToUpdate)))
    }

    return (
        <HousePointsContainer>
            <HouseIconContainer onClick={() => setIsOpen(!isOpen)}>
                Insert Hogwarts Icon here
                Houses
            </HouseIconContainer>
            <HouseContainer
                variants={animations}
                layout
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            >
                {houses?.map((house) => (
                    <HouseCard
                        updateHousePoints={(houseName) => updateSelectedHousePoints(houseName)}
                        key={house.houseName}
                        house={house} />
                ))}
            </HouseContainer>
        </HousePointsContainer>
    )

}

export default HousePointsWidget

const HousePointsContainer = styled.div`
 display: flex;
 position: relative;
 align-items: baseline;
 margin-left: auto;
`

const HouseIconContainer = styled.div`
 width: 3rem;
 height: 4rem;
 padding: 1rem 0rem 1rem 1rem;
 font-size: 1rem;
 color: black;
 &:hover {
    cursor: pointer;
 }
`

const HouseContainer = styled(motion.div)`
 top: calc(100% + 2rem);
 position: absolute;
 background-color: white;
 box-shadow: 0 2px 2px 0 rgba(77,77,79,0.08),0 0 2px 0 rgba(77,77,79,0.16);
 border-radius: 1rem;
 border: 0.1rem solid grey;
 right: 0;
 display: flex;
 flex-direction: row;
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