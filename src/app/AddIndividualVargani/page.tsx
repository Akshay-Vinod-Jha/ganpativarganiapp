"use client";
import LabelInputCombo from "@/components/common/LabelInputCombo";
import OrangeSpan from "@/components/common/OrangeSpan";
import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../firebaseConfig";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import HandalPortalvargani from "./HandlePortal";
export default function AddingIndividual() {
  const uid = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo.mandaluid
  );
  const dateRef = useRef<HTMLInputElement>(null);
  const onlineRef = useRef<HTMLInputElement>(null);
  const offlineref = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState({
    checking: false,
    error: false,
    success: false,
  });
  const InputArray = [
    {
      label: "Choose Date",
      placeholder: "Choose The Date Of Vargani To Be Noted",
      type: "date",
      inputRef: dateRef,
    },
    {
      label: "Enter Online Vargani",
      placeholder: "Enter Vargani Collected Online",
      type: "number",
      inputRef: onlineRef,
    },
    {
      label: "Enter Offline Vargani",
      placeholder: "Enter Vargani Collected Offline",
      type: "number",
      inputRef: offlineref,
    },
  ];
  const addvargani = async () => {
    setStatus({
      checking: true,
      error: false,
      success: false,
    });
    try {
      if (uid) {
        console.log("uid is", uid);
        const response = await addDoc(
          collection(db, `allavailablemandals/${uid}/notedvargani`),
          {
            varganidate: dateRef.current?.value,
            varganioffline: +offlineref.current?.value!,
            varganionline: +onlineRef.current?.value!,
          }
        );
        console.log(response, "this is adding vargani response");
        if (response) {
          console.log("add ho gaya bhai vargani");
          setStatus({
            checking: false,
            error: false,
            success: true,
          });
        } else {
          throw new Error("failed uid null");
        }
      } else {
        throw new Error("failed uid null");
      }
    } catch (error) {
      console.log("add vargani failed");
      setStatus({
        checking: false,
        error: true,
        success: false,
      });
    }
  };
  const submithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (dateRef.current?.value) {
      console.log("all okay");
      console.log(
        dateRef.current.value,
        +onlineRef.current?.value!,
        +offlineref.current?.value!
      );
      addvargani();
    } else {
      console.log("not okay");
    }
  };
  return (
    <div className="w-full p-2 flex justify-center items-center flex-col gap-1 font-bold tracking-wide">
      <HandalPortalvargani status={status} setStatus={setStatus} />
      <div className="flex justify-center items-center flex-col md:flex-row md:gap-8 md:items-end gap-1">
        <OrangeSpan text="Enter Vargani Details" size="text-3xl md:text-4xl" />
        <h1 className="md:text-lg">Below Here</h1>
        <OrangeSpan
          text="As Mentioned To Be Stored"
          size="text-3xl md:text-4xl"
        />
      </div>
      <form
        onSubmit={submithandler}
        className="flex w-full mt-8 md:w-[70%] lg:w-[50%] justify-center items-start flex-col gap-2"
      >
        {InputArray.map((value, index) => {
          return (
            <LabelInputCombo
              key={`${value.label} ${index}`}
              label={value.label}
              type={value.type}
              placeholder={value.placeholder}
              ref={value.inputRef}
            />
          );
        })}
        <input
          type="submit"
          value="Add This Vargani"
          className="w-full flex justify-center items-center flex-col p-2 bg-orange-500 rounded-md text-white text-base md:text-lg border-2 border-black hover:bg-orange-400 duration-150"
        />
      </form>
    </div>
  );
}
