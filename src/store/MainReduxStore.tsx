import { configureStore } from "@reduxjs/toolkit";
import { MandalReducer } from "./MandalDataSlice";
import { SelectedVarganiSliceReducer } from "./SelectedVarganiSlice";

export const MainStoreFun = () => {
  return configureStore({
    reducer: {
      MandalDataReducer: MandalReducer,
      SelectedVarganiReducer: SelectedVarganiSliceReducer,
    },
  });
};
export type AppStore = ReturnType<typeof MainStoreFun>;
export type SelectorType = ReturnType<AppStore["getState"]>;
export type DispatchType = AppStore["dispatch"];
