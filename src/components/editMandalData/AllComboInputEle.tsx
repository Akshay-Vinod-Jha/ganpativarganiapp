"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import EmojiButton from "./EmojiButton";
const AllComboiInput = forwardRef<
  HTMLInputElement,
  { label: string; value: string; type: string; notInclude: string[] }
>(({ label, value, type, notInclude }, ref) => {
  const [text, setText] = useState({
    readOnly: true,
    value: value,
  });
  useEffect(() => {
    setText({
      readOnly: true,
      value: value,
    });
  }, [value]);
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!text.readOnly) {
      setText((past) => {
        return {
          readOnly: past.readOnly,
          value: event.target.value,
        };
      });
    }
  };
  return (
    <label className="w-full flex justify-center items-center flex-col gap-1">
      <h1 className={`w-full text-start `}>
        {!text.readOnly && "Editing"}
        {label}
      </h1>
      <h1 className="flex justify-center items-center w-full gap-1">
        <input
          type={type}
          ref={ref}
          value={text.value}
          onChange={changeHandler}
          className={`px-4 w-full py-2 rounded-md ${
            text.readOnly
              ? "bg-gray-200 text-black"
              : "bg-white text-orange-500 "
          } border-2 border-gray-500`}
        />
        {!notInclude.includes(label) && (
          <EmojiButton
            clickHandler={() => {
              setText((past) => {
                return {
                  readOnly: !past.readOnly,
                  value: past.value,
                };
              });
            }}
            css={`h-full text-xl font-bold ${
              text.readOnly
                ? "bg-orange-500 hover:bg-orange-400"
                : "bg-green-500 hover:bg-green-400"
            } hover:text-white duration-100`}
          >
            {text.readOnly ? <MdEdit /> : <FaSave />}
          </EmojiButton>
        )}
      </h1>
    </label>
  );
});
AllComboiInput.displayName = "AllComboiInput";
export default AllComboiInput;
