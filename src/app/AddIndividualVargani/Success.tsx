import OrangeSpan from "@/components/common/OrangeSpan";
import NavigatorButton from "./NavigatorButton";

export default function Success({
  setStatus,
}: {
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
      <OrangeSpan text="Congratulations..." size="mt-4" />
      <h1>
        Your Vargani is noted/stored{" "}
        <OrangeSpan text="Successfully....." size="" />
      </h1>
      <NavigatorButton
        setStatus={setStatus}
        title="Check Out Added Vargani"
        size="w-full mb-4"
        href="/ownMandal"
      />
    </>
  );
}
