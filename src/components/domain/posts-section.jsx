import PostsList from "./posts-list.jsx";
import posts from "../../content/index.js";
import { useState } from "react";
import PostsFilters from "./posts-filters.jsx";

const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date);
};

const sortByName = (a, b) => {
  return a.title.localeCompare(b.title);
};

const sortList = {
  date: sortByDate,
  name: sortByName,
};

const PostsSection = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const [page, setPage] = useState(1);

  const results = posts
    .filter((post) => filter === "all" || post.category === filter)
    .sort(sortList[sort]);

  const postsPerPage = 1;
  const numberOfPages = Math.ceil(results.length / postsPerPage);

  const paginatedResults = results.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  );

  return (
    <div className="mt-16">
      <PostsFilters setFilter={setFilter} setSort={setSort} />
      <PostsList posts={paginatedResults}></PostsList>
      <PaginationControls
        page={page}
        setPage={setPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

const PaginationControls = ({ page, setPage, numberOfPages }) => {
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-300 p-8">
      {pages.map((number) => (
        <button
          key={number}
          onClick={() => setPage(number)}
          className={`cursor-pointer rounded px-3 py-1 font-outfit text-xl ${
            number === page
              ? "bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900"
              : "bg-gray-200 dark:bg-gray-950"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PostsSection;
