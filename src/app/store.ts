import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { launchesApi } from '../service/launches'
import searchSlice from "../app/feature/searchSlice"

export const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer,
    search: searchSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)