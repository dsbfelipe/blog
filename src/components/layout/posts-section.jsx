import { FunnelSimpleIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import posts from "../../mock/posts";

const PostsSection = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between font-outfit">
        <p className="flex items-center gap-2">
          <FunnelSimpleIcon />
          Filtros
        </p>
        <div>
          <label htmlFor="category">Categoria:</label>
          <select name="category" id="category" className="px-2 outline-0">
            <option className="bg-gray-200" value="all">
              Todas as categorias
            </option>
            <option className="bg-gray-200" value="project">
              Projeto
            </option>
            <option className="bg-gray-200" value="course">
              Curso
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="order">Ordenar:</label>
          <select
            name="category"
            id="category"
            className="border-0 px-2 outline-0"
          >
            <option className="bg-gray-200" value="all">
              Por data
            </option>
            <option className="bg-gray-200" value="project">
              Projeto
            </option>
            <option className="bg-gray-200" value="course">
              Curso
            </option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 dark:border-gray-700">
          <MagnifyingGlassIcon />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="indent-2 focus:outline-0"
          />
        </div>
      </div>
      <div>
        {posts.map((post) => {
          <>{post.title}</>;
        })}
      </div>
    </div>
  );
};

export default PostsSection;
