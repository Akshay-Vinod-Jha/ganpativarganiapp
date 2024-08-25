"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";
import { MdError } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export default function CopyOption({ textToCopy }: { textToCopy: string }) {
  const [status, setStatus] = useState({
    error: false,
    checking: false,
    success: false,
  });
  const copyHandler = async () => {
    try {
      setStatus({
        error: false,
        checking: true,
        success: false,
      });
      await navigator.clipboard.writeText(textToCopy);
      setStatus({
        error: false,
        checking: false,
        success: true,
      });
    } catch (error) {
      setStatus({
        error: true,
        checking: false,
        success: false,
      });
    }
    setTimeout(() => {
      setStatus({
        error: false,
        checking: false,
        success: false,
      });
    }, 2000);
  };
  const returnColor = () => {
    if (!status.checking && !status.error && !status.success) {
      return "bg-orange-500";
    } else if (status.checking) {
      return "bg-yellow-500";
    } else if (status.success) {
      return "bg-green-200";
    } else {
      return "bg-red-200";
    }
  };
  return (
    <div
      onClick={copyHandler}
      className={`w-auto cursor-pointer text-base ${returnColor()} hover:text-white border-2 border-black text-black hover:bg-orange-400 duration-100 rounded-md p-2 h-auto`}
    >
      {!status.checking && !status.error && !status.success && <FaCopy />}
      {status.checking && <ImSpinner6 className=" animate-spin" />}
      {status.error && <MdError />}
      {status.success && <FaCheck />}
    </div>
  );
}
