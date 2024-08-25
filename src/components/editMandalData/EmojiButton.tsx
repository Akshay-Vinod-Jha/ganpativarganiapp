import React from "react";

export default function EmojiButton({
  children,
  css,
  clickHandler,
}: {
  children: React.ReactNode;
  css: string;
  clickHandler: () => void;
}) {
  return (
    <button
      className={`p-2 rounded-md ${css} border-2 border-black`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
