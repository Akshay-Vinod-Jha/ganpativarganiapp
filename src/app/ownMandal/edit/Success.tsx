"use client";
import OrangeSpan from "@/components/common/OrangeSpan";
import { TiTick } from "react-icons/ti";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { StatusType } from "./page";
export default function Success({
  text,
  setStatus,
}: {
  text: string;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}) {
  const router = useRouter();
  return (
    <>
      <h1 className="flex  mt-4 justify-center items-center">
        <TiTick className="text-green-500 text-4xl" />
        Congratulations
      </h1>
      <h1>
        The Vargani Is <OrangeSpan text={`${text} Successfully`} size="" />
      </h1>
      <OrangeButton
        title={`Check ${text} Vargani`}
        clickHandler={() => {
          setStatus({
            error: false,
            success: false,
            checking: false,
          });
          router.push("/ownMandal");
        }}
        width="mt-1 w-full md:w-max md:px-8 md:py-2 mb-4"
      />
    </>
  );
}
