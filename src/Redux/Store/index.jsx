import { configureStore } from '@reduxjs/toolkit'

import articleReducer from '../Slice/index'

const store = configureStore({
    reducer: {
        articles: articleReducer,
    },
})

export default store