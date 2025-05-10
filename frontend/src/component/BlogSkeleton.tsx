import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 ml-2 flex-1"></div>
          <div className="pl-2 flex justify-center flex-col">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-600 text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-24"></div>
          </div>
        </div>

        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        </div>

        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        </div>

        <div className="text-slate-600 text-sm font-thin pt-4">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      </div>
    </div>
  );
};
