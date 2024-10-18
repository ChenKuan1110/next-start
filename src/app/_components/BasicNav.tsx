'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavItem = ({ title, path }: { title: string, path: string }) => {
  const pathname = usePathname();
  let className = 'p-1 hover:text-bold hover:border-b-4 hover:border-orange-400 transition-all duration-300 ease-in-out hover:text-orange-400';
  const activeClass = 'border-b-4 border-orange-400';

  // 匹配路由，添加样式
  if (pathname.split('/')[1] === path.split('/')[1]) {
    className += ` ${ activeClass }`;
  }
  return <Link href={path} className={className}>{ title}</Link>
}

export default function BasicNav() { 

  return <nav className="p-4 flex items-center justify-between gap-[20px] font-bold border-b">
    <span className="bg-orange-400 p-4 text-white rounded-md">Logo</span>
    <div className="flex gap-4">
      <NavItem title="首页" path="/" />
      <NavItem title="帖子" path="/post" />
      <NavItem title="关于" path="/about" />
    </div>
  </nav>
}