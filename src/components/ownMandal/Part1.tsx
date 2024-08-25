"use client";
import { useRouter } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";

export default function Part1() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/mandalPersonalData");
  };
  return (
    <div className="w-full flex justify-end items-center">
      <FaInfoCircle
        onClick={clickHandler}
        className="text-orange-500 text-xl md:text-2xl cursor-pointer"
      />
    </div>
  );
}
