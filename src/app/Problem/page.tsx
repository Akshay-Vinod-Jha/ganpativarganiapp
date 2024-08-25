"use client";
import OrangeButton from "@/components/common/OrangeButton";
import OrangeSpan from "@/components/common/OrangeSpan";
import { useRouter } from "next/navigation";

export default function ProblemPage() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen font-bold tracking-wide text-base md:text-xl lg:text-2xl flex justify-center items-center flex-col gap-2">
      <OrangeSpan text="Oops..!!!" size="" />
      <h1>Something Went Wrong.....</h1>
      <OrangeButton
        title="Redirect To Home Page"
        width=""
        clickHandler={() => {
          router.push("/");
        }}
      />
    </div>
  );
}
