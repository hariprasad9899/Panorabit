import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import server from '../../../server'

const initialState = {
    isListLoading: false,
    loaded: false,
    userList: [],
    error: '',
}

const fetchUserList = createAsyncThunk('users/fetchUserList', async () => {
    try {
        const response = await server.get('/')
        return response.data.users
    } catch (error) {
        throw new Error('Error fetching user data')
    }
})

const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.pending, (state) => {
            state.isListLoading = true
        })
        builder.addCase(fetchUserList.fulfilled, (state, action) => {
            state.userList = action.payload
            state.isListLoading = false
            state.loaded = true
            state.error = ''
        })
        builder.addCase(fetchUserList.rejected, (state, action) => {
            state.isListLoading = false
            state.userList = []
        })
    },
})

export { fetchUserList }
export default userListSlice.reducer
