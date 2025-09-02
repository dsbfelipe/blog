import { FunnelSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import PostsList from "../domain/posts-list";
import posts from "../../content/index.js";
import { useState } from "react";

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

  const results = posts
    .filter((post) => filter === "all" || post.category === filter)
    .sort(sortList[sort]);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between font-outfit">
        <p className="hidden items-center gap-2 md:flex">
          <FunnelSimpleIcon />
          Filtros
        </p>
        <div className="hidden md:block">
          <label htmlFor="category">Categoria:</label>
          <select
            name="category"
            id="category"
            className="px-2 outline-0"
            onChange={(event) => setFilter(event.target.value)}
          >
            <option className="bg-gray-200 dark:bg-gray-950" value="all">
              Todas as categorias
            </option>
            <option className="bg-gray-200 dark:bg-gray-950" value="Projeto">
              Projeto
            </option>
            <option className="bg-gray-200 dark:bg-gray-950" value="Curso">
              Curso
            </option>
          </select>
        </div>

        <div className="hidden md:block">
          <label htmlFor="order">Ordenar:</label>
          <select
            name="category"
            id="category"
            className="border-0 px-2 outline-0"
            onChange={(event) => setSort(event.target.value)}
          >
            <option className="bg-gray-200 dark:bg-gray-950" value="date">
              Por data
            </option>
            <option className="bg-gray-200 dark:bg-gray-950" value="name">
              Por nome
            </option>
          </select>
        </div>

        <div className="flex w-full items-center gap-2 rounded-md border border-gray-300 px-4 py-2 md:w-auto dark:border-gray-700">
          <MagnifyingGlassIcon />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="indent-2 focus:outline-0"
          />
        </div>
      </div>
      <PostsList posts={results}></PostsList>
    </div>
  );
};

export default PostsSection;
