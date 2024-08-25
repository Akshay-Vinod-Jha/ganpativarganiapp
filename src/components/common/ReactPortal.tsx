import React from "react";
import ReactDOM from "react-dom";
export default function ReactPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  return ReactDOM.createPortal(
    <div className="w-screen h-screen absolute z-10 bg-[#00000099] p-2 flex justify-center items-center">
      {children}
    </div>,
    document.getElementById("portal")!
  );
}
