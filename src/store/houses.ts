import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "."

export type House = {
    houseName: HouseName
    points: number
}

export type HouseName = 'Slytherin' | 'Gryffindor' | 'Hufflepuff' | 'Ravenclaw'

type HouseState = {
    loading: boolean
    items: House[]
}

const initialHouseNames: HouseName[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

const initialState: HouseState = {
    loading: false,
    items: []
}

const slice = createSlice({
    name: 'houses',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        stopLoading: (state) => {
            state.loading = false
        },
        setItems: (state, action: PayloadAction<House[]>) => {
            state.items = action.payload
        },
    }
})

export const selectHouses = (state: RootState): HouseState => state.houses

export default slice.reducer

const {
    startLoading,
    stopLoading,
    setItems
} = slice.actions

export const initialiseHouses = (): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    dispatch(setItems(initialHouseNames.map(mapHouseNamesToHouses)))

    dispatch(stopLoading())
}

export const updateHousePoints = (houses: House[]): AppThunk => async (dispatch) => {
    dispatch(startLoading())

    dispatch(setItems(houses))

    dispatch(stopLoading())
}

const mapHouseNamesToHouses = (houseName: HouseName): House => ({
    houseName: houseName,
    points: 0
})