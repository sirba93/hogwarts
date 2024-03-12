import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../store"
import { Spell, fetchAllSpells, selectSpells } from "../store/spells"

const useFetchSpells = (): [boolean, Spell[]] => {
    const dispatch = useDispatch<AppDispatch>()

    const { loading, items } = useSelector(selectSpells)

    useEffect(() => {
        ;(async () => {
            await dispatch(fetchAllSpells())
        })()
    }, [])

    return [loading, items]
}

export default useFetchSpells