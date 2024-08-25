"use client";
import { useRef } from "react";
import { AppStore, MainStoreFun } from "./MainReduxStore";
import { Provider } from "react-redux";

export default function ReduxBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = useRef<AppStore>();
  if (!store.current) {
    store.current = MainStoreFun();
  }
  return <Provider store={store.current}>{children}</Provider>;
}
