import Link from 'next/link';


export default function PostItem({post}: {post: Post}) {
  return (<li
    key={post.id}
    className="p-4 border-b border-gray-300 hover:bg-gray-100 cursor-pointer flex"
  >
    <Link href={`/post/${ post.id }`} className="flex-1">
      <h3 className="text-2xl text-orange-400 hover:font-bold">{post.title}</h3>
      <p className="text-[12px] text-gray-400 mt-2">{post.body.substring(0, 200) + '...'}</p>
    </Link>
    <div className="mt-2 flex gap-4">
    <span className="flex flex-col items-center">
      <span >👍</span>
      <span className="text-sm">{ post.reactions.likes}</span>
    </span>
    <span className="flex flex-col items-center">
      <span>👎</span>
      <span className="text-sm">{post.reactions.dislikes}</span>
    </span>
    </div>
  </li>);
}