"use client";

import React, { useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEditedDispatchHook } from "@/store/useEditedHooks";
import { MandalDataActions, MandalDataType } from "@/store/MandalDataSlice";
import HandlePortalMandalCode from "./HandlePortal";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
export default function JoinMandalForm() {
  const router = useRouter();
  const [status, setStatus] = useState({
    error: false,
    checking: false,
    success: false,
  });
  const dispatch = useEditedDispatchHook();
  const codeRef = useRef<HTMLInputElement>(null);
  const getMandalData = async (code: string) => {
    try {
      setStatus({
        error: false,
        checking: true,
        success: false,
      });
      const response = await getDoc(doc(db, "allavailablemandals", code));
      if (response.exists()) {
        console.log(response.data());
        const EntireData: MandalDataType = response.data() as MandalDataType;
        dispatch(
          MandalDataActions.setMandalData({
            mandaldate: EntireData.mandaldate,
            mandalname: EntireData.mandalname,
            mandallocation: EntireData.mandallocation,
            mandaluid: code,
          })
        );
        if (localStorage.getItem("mymandaldata")) {
          localStorage.removeItem("mymandaldata");
        }
        localStorage.setItem(
          "mymandaldata",
          JSON.stringify({
            mandaldate: EntireData.mandaldate,
            mandalname: EntireData.mandalname,
            mandallocation: EntireData.mandallocation,
            mandaluid: code,
          })
        );
        setStatus({
          error: false,
          checking: false,
          success: true,
        });
      } else {
        console.log("code specified is incorrect");
        setStatus({
          error: true,
          checking: false,
          success: false,
        });
      }
    } catch (error) {
      setStatus({
        error: true,
        checking: false,
        success: false,
      });
    }
  };
  const submithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(codeRef.current?.value);
    getMandalData(codeRef.current?.value.trim() ? codeRef.current.value : "");
  };
  return (
    <div className="w-full md:w-[70%] lg:w-[50%] flex justify-center items-center flex-col gap-1">
      <form
        onSubmit={submithandler}
        className="text-lg md:text-xl w-full flex justify-center mt-8 items-start flex-col gap-2"
      >
        <HandlePortalMandalCode
          status={status}
          setStatus={setStatus}
          code={codeRef.current?.value as string}
        />
        <label className="w-full flex justify-center items-start flex-col gap-2">
          <h1>Enter Mandal Code Below</h1>
          <input
            type="text"
            required={true}
            ref={codeRef}
            placeholder="mandal code here ex:-oWrnmgHd7zb9n02EpSoR"
            className="w-full p-2 rounded-md border-2 border-black"
          />
        </label>
        <input
          type="submit"
          value="Join This Mandal"
          className="w-full bg-orange-500 p-2 text-white rounded-md cursor-pointer hover:bg-orange-400 border-2 border-black"
        />
      </form>
      <OrangeButton
        title="Return To Home Page"
        clickHandler={() => {
          setStatus({
            error: false,
            checking: false,
            success: false,
          });
          router.push("/");
        }}
        width="w-full"
      />
    </div>
  );
}
