"use client";
import { db } from "@/app/firebaseConfig";
import OrangeButton from "@/components/common/OrangeButton";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { StatusType } from "../edit/page";
import HandlePortal from "./HandlePortal";
export default function Edit() {
  const [status, setStatus] = useState<StatusType>({
    error: false,
    success: false,
    checking: false,
  });
  const parentData = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo
  );
  const data = useEditedSelectorHook(
    (state) => state.SelectedVarganiReducer.selectedVargani
  );
  const deleteHandler = async () => {
    setStatus({
      error: false,
      checking: true,
      success: false,
    });
    try {
      const response = await deleteDoc(
        doc(
          db,
          `allavailablemandals/${parentData.mandaluid}/notedvargani`,
          data.varganiuid as string
        )
      );
      console.log("deleted successfully", response);
      setStatus({
        error: false,
        checking: false,
        success: true,
      });
    } catch (error) {
      console.log("error while deleting");
      setStatus({
        error: true,
        checking: false,
        success: false,
      });
    }
  };
  return (
    <div className="w-full text-center p-2 md:w-[70%] lg:w-[70%] grid grid-cols-1 place-content-center place-items-center gap-2 font-bold tracking-wide">
      <HandlePortal setStatus={setStatus} status={status} />
      <h1>
        Greeting To{"  "}
        <span className="text-orange-500">{parentData.mandalname}</span> Mandal
      </h1>
      <h1>
        Do You Really Want To Delete This Vargani of{" "}
        <span className="text-orange-500">
          Total {data.varganioffline}
          (offline) +{data.varganionline}(online)={data.varganitotal}
        </span>
      </h1>
      <h1 className="w-full text-orange-500 flex justify-end items-center text-xs">
        {data.varganiuid}
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-1">
        <OrangeButton title="Back" width="w-full" clickHandler={() => {}} />
        <OrangeButton
          title="Delete"
          width="w-full"
          clickHandler={deleteHandler}
        />
      </div>{" "}
    </div>
  );
}
