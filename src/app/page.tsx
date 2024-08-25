import BelowPart from "@/components/Home/BelowPart";
import UpperPart from "@/components/Home/UpperPart";

export default function MainPage() {
  return (
    <div className="w-screen p-2 h-screen text-black flex justify-center items-center flex-col gap-4">
      <UpperPart />
      <BelowPart />
    </div>
  );
}
