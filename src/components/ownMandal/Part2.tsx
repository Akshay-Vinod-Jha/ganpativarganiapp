"use client";
import OrangeSpan from "../common/OrangeSpan";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
export default function Part2() {
  const name = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo.mandalname
  );
  return (
    <div className="w-full flex justify-center items-center text-center flex-col md:gap-2">
      <h1 className="text-xl font-bold tracking-wide md:text-2xl">
        your <OrangeSpan text="all records" size="" /> will be displayed here
      </h1>
      <div className="w-max bg-white rounded-md p-2">
        <OrangeSpan
          text={`🙏"${name}"🙏` as string}
          size="text-base font-bold tracking-widest md:text-lg"
        ></OrangeSpan>
      </div>
    </div>
  );
}
