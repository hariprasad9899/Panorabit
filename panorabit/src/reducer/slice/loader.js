import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    apiLoaded: false,
}

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setApiLoaded: (state) => {
            state.apiLoaded = true
        },
    },
})

export const { setApiLoaded } = loaderSlice.actions
export default loaderSlice.reducer
