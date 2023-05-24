import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {
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
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = { ...state.userInfo, ...action.payload }
        },
    },
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer
