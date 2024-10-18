import PostDetail from '../_components/PostDetail';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: '帖子标题',
  description: '帖子简介',
};

export default function PostDetailPage() {
  
  return (<div>
    <PostDetail />
  </div>);
}