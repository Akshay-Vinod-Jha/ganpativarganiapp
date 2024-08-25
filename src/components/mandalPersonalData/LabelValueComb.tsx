import CopyOption from "../common/CopyOption";

export default function LabelValueCombo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="w-full h-full flex justify-center items-start flex-col gap-1">
      <h1>{label}</h1>
      <div className="w-full flex h-full justify-start items-center gap-1 flex-row">
        <h1 className="px-4 w-full py-2 h-full rounded-md bg-white text-orange-500 border-2 border-gray-500">
          {value}
        </h1>
        <CopyOption textToCopy={value} />
      </div>
    </div>
  );
}
