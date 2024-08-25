import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import Checking from "./Checking";
import Success from "./Success";
import Error from "./Error";
export default function HandlePortalMandalCode({
  code,
  status,
  setStatus,
}: {
  code: string;
  status: { error: boolean; success: boolean; checking: boolean };
  setStatus: React.Dispatch<
    React.SetStateAction<{
      error: boolean;
      checking: boolean;
      success: boolean;
    }>
  >;
}) {
  return (
    <>
      {status.checking && (
        <ReactPortal>
          <SFLBoundary>
            <Checking code={code} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {status.success && (
        <ReactPortal>
          <SFLBoundary>
            <Success code={code} setStatus={setStatus} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {status.error && (
        <ReactPortal>
          <SFLBoundary>
            <Error code={code} setStatus={setStatus} />
          </SFLBoundary>
        </ReactPortal>
      )}
    </>
  );
}
