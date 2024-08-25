"use client";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import React from "react";
import LabelValueCombo from "../mandalPersonalData/LabelValueComb";
import OrangeButton from "../common/OrangeButton";
import { useRouter } from "next/navigation";
export type ValueType =
  | "mandalname"
  | "mandallocation"
  | "mandaluid"
  | "mandaldate";
export default function InfoPart() {
  const wholeInfo = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo
  );
  const router = useRouter();
  return (
    <div className="w-full md:w-[80%] lg:w-full text-base grid-rows-* grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-4 font-bold tracking-wide capitalize">
      {Object.keys(wholeInfo).map((value, index) => {
        return (
          <LabelValueCombo
            key={`${value} ${index}`}
            label={value}
            value={wholeInfo[`${value as ValueType}`]!}
          />
        );
      })}
      <OrangeButton
        title="Edit Mandal Data"
        width="w-full lg:col-span-2 lg:w-full"
        clickHandler={() => {
          router.push("/editMandalData");
        }}
      />
      <OrangeButton
        title="Return To Home Page"
        width="w-full lg:col-span-2 lg:w-full"
        clickHandler={() => {
          router.push("/");
        }}
      />
    </div>
  );
}
