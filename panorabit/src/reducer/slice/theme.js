import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dark: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            state.dark = !state.dark
        },
    },
})

export const { toggle } = themeSlice.actions
export default themeSlice.reducer
