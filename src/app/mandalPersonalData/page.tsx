"use client";
import OrangeButton from "@/components/common/OrangeButton";
import InfoPart from "@/components/personalMandalData/InfoPart";
import IssuePart from "@/components/personalMandalData/IssuePart";
import { MandalDataType } from "@/store/MandalDataSlice";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function MandalPersonalDataPage() {
  const route = useRouter();
  const [data, setdata] = useState<null | MandalDataType>(null);
  const EntireMandal = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo
  );
  useEffect(() => {
    setdata(
      EntireMandal
        ? EntireMandal
        : JSON.parse(localStorage.getItem("mymandaldata")!)
        ? JSON.parse(localStorage.getItem("mymandaldata")!)
        : null
    );
  }, [EntireMandal]);
  return (
    <div className="w-full p-2 font-bold tracking-wide text-base md:text-xl lg:text-2xl md:w-[70%] lg:w-[50%] flex justify-center items-center flex-col gap-2">
      {!data && (
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <IssuePart />
          <OrangeButton
            title="Check The Issue"
            width=""
            clickHandler={() => {
              route.push("/Problem");
            }}
          />
        </div>
      )}
      {data && <InfoPart />}
    </div>
  );
}
