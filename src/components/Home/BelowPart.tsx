"use client";
import { useEffect, useState } from "react";
import OrangeButton from "../common/OrangeButton";
import Laoder from "../common/SpinLoader";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { MandalDataActions } from "@/store/MandalDataSlice";
export default function BelowPart() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("mymandaldata")) {
      console.log("first time dispatching");
      dispatch(
        MandalDataActions.setMandalData(
          JSON.parse(localStorage.getItem("mymandaldata") as string)
        )
      );
    }
  }, []);
  const [mandalData, setMandalData] = useState<null | {
    [key: string]: string;
  }>(null);
  const [showLaoder, setShowLoader] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("mymandaldata")) {
      setMandalData(JSON.parse(localStorage.getItem("mymandaldata") as string));
    } else {
      setMandalData(null);
    }
    setShowLoader(false);
  }, []);
  return (
    <div className="w-full md:w-[70%] lg:w-[50%] mt-4 h-auto py-2 flex justify-center items-center gap-2 flex-col">
      <OrangeButton
        title="Add Your New Mandal"
        width="w-full"
        clickHandler={() => {
          router.push("/newMandal");
        }}
      />
      <OrangeButton
        title="Join A Mandal With Mandal Code"
        width="w-full"
        clickHandler={() => {
          router.push("/joinMandalCode");
        }}
      />
      {mandalData && (
        <OrangeButton
          title="CheckOut Your Own Mandal Data"
          width="w-full"
          clickHandler={() => {
            router.push("/ownMandal");
          }}
        />
      )}
      {!mandalData && showLaoder && <Laoder />}
    </div>
  );
}
