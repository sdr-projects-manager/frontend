import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user, { initialState as userState } from '@store/slices/usersSlice'

export interface IStore {
  user: typeof userState
}

export const rootReducer = combineReducers({
  user
})

export default configureStore({
  reducer: rootReducer
})
