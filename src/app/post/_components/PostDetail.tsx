'use client';
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";




const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);


  const fetchPostDetail = useCallback(async () => {
    const resp = await fetch(`https://dummyjson.com/posts/${id}`);
    const res = await resp.json();
    setPost(res);
  }, [id])

  useEffect(() => {
    fetchPostDetail()
  }, [fetchPostDetail]);

  if(!post) return <div className="text-center mt-10 text-2xl">Loading...</div>


  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">{post?.title}</h1>
      <div className="flex justify-center gap-4">
        {post?.tags.map((tag: string) => (<span
          key={tag}
          className="px-1 text-xs border rounded border-orange-400 text-orange-400"
        >{tag}</span>))}
      </div>

      <p className="mt-4 p-2 line-height-1 text text-gray-500">{ post?.body}</p>

      <div className="p-4 flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <span>👍</span>
          <span className="text-sm">{post?.reactions.likes}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>👎</span>
          <span className="text-sm">{post?.reactions.dislikes}</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
