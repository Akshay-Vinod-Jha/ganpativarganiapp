import ReactPortal from "@/components/common/ReactPortal";
import Laoder from "@/components/common/SpinLoader";
import { GrValidate } from "react-icons/gr";
import { SFLBoundary } from "@/components/common/SuccessFailureAndLoadingBoundary";
import { useEditedSelectorHook } from "@/store/useEditedHooks";
import { GiCrossMark } from "react-icons/gi";
import OrangeSpan from "@/components/common/OrangeSpan";
import Creator from "@/components/common/Creator";
import OrangeButton from "@/components/common/OrangeButton";
import { useRouter } from "next/navigation";
export default function HandlePortal({
  error,
  name,
  seterror,
}: {
  error: {
    checking: boolean;
    error: boolean;
    success: boolean;
    invaliddata: boolean;
  };
  name: string;
  seterror: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      success: boolean;
      error: boolean;
      invaliddata: boolean;
    }>
  >;
}) {
  return (
    <>
      {error.checking && (
        <ReactPortal>
          <SFLBoundary>
            <Checking name={name} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {error.success && (
        <ReactPortal>
          <SFLBoundary>
            <Success name={name} seterror={seterror} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {error.error && (
        <ReactPortal>
          <SFLBoundary>
            <Error seterror={seterror} />
          </SFLBoundary>
        </ReactPortal>
      )}
      {error.invaliddata && (
        <ReactPortal>
          <SFLBoundary>
            <InvalidData seterror={seterror} />
          </SFLBoundary>
        </ReactPortal>
      )}
    </>
  );
}
export const InvalidData = ({
  seterror,
}: {
  seterror: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      success: boolean;
      error: boolean;
      invaliddata: boolean;
    }>
  >;
}) => {
  const router = useRouter();
  const clickhand = () => {
    seterror({
      checking: false,
      success: false,
      error: false,
      invaliddata: false,
    });
    router.push("/");
  };
  return (
    <>
      <GiCrossMark className="text-red-500 text-2xl" />
      <h1>
        {" "}
        the <OrangeSpan text="Data" size="" /> you provided is{" "}
        <OrangeSpan text="Inaccurate" size="" />
        ..
      </h1>
      <h1>
        <OrangeSpan text="provide correct data" size="" />, and fill all
        information
      </h1>
      <OrangeButton
        title="fill form again"
        width="w-full"
        clickHandler={clickhand}
      />
      <Creator />
    </>
  );
};
export const Checking = ({ name }: { name: string }) => {
  return (
    <>
      <Laoder />
      <h1>
        wait while we are <span className="text-orange-500">checking</span> for
        the result..
      </h1>
      <h1>
        Adding Your Mandal <span className="text-orange-500">{name}</span>
      </h1>
      <h1 className="text-xs mt-4 text-orange-500 self-end">
        created by akshay
      </h1>
    </>
  );
};
export const Success = ({
  name,
  seterror,
}: {
  name: string;
  seterror: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      success: boolean;
      error: boolean;
      invaliddata: boolean;
    }>
  >;
}) => {
  const router = useRouter();
  const uid = useEditedSelectorHook(
    (state) => state.MandalDataReducer.wholeInfo.mandaluid
  );
  return (
    <>
      <h1 className="text-orange-500 flex justify-center items-center flex-row gap-2">
        <GrValidate className="text-green-500" />
        congratulations...
      </h1>
      <h1>
        Mandal :- <span className="text-orange-500">{name}</span>
      </h1>
      <h1>
        your mandal is added{" "}
        <span className="text-orange-500">successfully</span>
      </h1>
      <h1>
        and your id is :- <span className="text-orange-500">{uid}</span>
      </h1>
      <OrangeButton
        title="Return To Home Page"
        width="w-full hover:bg-orange-400 duration-100"
        clickHandler={() => {
          seterror({
            checking: false,
            success: false,
            error: false,
            invaliddata: false,
          });
          router.push("/");
        }}
      />
      <h1 className="text-xs mt-4 self-end text-orange-500">
        created by akshay
      </h1>
    </>
  );
};
export const Error = ({
  seterror,
}: {
  seterror: React.Dispatch<
    React.SetStateAction<{
      checking: boolean;
      success: boolean;
      error: boolean;
      invaliddata: boolean;
    }>
  >;
}) => {
  const router = useRouter();
  return (
    <>
      <GiCrossMark className="text-red-500 text-2xl" />
      <h1>
        <OrangeSpan text="oops!!" size=""></OrangeSpan> something went wrong
      </h1>
      <h1>
        <OrangeSpan text="failed" size="" /> while trying to add your mandal,
        try again...
      </h1>
      <OrangeButton
        title="Return To Home Page"
        width="w-full hover:bg-orange-400 duration-100"
        clickHandler={() => {
          seterror({
            checking: false,
            success: false,
            error: false,
            invaliddata: false,
          });
          router.push("/");
        }}
      />
      <Creator />
    </>
  );
};
