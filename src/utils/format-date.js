const formatDate = (iso) => {
  const date = new Date(iso);

  return date.toLocaleDateString("pt-BR");
};

export default formatDate;
