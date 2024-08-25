"use client";
import OrangeButton from "@/components/common/OrangeButton";
import OrangeSpan from "@/components/common/OrangeSpan";
import { useRouter } from "next/navigation";
export default function Success({
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
      <OrangeSpan text="Congratulation..." size=" mt-4" />
      <h1>
        Connected To The Mandal <OrangeSpan text={`"${code}"`} size="" />{" "}
        successfully
      </h1>
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
