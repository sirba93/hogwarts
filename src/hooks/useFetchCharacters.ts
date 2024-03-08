import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store"
import { Character, selectCharacters, fetchAllCharacters } from "../store/characters"

const useFetchCharacters = (): [boolean, Character[]] => {
    const dispatch = useDispatch<AppDispatch>()

    const { loading, items } = useSelector(selectCharacters)

    useEffect(() => {
        ;(async () => {
            await dispatch(fetchAllCharacters())
        })()
    }, [])

    return [loading, items]
}

export default useFetchCharacters