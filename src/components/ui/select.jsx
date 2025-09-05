import Option from "./option";

const Select = ({ label, options, type, query, navigate }) => {
  return (
    <div className="hidden md:block">
      <label htmlFor="category">{label}</label>
      <select
        name="category"
        id="category"
        className="px-2 outline-0"
        value={query || "all"}
        onChange={(event) => {
          navigate({
            search: (prev) => ({ ...prev, [type]: event.target.value }),
          });
        }}
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

export default Select;
