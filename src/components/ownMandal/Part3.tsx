import { notedvarganitype } from "@/app/ownMandal/page";
import CopyOption from "../common/CopyOption";
export type varganiindtype =
  | "varganiuid"
  | "varganidate"
  | "varganionline"
  | "varganioffline"
  | "varganitotal";
export default function Part3({
  impData,
}: {
  impData: { isEmpty: boolean; data: any[]; varganiinhand: number };
}) {
  return (
    <div className="w-full font-bold tracking-wide flex flex-col gap-2  justify-center items-center text-base md:text-lg p-2">
      {impData.isEmpty && (
        <div className="w-full flex justify-center items-center">
          <h1 className="w-max p-2 rounded-md text-black tracking-widest bg-white">
            You have{" "}
            <span className="text-red-500">No noted / stored vargani</span>{" "}
            yet...
          </h1>
        </div>
      )}
      {!impData.isEmpty && (
        <>
          <div className="w-full  p-2 rounded-md flex justify-end items-center">
            <h1>
              Total vargani Inhand:-{" "}
              <span className="p-2 bg-orange-500 text-white cursor-pointer hover:border-black hover:bg-orange-400 border-2 border-orange-500 rounded-md">
                {impData.varganiinhand}
              </span>
            </h1>
          </div>
          <div className="w-full md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 grid-rows-* place-content-center place-items-center gap-4">
            {impData.data.map((value: notedvarganitype, index) => {
              return (
                <div
                  key={`${value.varganiuid} ${index}`}
                  className="w-full flex justify-center items-center flex-col gap-2 h-full rounded-md bg-white px-2 py-4 border-2 border-gray-200 hover:border-black duration-150"
                >
                  {Object.keys(value).map((nestedvalue, nestedindex) => {
                    return (
                      <div
                        key={`${nestedindex} ${index}`}
                        className="w-full flex justify-center items-start flex-col gap-1"
                      >
                        <h1 className="text-orange-500">{nestedvalue}</h1>
                        <div className="flex justify-center w-full items-center flex-row gap-2">
                          <h1 className="px-2 hover:bg-orange-200 w-full  py-3 border-2 border-orange-200 bg-orange-50 rounded-md">
                            {value[`${nestedvalue as varganiindtype}`]}{" "}
                          </h1>
                          <CopyOption
                            textToCopy={
                              value[`${nestedvalue as varganiindtype}`] + ""
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
