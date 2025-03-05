import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Store {
  id: string;
  name: string;
}

interface StoresState {
  stores: Store[];
}

const initialState: StoresState = { stores: [] };

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<Store>) => {
      state.stores.push(action.payload);
    },
    removeStore: (state, action: PayloadAction<string>) => {
      state.stores = state.stores.filter(
        (store) => store.id !== action.payload
      );
    },
  },
});

export const { addStore, removeStore } = storesSlice.actions;
export default storesSlice.reducer;
