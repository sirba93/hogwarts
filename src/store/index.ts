import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import houses from "./houses"
import characters from "./characters"
import spells from "./spells"

export const store = configureStore({
    reducer: {
        houses,
        characters,
        spells
    }
})

export type RootState = ReturnType<typeof store.getState>
export type RootStore = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<
 ReturnType,
 RootState,
 unknown,
 Action<string>
>
export type AppDispatch = typeof store.dispatch