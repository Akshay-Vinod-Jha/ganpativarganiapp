"use client";
import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import OrangeSpan from "@/components/common/OrangeSpan";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
export default function Success({
  setStatus,
}: {
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
    <ReactPortal>
      <SFLBoundary>
        <h1 className="mt-4">
          <OrangeSpan text="Congratulations...." size="" />
        </h1>
        <h1>
          <OrangeSpan text="Mandal Data" size="" /> updates{" "}
          <OrangeSpan text="successfully" size="" /> :)
        </h1>
        <OrangeButton
          width=""
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
      </SFLBoundary>
    </ReactPortal>
  );
}
