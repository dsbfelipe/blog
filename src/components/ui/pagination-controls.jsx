const PaginationControls = ({ page, numberOfPages, navigate }) => {
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-300 p-8">
      {pages.map((number) => (
        <button
          key={number}
          onClick={() => {
            navigate({
              search: (prev) => ({ ...prev, page: number }),
            });
          }}
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

export default PaginationControls;
