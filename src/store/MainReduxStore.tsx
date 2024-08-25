import { configureStore } from "@reduxjs/toolkit";
import { MandalReducer } from "./MandalDataSlice";

export const MainStoreFun = () => {
  return configureStore({
    reducer: {
      MandalDataReducer: MandalReducer,
    },
  });
};
export type AppStore = ReturnType<typeof MainStoreFun>;
export type SelectorType = ReturnType<AppStore["getState"]>;
export type DispatchType = AppStore["dispatch"];
