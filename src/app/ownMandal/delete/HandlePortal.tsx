import { StatusType } from "../edit/page";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import ReactPortal from "@/components/common/ReactPortal";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import Checking from "../edit/Checking";
import Error from "../edit/Error";
import Success from "../edit/Success";
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
            <Success setStatus={setStatus} text="Deleted" />
          </SFLBoundary>
        </ReactPortal>
      )}
    </>
  );
}
