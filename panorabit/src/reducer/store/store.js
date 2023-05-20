import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../slice/theme'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})
