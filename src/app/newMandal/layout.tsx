import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultimate Vargani App | Adding New Mandal",
  description: "This is the Ultimate Vargani App",
};

export default function NewMandalPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-2">
      {children}
    </div>
  );
}
