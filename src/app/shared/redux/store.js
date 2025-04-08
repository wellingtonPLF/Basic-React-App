import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './reducers.js'

const rootReducer = {
    usuarioRedux: usuarioReducer,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store;