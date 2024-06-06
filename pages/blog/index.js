import Link from 'next/link';

export async function getStaticProps() {
    const data = (await import('../../public/data.json')).default;
    return {
      props: {
        posts: data,
      },
    };
  }


export default function Blog({ posts }) {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
