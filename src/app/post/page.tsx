import PostItem from './_components/PostItem';



const PostPage = async () => {
  
  const data = await fetch('https://dummyjson.com/posts');
  const { posts } = await data.json();  

  return (
    <div className="post-page p-2">
      <h2 className="text-[18px] text-center mt-4">所有帖子</h2>
      <ul className="">
        {
          posts.map((post: Post) => (
            <PostItem key={post.id} post={post} />
          ))
        }
      </ul>
    </div>
  );
}

export default PostPage;
