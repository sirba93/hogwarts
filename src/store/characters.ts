import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "."
import { HouseName } from "./houses"
import { getAllCharacters, getCharacterById, getCharacters, getCharactersByHouse } from "../api/characters"
import { CharacterType } from "../api/types"

export type Character = {
    id: string,
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: HouseName,
    dateOfBirth: Date,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: Wand,
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: string[],
    alive: boolean,
    image: string
}

export type Wand = {
    wood: string,
    core: string,
    length: number
}

type CharacterState = {
    loading: boolean
    items: Character[]
    item: Character | undefined
}

const initialState: CharacterState = {
    loading: false,
    items: [],
    item: undefined
}

const slice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        },
        setItems: (state, action: PayloadAction<Character[]>) => {
            state.items = action.payload
        },
        setItem: (state, action: PayloadAction<Character>) => {
            state.item = action.payload
        },
    }
})

export const selectCharacters = (state: RootState): CharacterState => state.characters

export default slice.reducer

const {
    startLoading,
    stopLoading,
    setItems,
    setItem
} = slice.actions

export const fetchAllCharacters = (): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    const { data } = await getAllCharacters()

    dispatch(setItems(data))

    dispatch(stopLoading())
}

export const fetchAllCharactersByType = (characterType: CharacterType): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    const { data } = await getCharacters(characterType)

    dispatch(setItems(data))

    dispatch(stopLoading())
}

export const fetchAllCharactersByHouse = (houseName: HouseName): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    const { data } = await getCharactersByHouse(houseName.toLowerCase())

    dispatch(setItems(data))

    dispatch(stopLoading())
}

export const fetchCharacterById = (id: string): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    const { data } = await getCharacterById(id)

    dispatch(setItem(data))

    dispatch(stopLoading())
}