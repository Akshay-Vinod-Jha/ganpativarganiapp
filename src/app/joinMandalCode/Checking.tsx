import OrangeSpan from "@/components/common/OrangeSpan";
import { ImSpinner6 } from "react-icons/im";
export default function Checking({ code }: { code: string }) {
  return (
    <>
      <ImSpinner6 className="mt-4 animate-spin text-4xl" />
      <OrangeSpan text="Connecting..." size="" />
      <h1 className="mb-4">
        Wait , While we connect you to the specified mandal{"  "}
        <OrangeSpan text={`"${code}"`} size="" />
      </h1>
    </>
  );
}
