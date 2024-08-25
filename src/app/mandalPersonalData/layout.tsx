import { Metadata } from "next";
export default function MandalPersonalDataLayout({
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
  title: "Ultimate Vargani App | Personal Mandal Data",
  description: "This is the Ultimate Vargani App",
};
