import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slice/theme'
import accountReducer from '../slice/accounts'
import loaderReducer from '../slice/Loader'
import menuReducer from '../slice/menu'
import idReducer from '../slice/currentId'
import userReducer from '../slice/userInfo'
import userInfoReducer from '../slice/userSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        account: accountReducer,
        loader: loaderReducer,
        menu: menuReducer,
        id: idReducer,
        user: userReducer,
        userInfo: userInfoReducer,
    },
})
