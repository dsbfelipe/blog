const Option = ({ value, label }) => {
  return (
    <option className="bg-primary dark:bg-dark-primary" value={value}>
      {label}
    </option>
  );
};

export default Option;
