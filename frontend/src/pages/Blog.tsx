import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../component/FullBlog";
import { BlogSkeleton } from "../component/BlogSkeleton";
import { Appbar } from "../component/Appbar";

export const Blog = () =>{
    const { id } = useParams();
    const {loading,blog} = useBlog({
        id: id ||""
    });
    if(loading || !blog){
    return <div className="flex flex-col items-center space-y-4">
        <div>
      <Appbar/>
        
      
         <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
      </div>
       
    </div>
    }
    return <div>
   <FullBlog blog={blog} />
    </div>
}