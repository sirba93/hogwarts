import styled from "styled-components"
import { useEffect, useState } from "react"
import LoadingCover from "../components/LoadingCover"
import useFetchHouses from "../hooks/useFetchHouses"
import HogwartsHeader from "../components/HogwartsHeader"
import { motion } from "framer-motion"
import CloakLeft from "../icons/CloakLeft"
import CloakRight from "../icons/CloakRight"
import Subashker from "../pictures/SubashkerMoodley.jpg"
import BeginningEndMeme from "../pictures/beginning-end-meme.jpg"
import PointsMeme from "../pictures/points-meme.jpg"
import NodeEnvMeme from "../pictures/node-environment-meme.jpg"
import ReactAngularMeme from "../pictures/react-angular-learning-curve-meme.jpeg"
import SemiColonMeme from "../pictures/semi-colon-meme.webp"
import JSXMeme from "../pictures/jsx-meme.jpg"
import CSSMeme from "../pictures/css-meme.png"
import TriggerRenderCommit from "../pictures/trigger-render-commit.png"
import StateUpdateRender from "../pictures/stateupdate-triggers-render.png"
import MutateStateMeme from "../pictures/mutate-state-meme.png"

const Presentation: React.FC = ({ }) => {

    const [loadingHouses, houses, loadHouses] = useFetchHouses()

    const [slideNumber, setSlideNumber] = useState<number>(0)

    useEffect(() => {
        if (houses?.length < 1) {
            loadHouses()
        }
    }, [])

    const slideInfoArray: string[][] = [
        ["The Magic of React", "By Subashker Moodley", Subashker],
        ["About Me", "I like playing games", "I like making my own games", "I love tech", "Staying active, hiking, gym, movies, piano, coffee", "I started at IQ in 2021 with BasIQs", "I learnt React and Typescript on my first project (Multigate)"],
        ["This is me at Multigate", BeginningEndMeme],
        ["What is React?", "Javascript/Typescript UI library for web and native interfaces", "Developed by Meta/Facebook", "Can be used with frameworks (Next.js, Remix, Gatsby, Expo)", "Native support for both iOS and Android", "Components represent logical re-usable parts of the UI"],
        ["What is Typescript?", SemiColonMeme],
        ["What is Typescript", "Strongly typed syntactic superset of Javascript", "Transpiles to Javascript", "In-line type annotations", "Compiler reports errors at compile time, not run time", "Advantages of an OOP"],
        ["React Pros", "React offers flexibility, concerned only with rendering the UI", "Can leverage other libraries and tools - freedom of choice", "Learning curve is pretty low", "Time efficient - fast and... Reactive", "Space efficient", "Easily incorporated into other projects - npm install react react-dom"],
        ["React Pros", NodeEnvMeme],
        ["React Cons", "Manual integration for several components", "Frameworks have pre-built tools and processes", "Frameworks have robust ecosystems", "Frameworks have pre-determined design patterns", "Larger projects lack conformity that frameworks provide"],
        ["React Cons", ReactAngularMeme],
        ["POINTS", "Spot improvements to styling, function, performance, etc", PointsMeme],
        ["React Basics", "Folder structure", "Routing", "tsx/jsx"],
        ["React Basics", JSXMeme],
        ["React Basics Continued", "State management", TriggerRenderCommit, StateUpdateRender],
        ["React Basics Continued", "Hooks - custom and built-in", MutateStateMeme],
        ["React Basics Continued", "Semantic HTML, styled components, and CSS", "Conditional rendering (?, &&)", CSSMeme],
        ["Practical", "Create a page", "Use the spells hook to fetch spells", "Return HTML", "Bonus points for styling", "Display spell info"],
        ["QA"],
        ["Thank you, Masterclass Committee!"],
        ["THE END"]
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
                <ItClicksIGuess onClick={() =>
                    setSlideNumber(slideNumber - 1)}
                    disabled={slideNumber === 0}
                >
                    <CloakLeft />
                </ItClicksIGuess>
                <SlideContainer>
                    {slideInfoArray[slideNumber].map((slide, index) => (
                        index === 0 ? (
                            slide
                        ) : (
                            slide.includes("media") ? (
                                <PictureWrapper src={slide} />
                            ) : (
                                <SlideWrapper key={slide}>
                                    {slide}
                                </SlideWrapper>
                            )
                        )
                    ))}
                </SlideContainer>
                <ItClicksIGuess onClick={() =>
                    setSlideNumber(slideNumber + 1)}
                    disabled={slideNumber === slideInfoArray.length - 1}
                >
                    <CloakRight />
                </ItClicksIGuess>
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
  padding-top: 0.8rem;
`

export const PictureWrapper = styled.img`
 padding-top: 0.8rem;
 max-width: 80%;
 max-height: 80%;
 align-self: center;
`

const ItClicksIGuess = styled.div<{ disabled: boolean }>`
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