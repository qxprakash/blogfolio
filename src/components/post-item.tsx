import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export async function PostItem({
  slug,
  title,
  description,
  date,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-gray-700 border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            {/* calendar icon */}
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link href={slug} className="bg-purple-800">
          Read More
        </Link>
      </div>
    </article>
  );
}
