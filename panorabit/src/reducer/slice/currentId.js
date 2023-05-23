import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentId: 0,
}

export const idSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        setCurrentID: (state, action) => {
            state.currentId = action.payload
        },
    },
})

export const { setCurrentID } = idSlice.actions
export default idSlice.reducer
