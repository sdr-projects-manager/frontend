import { configureStore, combineReducers } from '@reduxjs/toolkit'
import users, { initialState as usersState } from '@store/slices/usersSlice'
import authorisation, {
  initialState as authorisationState
} from '@store/slices/authorisationSlice'

export interface IStore {
  users: typeof usersState
  authorisation: typeof authorisationState
}

export const rootReducer = combineReducers({
  users,
  authorisation
})

export default configureStore({
  reducer: rootReducer
})
