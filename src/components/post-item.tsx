import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <article className="border-b border-gray-800 py-6 last:border-b-0">
      <h2 className="text-xl font-semibold text-white mb-2">
        <Link href={slug} className="hover:text-purple-400 transition-colors">
          {title}
        </Link>
      </h2>
      <div className="text-gray-400 mb-3 text-sm flex items-center">
        <FaRegCalendarAlt className="w-3 h-3 mr-2" />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      {description && (
        <p className="text-gray-300 mb-4 text-sm">
          {truncateDescription(description, 30)}
        </p>
      )}
      <Link
        href={slug}
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-400 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-300 ease-in-out group"
      >
        <span className="text-sm font-medium mr-2">Read More</span>
        <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
      </Link>
    </article>
  );
}