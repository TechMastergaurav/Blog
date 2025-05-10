import type { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 px-4 md:px-10 w-full max-w-screen-xl pt-12">
          {/* Main blog content */}
          <main className="md:col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 2nd Dec 2023</div>
            <div className="pt-4 text-lg leading-relaxed text-gray-800">
              {blog.content}
            </div>
          </main>

          {/* Author section */}
          <aside className="md:col-span-4 mt-10 md:mt-0 md:pl-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-lg font-semibold mb-4 text-slate-700">Author</div>
              <div className="flex items-start">
                <div className="pr-4">
                  <Avatar size = "big" name={blog.author.name || "Anonymous"} />
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="pt-2 text-slate-500 text-sm">
                    This is a workaholic person from India who loves to work.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

