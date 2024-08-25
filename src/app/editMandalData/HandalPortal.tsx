import OrangeSpan from "@/components/common/OrangeSpan";
import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import { ImSpinner6 } from "react-icons/im";
import Success from "./Success";
import Error from "./Error";
export default function HandlePortalForEdit({
  status,
  setStatus,
}: {
  setStatus: React.Dispatch<
    React.SetStateAction<{
      error: boolean;
      checking: boolean;
      success: boolean;
    }>
  >;
  status: { error: boolean; success: boolean; checking: boolean };
}) {
  return (
    <>
      {status.checking && (
        <ReactPortal>
          <SFLBoundary>
            <ImSpinner6 className="mt-4 animate-spin text-4xl" />
            <h1 className="mb-4">
              wait.... while we are updating your{" "}
              <OrangeSpan text="Mandal Data" size="" />
            </h1>
          </SFLBoundary>
        </ReactPortal>
      )}
      {status.success && <Success setStatus={setStatus} />}
      {status.error && <Error setStatus={setStatus} />}
    </>
  );
}
