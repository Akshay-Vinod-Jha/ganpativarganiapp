import { Metadata } from "next";
import React from "react";

export default function OwnMandalLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
export const metadata: Metadata = {
  title: "Ultimate Vargani App | Deleting A Particular Vargani",
  description: "This is the Ultimate Vargani App",
};
