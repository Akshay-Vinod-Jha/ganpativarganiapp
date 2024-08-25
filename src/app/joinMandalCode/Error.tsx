"use client";
import OrangeSpan from "@/components/common/OrangeSpan";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";

export default function Error({
  code,
  setStatus,
}: {
  code: string;
  setStatus: React.Dispatch<
    React.SetStateAction<{
      error: boolean;
      checking: boolean;
      success: boolean;
    }>
  >;
}) {
  const router = useRouter();
  return (
    <>
      <ImCross className="text-red-500 text-3xl  mt-4" />
      <OrangeSpan text="Oops.. Something Went Wrong" size="" />
      <h1>
        <OrangeSpan text={`"${code}"`} size="" /> {"<-"} This is not an valid
        mandal code
      </h1>
      <h1 className="text-red-500">Provide A Valid Mandal Code</h1>
      <OrangeButton
        width="w-full"
        title="Try Again"
        clickHandler={() => {
          setStatus({
            error: false,
            success: false,
            checking: false,
          });
          router.push("/joinMandalCode");
        }}
      />
      <OrangeButton
        width="w-full"
        title="Return To Home Page"
        clickHandler={() => {
          setStatus({
            error: false,
            success: false,
            checking: false,
          });
          router.push("/");
        }}
      />
    </>
  );
}
