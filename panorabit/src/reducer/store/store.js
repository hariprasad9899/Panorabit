import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../slice/menu'
import idReducer from '../slice/currentId'
import userInfoReducer from '../slice/userSlice'
import userListReducer from '../slice/userList'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        id: idReducer,
        userInfo: userInfoReducer,
        userList: userListReducer,
    },
})
