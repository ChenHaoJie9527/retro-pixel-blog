import Link from "next/link";
import { posts } from "@/data/posts";
import type { Post } from "@/data/posts";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const list = post
    .filter((item) => item.category === item.category)
    .slice(0, 3);
  return list.map((item2) => (
    <Link
      key={item2.id}
      href={`/posts/${item2.id}`}
      className="block p-6 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg"
    >
      <h4 className="text-lg font-pixel mb-2">{item2.title}</h4>
      <span className="inline-block px-2 py-1 font-bold rounded text-black font-mono text-sm bg-green-600">
        {item2.category}
      </span>
    </Link>
  ));
}

export default function Home() {
  const categories = ["Tech", "Finance", "Art"];

  return (
    <div>
      <h2 className="text-2xl font-pixel mb-6">Latest Pixelated Windows</h2>
      {categories.map((item) => (
        <div className="mb-8" key={item}>
          <h3 className="text-xl font-pixel mb-4">{item}</h3>
          <div className="grid gap-6">
            <PostCard post={posts} />
          </div>
          <Link
            href={`/posts/${item.toLowerCase()}`}
            className="inline-block mt-4 font-pixel text-sm underline"
          >
            See all {item} posts
          </Link>
        </div>
      ))}
    </div>
  );
}
