import formatDate from "../../utils/format-date";
import { Link } from "@tanstack/react-router";
import { BookOpenIcon } from "@phosphor-icons/react";

const PostItem = ({ title, category, date, alt, tags, path }) => {
  return (
    <div className="mb-12 flex w-full flex-col justify-between border-t border-secondary pt-12 font-outfit md:flex-row dark:border-dark-secondary">
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:justify-between md:gap-0">
        <p className="text-gray-500 dark:text-gray-400">{category}</p>
        <Link to="/posts/$post" params={{ post: path }}>
          <img
            className="mb-6 aspect-[4/3] object-cover md:mr-12 md:mb-0 md:max-w-96"
            src={`/images/${path}/index.webp`}
            alt={alt}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Link to="/posts/$post" params={{ post: path }}>
          <p className="mt-4 text-4xl">{title}</p>
        </Link>
        <p className="mt-2 mb-8 text-gray-500 dark:text-gray-400">
          {formatDate(date)}
        </p>
        <Link to="/posts/$post" params={{ post: path }}>
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 border border-secondary px-4 py-3 hover:bg-hover md:w-auto dark:border-dark-secondary dark:hover:bg-dark-hover">
            <BookOpenIcon />
            Ler mais
          </button>
        </Link>
      </div>
    </div>
  );
};

const Tag = ({ tag }) => {
  return <div className="border border-gray-400 px-2">{tag}</div>;
};

export default PostItem;
