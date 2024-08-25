import { posts } from "#site/content";
import { QueryPagination } from "@/components/pagination";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 5;
interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  return (
    <div className="container max-2-4xl pb-4 lg:pb-8">
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Content Here !</p>
      )}
      <QueryPagination className="" totalPages={totalPages} />
    </div>
  );
}
