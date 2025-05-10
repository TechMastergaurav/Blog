import { Appbar } from "../component/Appbar"
import { BlogCard } from "../component/BlogCard"
import { BlogSkeleton } from "../component/BlogSkeleton";
import { useblogs } from "../hooks"


export const Blogs = () => {
    const {loading,blogs} = useblogs();
    if(loading){
    return <div className="flex flex-col items-center space-y-4">
        <div>
       <Appbar/>
        
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        </div>
    </div>
    }
    return <div>
        <Appbar/>
 <div className="flex justify-center">
 <div className="max-w-xl">
     {blogs.map(blog => <BlogCard
     id={blog.id}
     authorName={blog.author.name || "Anonymus"}
     title={blog.title}
     content={blog.content}
     publishedDate={"2 feb 2024"}
     />)}
    </div>
    </div>
</div>
    
}