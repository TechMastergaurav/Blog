import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex items-center justify-between px-10 py-4">
      <Link to="/blogs">
        <div className="text-xl font-semibold cursor-pointer">
          Medium
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Link to={"/publish"}>
         <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none"
        >
          Create
        </button>
        </Link>
        <Avatar size="big" name="Gaurav" />
       
      </div>
    </div>
  );
};
