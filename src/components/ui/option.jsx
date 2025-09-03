const Option = ({ value, label }) => {
  return (
    <option className="bg-gray-200 dark:bg-gray-950" value={value}>
      {label}
    </option>
  );
};

export default Option;
