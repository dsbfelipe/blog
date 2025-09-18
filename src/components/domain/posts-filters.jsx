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

const PostsFilters = ({ navigate, filter, sort, search }) => {
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
      <SearchBar navigate={navigate} search={search} />
    </div>
  );
};

const SearchBar = ({ navigate, search }) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-md border border-secondary px-4 py-2 md:w-auto dark:border-dark-secondary">
      <MagnifyingGlassIcon />
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={(event) => {
          navigate({
            search: (prev) => ({ ...prev, search: event.target.value }),
            resetScroll: false,
          });
        }}
        className="indent-2 focus:outline-0"
      />
    </div>
  );
};

export default PostsFilters;
