import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import LoadingCover from "../components/LoadingCover"
import useFetchHouses from "../hooks/useFetchHouses"
import CharacterCard from "../components/CharacterCard"
import HogwartsHeader from "../components/HogwartsHeader"
import useFetchCharacters from "../hooks/useFetchCharacters"

const CharacterList: React.FC = ({ }) => {

    const navigate = useNavigate()

    const [loadingCharacters, characters] = useFetchCharacters()

    const [loadingHouses, houses, loadHouses] = useFetchHouses()

    useEffect(() => {
        if (houses.length < 1) {
            loadHouses()
        }
    }, [])

    return (
        <>
            <HogwartsHeader
                houses={houses}
            />
            {loadingCharacters && (
                <LoadingCover />
            )}
            {characters?.length > 0 && (
                <CharacterCardContainer>
                    {characters.map((character) =>
                        <CharacterCard
                            clickItem={() => navigate('/detail', {
                                state: {
                                  characterId: character.id,
                                }
                              })}
                            key={character.id}
                            character={character}
                        />
                    )}
                </CharacterCardContainer>
            )
            }
        </>
    )
}

const CharacterCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;
`

export default CharacterList