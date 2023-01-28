import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  searchValue: string
}

const initialState: CounterState = {
    searchValue: '',
}

export const searchSlice: any = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    searchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchValue } = searchSlice.actions

export default searchSlice.reducer