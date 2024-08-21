import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CoinsState {
  value: number
}

const initialState: CoinsState = {
  value: 20,
}

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    addCoins: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    subtractCoins: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
  },
})

export const { setCoins, addCoins, subtractCoins } = coinsSlice.actions
export default coinsSlice.reducer
