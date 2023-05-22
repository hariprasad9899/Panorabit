import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuOptions: {
        profile: true,
        posts: false,
        gallery: false,
        todo: false,
    },
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuState(state, action) {
            state.menuOptions = {
                ...initialState,
                profile: false,
                [action.payload]: true,
            }
        },
    },
})

export const { setMenuState } = menuSlice.actions
export default menuSlice.reducer
