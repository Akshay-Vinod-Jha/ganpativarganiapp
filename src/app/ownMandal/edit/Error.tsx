import OrangeButton from "@/components/common/OrangeButton";
import OrangeSpan from "@/components/common/OrangeSpan";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { StatusType } from "./page";
export default function Error({
  setStatus,
}: {
  setStatus: Dispatch<SetStateAction<StatusType>>;
}) {
  const router = useRouter();
  return (
    <>
      <ImCross className="text-red-500 mt-4 text-3xl" />
      <div className="mb-4 w-full">
        <h1>
          <OrangeSpan text="Oops!!" size="" /> Something Went Wrong
        </h1>
        <h1>
          <OrangeSpan text="failed" size="" /> while performing this action
        </h1>
        <OrangeButton
          title="Return To Home Page"
          clickHandler={() => {
            setStatus({
              error: false,
              success: false,
              checking: false,
            });
            router.push("/");
          }}
          width="mt-1 w-full md:w-max md:px-8 md:py-2"
        />
      </div>
    </>
  );
}
