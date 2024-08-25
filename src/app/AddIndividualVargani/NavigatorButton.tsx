"use client";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
export default function NavigatorButton({
  title,
  href,
  size,
  setStatus,
}: {
  title: string;
  href: string;
  size: string;
  setStatus: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      error: boolean;
      success: boolean;
    }>
  >;
}) {
  const router = useRouter();
  return (
    <OrangeButton
      title={title}
      width={size}
      clickHandler={() => {
        setStatus({
          error: false,
          checking: false,
          success: false,
        });
        router.push(href);
      }}
    />
  );
}
