import styled from "styled-components"
import { useEffect, useState } from "react"
import LoadingCover from "../components/LoadingCover"
import useFetchHouses from "../hooks/useFetchHouses"
import HogwartsHeader from "../components/HogwartsHeader"
import { motion } from "framer-motion"
import CloakLeft from "../icons/CloakLeft"
import CloakRight from "../icons/CloakRight"

const Presentation: React.FC = ({ }) => {

    const [loadingHouses, houses, loadHouses] = useFetchHouses()

    const [slideNumber, setSlideNumber] = useState<number>(0)

    useEffect(() => {
        if (houses?.length < 1) {
            loadHouses()
        }
    }, [])

    const slideInfoArray: string[][] = [
        ["About Me", "I like playing games", "I like making my own games", "I love tech", "I started at IQ in 2021 with BasIQs", "I learnt React/Typescript on my first project (Multigate)", "Staying active, hiking, gym, movies, piano, coffee"],
        ["React", "Javascript library for web and native interfaces", "Developed by the Zuck (meta)", "Can be used with frameworks", "React offers flexibility, concerned with rendering the UI", "Can leverage other libraries and tools", "Can be quickly incorporated into other projects", "Learning curve is pretty low", "Efficient", "Native support for both iOS and Android"],
        ["React Continued", "There are limitations", "Manual integration for several components", "Libraries are specialised", "Larger projects lack conformity that frameworks provide"],
        ["POINTS", "Earn points for your house:", "Spot improvements to styling, function, performance, etc"],
        ["React Basics", "Routing", "APIs", "State management", "Hooks - custom and built-in", "tsx/jsx", "Semantic HTML, styled components, and CSS", "Conditional rendering (?, &&)", "Controlled/uncontrolled components"],
        ["Practical"]
    ]

    return (
        <>
            {loadingHouses && (
                <LoadingCover />
            )}
            <HogwartsHeader
                houses={houses}
            />
            <PresentationContainer>
                <ArrowContainer onClick={() =>
                    setSlideNumber(slideNumber - 1)}
                    disabled={slideNumber === 0}
                >
                    <CloakLeft />
                </ArrowContainer>
                <SlideContainer>
                    {slideInfoArray[slideNumber].map((slide, index) => (
                        index === 0 ? (
                            slide
                        ) : (
                            <SlideWrapper key={slide}>
                                {slide}
                            </SlideWrapper>
                        )
                    ))}
                </SlideContainer>
                <ArrowContainer onClick={() =>
                    setSlideNumber(slideNumber + 1)}
                    disabled={slideNumber === slideInfoArray.length - 1}
                >
                    <CloakRight />
                </ArrowContainer>
            </PresentationContainer>
        </>
    )
}

const SlideContainer = styled.div`
 padding: 3rem;
 display: flex;
 flex-direction: column;
 align-items: baseline;
 color: black;
 font-size: 3rem;
`

const SlideWrapper = styled.li` 
  color: black;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`

const ArrowContainer = styled.div<{ disabled: boolean }>`
 display: flex;
 width: 2rem;
 height: 2rem;
 align-self: center;
 opacity: 0.5;
 transition: opacity 0.5s ease-out;
 &:hover {
    opacity: 1;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
 }
 pointer-events: ${(props) => props.disabled ? 'none' : 'initial'};
`

const PresentationContainer = styled(motion.div)`
 background-color: white;
 box-shadow: 0 2px 2px 0 rgba(77,77,79,0.08),0 0 2px 0 rgba(77,77,79,0.16);
 border-radius: 1rem;
 right: 0;
 display: flex;
 flex-direction: row;
 height: 40rem;
 width: 60rem;
 justify-content: space-between;
`

export default Presentation