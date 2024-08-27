import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type dataType = {
  varganiuid: null | string;
  varganidate: null | string;
  varganionline: null | number;
  varganioffline: null | number;
  varganitotal: null | number;
};
const data: dataType = {
  varganiuid: null,
  varganidate: null,
  varganionline: null,
  varganioffline: null,
  varganitotal: null,
};
const SelectedVarganiSlice = createSlice({
  name: "SelectedVarganiSlice",
  initialState: {
    selectedVargani: data,
  },
  reducers: {
    addSelectedVargani(state, action: PayloadAction<dataType>) {
      state.selectedVargani = action.payload;
    },
  },
});
export const SelectedVarganiSliceActions = SelectedVarganiSlice.actions;
export const SelectedVarganiSliceReducer = SelectedVarganiSlice.reducer;
