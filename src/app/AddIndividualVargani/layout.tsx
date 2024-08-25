import { Metadata } from "next";
export default function EditMandalData({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen p-2 h-screen flex justify-center items-center flex-col gap-2">
      {children}
    </div>
  );
}
export const metadata: Metadata = {
  title: "Ultimate Vargani App |Adding Individual Vargani",
  description: "This is the Ultimate Vargani App",
};
