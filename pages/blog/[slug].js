import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const data = (await import('../../public/data.json')).default;
    const paths = data.map(post => ({
      params: { slug: post.title.toLowerCase().replace(/\s+/g, '-') }
    }));
    return { paths, fallback: false };
  }


  export async function getStaticProps({ params }) {
    const data = (await import('../../public/data.json')).default;
    const post = data.find(post => post.title.toLowerCase().replace(/\s+/g, '-') === params.slug);
    return {
      props: { post },
    };
  }


export default function Post({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
