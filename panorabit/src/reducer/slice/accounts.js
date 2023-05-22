import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accountList: [],
}

export const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        insertUsers: (state, action) => {
            state.accountList = action.payload
        },
    },
})

export const { insertUsers } = accountSlice.actions
export default accountSlice.reducer
