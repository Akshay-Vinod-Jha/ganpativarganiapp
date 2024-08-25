import { forwardRef } from "react";

const LabelInputCombo = forwardRef<
  HTMLInputElement,
  { label: string; type: string; placeholder: string }
>(({ label, type, placeholder }, ref) => {
  return (
    <label className="w-full flex justify-center items-start flex-col gap-1">
      <h1 className="text-base md:text-lg tracking-wider">{label}</h1>
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className="w-full p-2 rounded-md border-2 border-black text-orange-500"
      />
    </label>
  );
});
LabelInputCombo.displayName = "LabelInputCombo";
export default LabelInputCombo;
