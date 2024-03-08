import styled from "styled-components"
import { Character } from "../store/characters"

type CharacterCardProps = {
    character: Character
    clickItem: (id: string) => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({
    character,
    clickItem
}) => {
    return (
        <CharacterContainer onClick={() => clickItem(character.id)}>
            <ImageContainer>
                <InnerImageContainer src={character.image} />
            </ImageContainer>
            <TitleText>{character.name}</TitleText>
            <DescriptionText>{character.house}</DescriptionText>
        </CharacterContainer>
    )
}

export default CharacterCard

const CharacterContainer = styled.div`
 display: flex;
 border-radius: 0.4rem;
 background-color: white;
 width: 10rem;
 height: 13rem;
 flex-direction: column;
 padding: 1rem;
 margin: 0 0 1rem 1rem;
 justify-content: space-between;
 box-shadow: 0 2px 2px 0 rgba(77,77,79,0.08),0 0 2px 0 rgba(77,77,79,0.16);
 &:hover {
    cursor: pointer;
 }
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