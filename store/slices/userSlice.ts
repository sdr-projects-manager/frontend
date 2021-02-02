import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPserProps {
  token: string
}

export const initialState: IPserProps = { token: '' }

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setToken(state: IPserProps, action: PayloadAction<string>) {
      state.token = action.payload
    }
  }
})

export const { setToken } = userSlice.actions
export default userSlice.reducer
