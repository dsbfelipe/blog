import formatDate from "../../utils/format-date";
import { Link } from "@tanstack/react-router";
import { BookOpenIcon } from "@phosphor-icons/react";

const PostItem = ({ title, category, date, alt, tags, path }) => {
  return (
    <div className="border-secondary font-outfit dark:border-dark-secondary mb-12 flex w-full flex-col justify-between border-t pt-12 md:flex-row">
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:justify-between md:gap-0">
        <p className="text-lg text-gray-500 dark:text-gray-400">{category}</p>
        <Link to="/posts/$post" params={{ post: path }}>
          <img
            className="mb-6 aspect-[4/3] rounded-4xl object-cover md:mr-12 md:mb-0 md:max-w-96"
            src={`/images/${path}/index.webp`}
            alt={alt}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex-1 md:mt-4">
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
          <button className="border-secondary hover:bg-hover dark:border-dark-secondary dark:hover:bg-dark-hover flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl border px-4 py-3 md:w-auto">
            <BookOpenIcon />
            Ler mais
          </button>
        </Link>
      </div>
    </div>
  );
};

const Tag = ({ tag }) => {
  return <div className="rounded-full border border-gray-400 px-4">{tag}</div>;
};

export default PostItem;
