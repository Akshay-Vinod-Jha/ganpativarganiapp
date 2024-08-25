import OrangeButton from "../common/OrangeButton";
import { useRouter } from "next/navigation";
export default function AddingVargani() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center items-center">
      <OrangeButton
        title="Note/Store A Vargani"
        width="w-full md:w-max md:!px-8 md:!py-2"
        clickHandler={() => {
          router.push("/AddIndividualVargani");
        }}
      />
    </div>
  );
}
