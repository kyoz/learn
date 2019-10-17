import Layout from '../layouts/Layout'
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Next.js is Awesome" />
        <PostLink title="About me" />
        <PostLink title="How to deploy Next.js" />
      </ul>
    </Layout>
  )
};
