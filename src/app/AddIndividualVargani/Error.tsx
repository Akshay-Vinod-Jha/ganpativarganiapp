import { ImCross } from "react-icons/im";
import NavigatorButton from "./NavigatorButton";
export default function Error({
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
      <ImCross className="text-3xl mt-4 text-red-500" />
      <h1 className="text-red-400">Oops!... Something Went Wrong</h1>
      <NavigatorButton
        title="Retry / Try Again"
        size="w-full mb-4"
        setStatus={setStatus}
        href="/AddIndividualVargani"
      />
    </>
  );
}
