import { FunnelSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import Option from "../ui/option";

const sortOptions = [
  { value: "date", label: "Por data" },
  { value: "name", label: "Por nome" },
];
const filterOptions = [
  { value: "all", label: "Todas as categorias" },
  { value: "Projeto", label: "Projeto" },
  { value: "Curso", label: "Curso" },
];

const PostsFilters = ({ setFilter, setSort }) => {
  return (
    <div className="flex items-center justify-between font-outfit">
      <p className="hidden items-center gap-2 md:flex">
        <FunnelSimpleIcon />
        Filtros
      </p>
      <Select onChange={setFilter} options={filterOptions} label="Categoria:" />
      <Select onChange={setSort} options={sortOptions} label="Ordenar:" />
      <div className="flex w-full items-center gap-2 rounded-md border border-gray-300 px-4 py-2 md:w-auto dark:border-gray-700">
        <MagnifyingGlassIcon />
        <input
          type="text"
          placeholder="Pesquisar..."
          className="indent-2 focus:outline-0"
        />
      </div>
    </div>
  );
};

const Select = ({ label, options, onChange }) => {
  return (
    <div className="hidden md:block">
      <label htmlFor="category">{label}</label>
      <select
        name="category"
        id="category"
        className="px-2 outline-0"
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
    </div>
  );
};

export default PostsFilters;
