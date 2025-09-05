import PostsList from "./posts-list.jsx";
import PostsFilters from "./posts-filters.jsx";
import PaginationControls from "../ui/pagination-controls.jsx";
import { Route } from "../../routes/index.jsx";
import { useNavigate } from "@tanstack/react-router";

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

const PostsSection = ({ posts }) => {
  const { page, filter, sort } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const results = applyQuery(posts, filter, sort);
  const { numberOfPages, paginatedResults } = getPagination(results, page, 5);

  if (page > numberOfPages)
    navigate({ search: { page: numberOfPages, filter, sort } });

  return (
    <div className="mt-16">
      <PostsFilters navigate={navigate} filter={filter} sort={sort} />
      <PostsList posts={paginatedResults}></PostsList>
      <PaginationControls
        page={page}
        navigate={navigate}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

const applyQuery = (posts, filter, sort) => {
  return posts
    .filter((post) => filter === "all" || post.category === filter)
    .sort(sortList[sort]);
};

const getPagination = (results, page, postsPerPage) => {
  const numberOfPages = Math.ceil(results.length / postsPerPage);

  return {
    numberOfPages,
    paginatedResults: results.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage,
    ),
  };
};

export default PostsSection;
