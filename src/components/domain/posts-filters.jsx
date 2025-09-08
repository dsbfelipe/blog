import { FunnelSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import Select from "../ui/select";

const sortOptions = [
  { value: "date", label: "Por data" },
  { value: "name", label: "Por nome" },
];

const filterOptions = [
  { value: "all", label: "Todas as categorias" },
  { value: "Projeto", label: "Projeto" },
  { value: "Curso", label: "Curso" },
];

const PostsFilters = ({ navigate, filter, sort, setSearch }) => {
  return (
    <div className="flex items-center justify-between font-outfit">
      <p className="hidden items-center gap-2 md:flex">
        <FunnelSimpleIcon />
        Filtros
      </p>
      <Select
        options={filterOptions}
        type="filter"
        query={filter}
        label="Categoria:"
        navigate={navigate}
      />
      <Select
        options={sortOptions}
        type="sort"
        query={sort}
        label="Ordenar:"
        navigate={navigate}
      />
      <SearchBar onChange={(event) => setSearch(event.target.value)} />
    </div>
  );
};

const SearchBar = ({ onChange }) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-md border border-gray-300 px-4 py-2 md:w-auto dark:border-gray-700">
      <MagnifyingGlassIcon />
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={onChange}
        className="indent-2 focus:outline-0"
      />
    </div>
  );
};

export default PostsFilters;
