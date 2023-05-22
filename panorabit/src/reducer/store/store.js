import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slice/theme'
import accountReducer from '../slice/accounts'
import loaderReducer from '../slice/Loader'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        account: accountReducer,
        loader: loaderReducer,
    },
})
