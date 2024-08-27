import OrangeSpan from "@/components/common/OrangeSpan";
import { ImSpinner6 } from "react-icons/im";

export default function Checking({ text }: { text: string }) {
  return (
    <>
      <ImSpinner6 className="mt-4 animate-spin text-4xl" />
      <h1 className="mb-4">
        <OrangeSpan text="Wait...." size="" /> While we are{" "}
        <OrangeSpan text={text} size="" /> your vargani data
      </h1>
    </>
  );
}
