import React from "react";

export function SFLBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full md:w-[70%] lg:w-[50%] bg-orange-100 font-bold text-base md:text-xl tracking-wide rounded-md p-2 flex justify-center items-center text-center flex-col gap-2 border-2 border-white">
      {children}
    </div>
  );
}
