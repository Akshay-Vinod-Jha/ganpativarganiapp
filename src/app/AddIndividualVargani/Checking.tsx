import OrangeSpan from "@/components/common/OrangeSpan";
import { ImSpinner6 } from "react-icons/im";
export default function Checking() {
  return (
    <>
      <ImSpinner6 className="mt-4 animate-spin text-4xl" />
      <h1 className="mb-4">
        <OrangeSpan text="Wait" size="" />
        .. While We <OrangeSpan text="Add Your Vargani" size="" /> In Your
        <OrangeSpan text="Previously Noted Vargani" size="" />
      </h1>
    </>
  );
}
