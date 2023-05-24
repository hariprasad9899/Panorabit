import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import server from '../../../server'

const defaultState = {
    id: 1,
    name: '',
    username: '',
    email: '',
    profilepicture: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: '',
        },
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: '',
    },
}

const initialState = {
    isLoading: false,
    requestedUserInfo: {
        ...defaultState,
    },
    error: '',
}

const fetchUsers = createAsyncThunk('users/fetchUsers', async (userID) => {
    try {
        console.log(userID)
        const response = await server.get(`/profile/${userID}`)
        return response.data.users.filter((item) => {
            return item.id == userID
        })[0]
    } catch (error) {
        // Handle any error
        throw new Error('Error fetching user data')
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.requestedUserInfo = {
                ...state.requestedUserInfo,
                ...action.payload,
            }
            state.isLoading = false
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.requestedUserInfo = { ...state }
        })
    },
})

export { fetchUsers }
export default userSlice.reducer
