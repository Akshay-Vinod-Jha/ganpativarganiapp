"use client";
import {
  dataType,
  SelectedVarganiSliceActions,
} from "@/store/SelectedVarganiSlice";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import { useEditedDispatchHook } from "@/store/useEditedHooks";
import { useRouter } from "next/navigation";
export default function EditDeletePart({ value }: { value: dataType }) {
  const dispatch = useEditedDispatchHook();
  const router = useRouter();
  const indVargani = useEditedSelectorHook(
    (state) => state.SelectedVarganiReducer.selectedVargani
  );
  useEffect(() => {
    console.log("indivisual vargani", value);
  }, [value]);
  useEffect(() => {
    console.log("edit and delete handler", indVargani);
  }, [indVargani]);
  const dispatchAction = () => {
    dispatch(SelectedVarganiSliceActions.addSelectedVargani({ ...value }));
  };
  const editHandler = () => {
    dispatchAction();
    router.push("/ownMandal/edit");
  };
  const deleteHandler = () => {
    dispatchAction();
    router.push("/ownMandal/delete");
  };
  return (
    <div className="w-full flex justify-end items-center gap-4">
      <MdEdit
        className="p-2 hover:bg-green-400 border-2 border-black text-xl w-max h-max rounded-full bg-green-500"
        onClick={editHandler}
      />
      <MdDelete
        className="p-2 hover:bg-red-400 border-2 border-black text-xl w-max h-max rounded-full bg-red-500"
        onClick={deleteHandler}
      />
    </div>
  );
}
