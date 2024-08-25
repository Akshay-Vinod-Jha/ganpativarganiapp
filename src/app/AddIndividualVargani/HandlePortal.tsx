import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import Checking from "./Checking";
import Success from "./Success";
import Error from "./Error";
export default function HandalPortalvargani({
  status,
  setStatus,
}: {
  status: {
    error: boolean;
    success: boolean;
    checking: boolean;
  };
  setStatus: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      error: boolean;
      success: boolean;
    }>
  >;
}) {
  return (
    <>
      {status.checking && (
        <ReactPortal>
          <SFLBoundary>
            <Checking />
          </SFLBoundary>
        </ReactPortal>
      )}
      {status.success && (
        <ReactPortal>
          <SFLBoundary>
            <Success setStatus={setStatus} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {status.error && (
        <ReactPortal>
          <SFLBoundary>
            <Error setStatus={setStatus} />
          </SFLBoundary>
        </ReactPortal>
      )}
    </>
  );
}
