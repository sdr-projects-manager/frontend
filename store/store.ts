import { configureStore, combineReducers } from '@reduxjs/toolkit'
import users, { initialState as usersState } from '@store/slices/usersSlice'
import user, { initialState as userState } from '@store/slices/userSlice'

export interface IStore {
  users: typeof usersState
  user: typeof userState
}

export const rootReducer = combineReducers({
  users,
  user
})

export default configureStore({
  reducer: rootReducer
})
