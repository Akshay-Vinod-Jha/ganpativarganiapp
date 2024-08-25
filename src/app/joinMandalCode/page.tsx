import OrangeSpan from "@/components/common/OrangeSpan";
import JoinMandalForm from "./JoinMandalForm";

export default function JoinMandalCodePage() {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-1 font-bold tracking-wide">
      <div className="flex justify-center items-center flex-col gap-1 md:flex-row md:gap-8 md:items-end">
        <h1 className="text-3xl md:text-4xl tracking-widest">
          <OrangeSpan text="Join A Mandal" size="" />
        </h1>
        <h1 className="text-xl md:text-2xl tracking-widest">with</h1>
        <h1 className="text-3xl md:text-4xl tracking-widest">
          {" "}
          <OrangeSpan text="Mandal Code" size="" />
        </h1>
      </div>
      <JoinMandalForm />
    </div>
  );
}
