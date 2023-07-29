import { getTags } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Tags() {
  const tags = await getTags();

  // return post.map(async (post) => {
  return (
    <section className="dropdown dropdown-end mt-6">
      <label tabIndex={0} className="m-1">
        Tags
      </label>
      <nav>
        <ul
          tabIndex={0}
          className="dropdown-content bg-red-700 text-white menu p-2 shadow rounded-box w-52"
        >
          {tags.map((tag: any) => (
            <li key={tag._id}>
              <Link href={`/tags/${tag.slug}`}>{tag.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
