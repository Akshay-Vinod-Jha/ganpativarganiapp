import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type MandalDataType = {
  mandalname: string | null;
  mandallocation: string | null;
  mandaldate: string | null;
  mandaluid: string | null;
};
const data: MandalDataType = {
  mandalname: null,
  mandallocation: null,
  mandaldate: null,
  mandaluid: null,
};
const mandalDataReduz = createSlice({
  name: "mandalDataReduz",
  initialState: {
    wholeInfo: data,
  },
  reducers: {
    setMandalData(state, action: PayloadAction<MandalDataType>) {
      state.wholeInfo = action.payload;
    },
  },
});
export const MandalDataActions = mandalDataReduz.actions;
export const MandalReducer = mandalDataReduz.reducer;
