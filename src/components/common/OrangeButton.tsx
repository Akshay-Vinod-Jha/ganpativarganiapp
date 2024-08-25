"use client";
export default function OrangeButton({
  title,
  width,
  clickHandler,
}: {
  title: string;
  width: string;
  clickHandler: () => void;
}) {
  return (
    <button
      onClick={clickHandler}
      className={` ${width} p-3 rounded-md border-2 border-black bg-orange-500 hover:bg-orange-400 duration-100 text-white text-base md:text-xl  font-bold tracking-wide`}
    >
      {title}
    </button>
  );
}
