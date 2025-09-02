import formatDate from "../../utils/format-date";
import { Link } from "@tanstack/react-router";
import { BookOpenIcon } from "@phosphor-icons/react";

const PostItem = ({ title, category, date, image, alt, tags, link }) => {
  return (
    <div className="mb-12 flex w-full flex-col justify-between border-t border-gray-300 pt-12 font-outfit md:flex-row dark:border-gray-700">
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:justify-between md:gap-0">
        <p className="text-gray-500 dark:text-gray-300">{category}</p>
        <img
          className="mb-6 md:mr-12 md:mb-0 md:max-w-96"
          src={image}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <p className="mt-4 text-4xl">{title}</p>
        <p className="mt-2 mb-8 text-gray-500">{formatDate(date)}</p>
        <Link to={link}>
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 bg-gray-950 px-6 py-3 text-gray-50 shadow-md md:w-auto dark:bg-gray-50 dark:text-gray-950">
            <BookOpenIcon />
            Ler mais
          </button>
        </Link>
      </div>
    </div>
  );
};

const Tag = ({ tag }) => {
  return (
    <div>
      <div className="border border-gray-400 px-2">{tag}</div>
    </div>
  );
};

export default PostItem;
