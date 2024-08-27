"use client";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import { ValueType } from "@/components/personalMandalData/InfoPart";
import AllComboiInput from "@/components/editMandalData/AllComboInputEle";
import React, { useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import HandlePortalForEdit from "./HandalPortal";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
import { useEditedDispatchHook } from "@/store/useEditedHooks";
import { MandalDataActions } from "@/store/MandalDataSlice";
export default function EditMandalDataPage() {
  const dispatch = useEditedDispatchHook();
  const nameRef = useRef<HTMLInputElement>(null);
  const locationref = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const uidRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState({
    error: false,
    checking: false,
    success: false,
  });
  const SupportingData = [
    {
      keyName: "mandalname",
      refValue: nameRef,
    },
    {
      keyName: "mandallocation",
      refValue: locationref,
    },
    {
      keyName: "mandaldate",
      refValue: dateRef,
    },
    {
      keyName: "mandaluid",
      refValue: uidRef,
    },
  ];
  const wholeInfo = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo
  );
  const router = useRouter();
  const submitHandler = async () => {
    setStatus({
      error: false,
      checking: true,
      success: false,
    });
    console.log(
      nameRef.current?.value,
      locationref.current?.value,
      dateRef.current?.value,
      uidRef.current?.value
    );
    try {
      const response = await updateDoc(
        doc(db, "allavailablemandals", uidRef.current?.value as string),
        {
          mandaldate: dateRef.current?.value,
          mandallocation: locationref.current?.value,
          mandalname: nameRef.current?.value,
        }
      );
      console.log(response);
      console.log("success update");
      if (localStorage.getItem("mymandaldata")) {
        localStorage.removeItem("mymandaldata");
      }
      localStorage.setItem(
        "mymandaldata",
        JSON.stringify({
          mandaldate: dateRef.current?.value,
          mandallocation: locationref.current?.value,
          mandalname: nameRef.current?.value,
          mandaluid: uidRef.current?.value,
        })
      );
      dispatch(
        MandalDataActions.setMandalData({
          mandaldate: dateRef.current?.value!,
          mandallocation: locationref.current?.value!,
          mandalname: nameRef.current?.value!,
          mandaluid: uidRef.current?.value!,
        })
      );
      setStatus({
        error: false,
        checking: false,
        success: true,
      });
    } catch (error) {
      console.error("update failed");
      setStatus({
        error: true,
        checking: false,
        success: false,
      });
    }
  };
  return (
    <div className="w-full font-bold tracking-wide capitalize  md:w-[70%] lg:w-[70%] h-full grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-4 p-2">
      <HandlePortalForEdit status={status} setStatus={setStatus} />
      {SupportingData.map((value, index) => {
        return (
          <AllComboiInput
            notInclude={["mandaluid"]}
            key={`${value.keyName} ${index}`}
            label={value.keyName}
            ref={value.refValue}
            value={wholeInfo[value.keyName as ValueType]!}
            type={value.keyName === "mandaldate" ? "date" : "text"}
          />
        );
      })}
      <button
        onClick={submitHandler}
        className="w-full col-span-1 border-2 border-black hover:bg-orange-400   lg:col-span-2 p-2 rounded-md text-white bg-orange-500"
      >
        Update Mandal Data
      </button>
      <OrangeButton
        clickHandler={() => {
          router.push("/mandalPersonalData");
        }}
        title="Go Back"
        width="col-span-1 border-2 border-black hover:bg-orange-400   lg:col-span-2 p-2 rounded-md text-white bg-orange-500 w-full"
      />
    </div>
  );
}
