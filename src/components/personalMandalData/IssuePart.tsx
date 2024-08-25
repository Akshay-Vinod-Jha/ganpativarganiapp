import OrangeSpan from "../common/OrangeSpan";
export default function IssuePart() {
  return (
    <>
      <h1 className="text-center">
        <OrangeSpan text="Wait" size="" /> While We load your{" "}
        <OrangeSpan text="Mandal Info" size="" />
      </h1>
      <h1 className="text-center">
        if this page is <OrangeSpan text="Displayed for to Long " size="" />,
        then you are on <OrangeSpan text=" wrong page" size="" />
      </h1>
    </>
  );
}
