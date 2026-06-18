import { postData } from "../../data/postData";

const HotPosts = () => {
  return (
    <div className="p-5 ">
        <h3 className="font-medium mb-4">
            Latest Posts 

        </h3>
        <div className="space-y-3">
            {postData.map((post)=>{
                return(
                    <div key={post.id}
                    className="p-3 rounded-lg bg-zinc-900 cursor-pointer font-medium text-sm">
                        {post.title}

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HotPosts