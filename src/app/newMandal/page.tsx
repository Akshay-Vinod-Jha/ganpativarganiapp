"use client";
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useEditedDispatchHook } from "@/store/useEditedHooks";
import HandlePortal from "./HandlePortal";
import { MandalDataActions } from "@/store/MandalDataSlice";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
export default function NewMandalPage() {
  const route = useRouter();
  const dispatch = useEditedDispatchHook();
  const [errorIs, seterror] = useState({
    checking: false,
    success: false,
    error: false,
    invaliddata: false,
  });
  const [name, setname] = useState<string>("");
  const [location, setlocation] = useState<string>("");
  const [date, setdate] = useState<string>("2006-01-15");
  const addMandal = async (name: string, location: string, date: string) => {
    seterror({
      checking: true,
      success: false,
      error: false,
      invaliddata: false,
    });
    try {
      const response = await addDoc(collection(db, "allavailablemandals"), {
        mandalname: name,
        mandallocation: location,
        mandaldate: date,
      });
      console.log(response);
      console.log(response.id);
      if (response) {
        seterror({
          checking: false,
          success: true,
          invaliddata: false,
          error: false,
        });
        dispatch(
          MandalDataActions.setMandalData({
            mandaldate: date,
            mandallocation: location,
            mandalname: name,
            mandaluid: response.id,
          })
        );
        if (localStorage.getItem("mymandaldata")) {
          localStorage.removeItem("mymandaldata");
        }
        localStorage.setItem(
          "mymandaldata",
          JSON.stringify({
            mandalname: name,
            mandallocation: location,
            mandaldate: date,
            mandaluid: response.id,
          })
        );
      } else {
        seterror({
          checking: false,
          success: false,
          invaliddata: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error);
      seterror({
        checking: false,
        success: false,
        error: true,
        invaliddata: false,
      });
    }
  };
  const submithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, location, date);
    if (name.trim() && location.trim() && date.trim()) {
      addMandal(name, location, date);
    } else {
      seterror({
        checking: false,
        success: false,
        error: false,
        invaliddata: true,
      });
    }
  };
  return (
    <div className="md:w-[70%] lg:w-[50%] w-full flex justify-center items-center flex-col gap-1">
      <form
        onSubmit={submithandler}
        className="w-full text-base font-bold tracking-wide  h-auto p-2 flex justify-center items-center flex-col gap-4"
      >
        <HandlePortal error={errorIs} name={name} seterror={seterror} />
        <label className="w-full">
          <h1>
            Enter <span className="text-orange-500">Mandal Name</span>
          </h1>
          <input
            className="w-full px-2 py-1 rounded-md border-2 border-orange-200"
            placeholder="enter your mandal name"
            type="text"
            value={name}
            onChange={(event) => {
              setname(event.target.value);
            }}
            required={true}
            name="name"
            id="naem"
          />
        </label>
        <label className="w-full">
          <h1>
            Enter <span className="text-orange-500">Mandal Location</span>
          </h1>
          <input
            required={true}
            className="w-full px-2 py-1 rounded-md border-2 border-orange-200"
            placeholder="enter your mandal location"
            type="text"
            value={location}
            name="location"
            id="location"
            onChange={(event) => {
              setlocation(event.target.value);
            }}
          />
        </label>
        <label className="w-full">
          <h1>
            Enter <span className="text-orange-500">Mandal Sthapan</span> date
          </h1>
          <input
            required={true}
            className="w-full px-2 py-1 rounded-md border-2 border-orange-200"
            placeholder="enter your mandal sthapan date"
            type="date"
            name="sthapan"
            value={date}
            id="sthapan"
            onChange={(event) => {
              setdate(event.target.value);
            }}
          />
        </label>
        <input
          type="submit"
          value="Add My Mandal"
          className="bg-orange-500 border-2 border-black cursor-pointer w-full p-2 rounded-md text-white hover:bg-orange-400 duration-100"
        />
      </form>
      <OrangeButton
        title="Return to home page"
        width="w-[98%] !p-2 !text-base"
        clickHandler={() => {
          route.push("/");
        }}
      />
    </div>
  );
}
