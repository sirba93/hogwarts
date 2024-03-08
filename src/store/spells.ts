import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "."
import { getAllSpells } from "../api/spells"

export type Spell = {
    id: string,
    name: string,
    description: string
}

type SpellState = {
    loading: boolean
    items: Spell[]
    item?: Spell
}

const initialState: SpellState = {
    loading: false,
    items: [],
    item: undefined
}

const slice = createSlice({
    name: 'spells',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        },
        setItems: (state, action: PayloadAction<Spell[]>) => {
            state.items = action.payload
        },
        setItem: (state, action: PayloadAction<Spell>) => {
            state.item = action.payload
        },
    }
})

export const selectSpells = (state: RootState): SpellState => state.spells

export default slice.reducer

const {
    startLoading,
    stopLoading,
    setItems,
    setItem
} = slice.actions

export const fetchAllSpells = (): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    const { data } = await getAllSpells()

    dispatch(setItems(data))

    dispatch(stopLoading())
}