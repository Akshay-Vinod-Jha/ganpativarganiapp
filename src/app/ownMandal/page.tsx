"use client";
import OrangeButton from "@/components/common/OrangeButton";
import Part1 from "@/components/ownMandal/Part1";
import Part2 from "@/components/ownMandal/Part2";
import { MandalDataType } from "@/store/MandalDataSlice";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import Part3 from "@/components/ownMandal/Part3";
import AddingVargani from "@/components/ownMandal/AddingVargani";
import Laoder from "@/components/common/SpinLoader";
export type notedvarganitype = {
  varganiuid: string;
  varganidate: string;
  varganionline: number;
  varganioffline: number;
  varganitotal: number;
};
const dummyData: notedvarganitype = {
  varganidate: "",
  varganioffline: 0,
  varganionline: 0,
  varganitotal: 0,
  varganiuid: "",
};
export default function OwnModal() {
  const [impData, setImpData] = useState<{
    loading: boolean;
    isEmpty: boolean;
    data: notedvarganitype[];
    varganiinhand: number;
  }>({
    loading: true,
    isEmpty: true,
    data: [],
    varganiinhand: 0,
  });
  const uid = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo.mandaluid
  );

  const getAllDocsFromDoc = async (uid: string) => {
    setImpData({
      loading: true,
      isEmpty: true,
      data: [],
      varganiinhand: 0,
    });
    const response = await getDocs(
      collection(db, `allavailablemandals/${uid}/notedvargani`)
    );
    if (response.empty) {
      console.log("nahi hai");
      setImpData({
        loading: false,
        isEmpty: true,
        data: [],
        varganiinhand: 0,
      });
    } else {
      console.log("hai");
      let arrayOfDocs: notedvarganitype[] = [];
      response.forEach((doc) => {
        arrayOfDocs.push({
          varganiuid: doc.id,
          varganidate: doc.data().varganidate,
          varganionline: doc.data().varganionline,
          varganioffline: doc.data().varganioffline,
          varganitotal: doc.data().varganionline + doc.data().varganioffline,
        });
      });
      console.log(arrayOfDocs);
      console.log(
        arrayOfDocs.sort((a, b) => {
          return (
            +new Date(a.varganidate).getTime() -
            +new Date(b.varganidate).getTime()
          );
        })
      );
      setImpData({
        loading: false,
        isEmpty: false,
        data: [
          ...arrayOfDocs.sort((a, b) => {
            return (
              +new Date(a.varganidate).getTime() -
              +new Date(b.varganidate).getTime()
            );
          }),
        ],
        varganiinhand: arrayOfDocs.reduce(
          (first: notedvarganitype, second: notedvarganitype) => {
            return {
              varganidate: "",
              varganioffline: 0,
              varganionline: 0,
              varganitotal: first.varganitotal + second.varganitotal,
              varganiuid: "",
            };
          },
          dummyData
        ).varganitotal,
      });
    }
  };
  useEffect(() => {
    uid && console.log(uid);
    uid && getAllDocsFromDoc(uid);
  }, [uid]);
  useEffect(() => {
    console.log(impData, "this is the impdata");
  }, [impData]);
  const [data, setData] = useState<null | MandalDataType>(null);
  useEffect(() => {
    if (localStorage.getItem("mymandaldata")) {
      setData(JSON.parse(localStorage.getItem("mymandaldata") as string));
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-start bg-orange-50 overflow-y-auto no-scrollbar items-center flex-col gap-2 p-2">
      {data ? (
        <>
          <Part1 />
          <Part2 />
          <AddingVargani />
          {impData.loading ? <Laoder /> : <Part3 impData={impData} />}
        </>
      ) : (
        <>
          <OrangeButton
            width=""
            clickHandler={() => notFound()}
            title="Not Found Check out this Page"
          />
        </>
      )}
    </div>
  );
}
