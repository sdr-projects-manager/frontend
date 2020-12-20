import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUsers } from 'types/IUsers'

interface IUsersState {
  users: IUsers
}

export const initialState: IUsersState = { users: [] }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state: IUsersState, action: PayloadAction<IUsers>) {
      state.users = action.payload
    }
  }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer
