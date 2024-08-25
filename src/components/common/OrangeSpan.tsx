export default function OrangeSpan({
  text,
  size,
}: {
  text: string;
  size: string | undefined;
}) {
  return <span className={`text-orange-500 ${size}`}>{text}</span>;
}
