"use client";
import OrangeButton from "@/components/common/OrangeButton";
import OrangeSpan from "@/components/common/OrangeSpan";
import AllComboiInput from "@/components/editMandalData/AllComboInputEle";
import { varganiindtype } from "@/components/ownMandal/Part3";
import {
  useEditedDispatchHook,
  useEditedSelectorHook,
} from "@/store/useEditedHooks";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { SelectedVarganiSliceActions } from "@/store/SelectedVarganiSlice";
import HandlePortal from "./HandlePortal";
export type StatusType = {
  error: boolean;
  success: boolean;
  checking: boolean;
};
export default function Edit() {
  const data = useEditedSelectorHook(
    (state) => state.SelectedVarganiReducer.selectedVargani
  );
  const primeData = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo.mandaluid
  );
  const dispatch = useEditedDispatchHook();
  const uidRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const onlineRef = useRef<HTMLInputElement>(null);
  const offlineRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<StatusType>({
    error: false,
    success: false,
    checking: false,
  });
  const arrayOfObject = [
    {
      keyName: "varganiuid",
      refValue: uidRef,
    },
    {
      keyName: "varganidate",
      refValue: dateRef,
    },
    {
      keyName: "varganionline",
      refValue: onlineRef,
    },
    {
      keyName: "varganioffline",
      refValue: offlineRef,
    },
    {
      keyName: "varganitotal",
      refValue: totalRef,
    },
  ];
  const router = useRouter();
  const submitHandler = async () => {
    setStatus({
      error: false,
      checking: true,
      success: false,
    });
    console.log(
      onlineRef.current?.value,
      offlineRef.current?.value,
      dateRef.current?.value
    );
    try {
      const response = await updateDoc(
        doc(
          db,
          `allavailablemandals/${primeData}/notedvargani`,
          data.varganiuid as string
        ),
        {
          varganidate: dateRef.current?.value,
          varganioffline: +offlineRef.current?.value!,
          varganionline: +onlineRef.current?.value!,
        }
      );
      console.log(response);
      console.log(
        `allavailablemandals/${primeData}/notedvargani/${data.varganiuid}`
      );
      console.log("successfully updated vargani");
      setStatus({
        error: false,
        checking: false,
        success: true,
      });
    } catch (error) {
      console.log("failed updating vargani");
      setStatus({
        error: true,
        checking: false,
        success: false,
      });
    } finally {
      dispatch(
        SelectedVarganiSliceActions.addSelectedVargani({
          varganidate: null,
          varganioffline: null,
          varganionline: null,
          varganitotal: null,
          varganiuid: null,
        })
      );
    }
  };
  return (
    <div className="w-full [word-spacing:2.5px] text-base md:text-lg justify-center items-center h-full flex flex-col gap-2 font-bold tracking-wide">
      <HandlePortal setStatus={setStatus} status={status} />
      {!data.varganiuid && (
        <>
          <h1>
            <OrangeSpan text="Something Went Wrong" size="" /> , Retry The Same
            Process...
          </h1>
          <OrangeButton
            title="Return To Home Page"
            width="w-max !px-8 !py-2"
            clickHandler={() => {
              router.push("/");
            }}
          />
        </>
      )}
      {data.varganiuid && (
        <div className="w-full font-bold tracking-wide capitalize  md:w-[70%] lg:w-[70%] h-full grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-4 p-2">
          {arrayOfObject.map((value, index) => {
            if (value.keyName !== "varganitotal") {
              return (
                <AllComboiInput
                  key={`${value.keyName} ${index}`}
                  label={value.keyName}
                  value={data[value.keyName as varganiindtype]! as string}
                  notInclude={["varganiuid", "varganitotal"]}
                  ref={value.refValue}
                  type={
                    ["varganionline", "varganioffline"].includes(value.keyName)
                      ? "number"
                      : ["varganidate"].includes(value.keyName)
                      ? "date"
                      : "text"
                  }
                />
              );
            } else {
              return null;
            }
          })}
          <button
            onClick={submitHandler}
            className="w-full col-span-1 border-2 border-black hover:bg-orange-400   lg:col-span-2 p-2 rounded-md text-white bg-orange-500"
          >
            Update Mandal Data
          </button>
          <OrangeButton
            clickHandler={() => {
              router.push("/");
            }}
            title="Go Back"
            width="col-span-1 border-2 border-black hover:bg-orange-400   lg:col-span-2 p-2 rounded-md text-white bg-orange-500 w-full"
          />
        </div>
      )}
    </div>
  );
}
