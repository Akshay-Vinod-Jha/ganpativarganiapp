"use client";
import { useSelector } from "react-redux";
import { DispatchType, SelectorType } from "./MainReduxStore";
import { useDispatch } from "react-redux";

export const useEditedSelectorHook = useSelector.withTypes<SelectorType>();
export const useEditedDispatchHook = useDispatch.withTypes<DispatchType>();
