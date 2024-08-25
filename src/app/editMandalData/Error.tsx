import { useRouter } from "next/navigation";
import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import OrangeSpan from "@/components/common/OrangeSpan";
import OrangeButton from "@/components/common/OrangeButton";
import { FaSkullCrossbones } from "react-icons/fa6";

export default function Error({
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
        <FaSkullCrossbones className="mt-4 text-4xl text-red-500" />

        <h1>
          <OrangeSpan text="Oops...  Something" size="" /> went{" "}
          <OrangeSpan text="Wrong" size="" /> :)
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
