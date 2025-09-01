import formatDate from "../../utils/format-date";
import { Link } from "@tanstack/react-router";

const PostItem = ({ title, category, date, image, tags, link }) => {
  return (
    <div className="mb-12 flex w-full justify-between border-t border-gray-300 pt-12 font-outfit">
      <div className="flex flex-1 justify-between">
        <p className="text-gray-500 dark:text-gray-300">{category}</p>
        <img className="mr-12 max-w-96" src={image} alt={title} />
      </div>
      <div className="flex-1">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <p className="mt-4 text-4xl">{title}</p>
        <p className="mt-2 text-gray-500">{formatDate(date)}</p>
        <Link to={link}>
          <button>Ler mais</button>
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
