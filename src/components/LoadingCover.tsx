import styled from "styled-components"

const LoadingCover: React.FC = () => {
    return (
        <LoadingCoverDisplay>
            <TextWrapper>
                Accio page!
            </TextWrapper>
        </LoadingCoverDisplay>
    )
}

export default LoadingCover

const LoadingCoverDisplay = styled.div`
 width: 120%;
 height: 120%;
 z-index: 1000;
 position: absolute;
 background-color: white;
`

const TextWrapper = styled.div`
 font-size: 5rem;
 color: black;
 transform: translateY(calc(100% + 2rem));
`