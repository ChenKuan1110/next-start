import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Post Page",
  description: "Post Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-6 py-2">
      <ul className="flex gap-2 pb-4 cursor-pointer">
        <li className="font-bold hover:text-orange-400">推荐</li>
        <li className="hover:text-orange-400">关注</li>
        <li className="hover:text-orange-400">同城</li>
      </ul>
      {children}
    </div>
  );
}
