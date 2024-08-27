import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import Checking from "./Checking";
import Error from "./Error";
import Success from "./Success";
import { StatusType } from "./page";
import { Dispatch, SetStateAction } from "react";

export default function HandlePortal({
  status,
  setStatus,
}: {
  status: StatusType;
  setStatus: Dispatch<SetStateAction<StatusType>>;
}) {
  return (
    <>
      {status.checking && (
        <ReactPortal>
          <SFLBoundary>
            <Checking text="Updating" />
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
      {status.success && (
        <ReactPortal>
          <SFLBoundary>
            <Success setStatus={setStatus} text="Updated" />
          </SFLBoundary>
        </ReactPortal>
      )}
    </>
  );
}
