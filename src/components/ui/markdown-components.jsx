const components = {
  h1: ({ ...props }) => (
    <h1
      className="mb-4 text-center font-outfit text-3xl md:text-4xl"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="mb-2 text-center font-outfit text-xl text-gray-500 dark:text-stone-400"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className="mb-12 text-center font-outfit text-xl text-gray-500 dark:text-stone-400"
      {...props}
    />
  ),
  h4: ({ ...props }) => (
    <h4
      className="mt-8 mb-4 font-outfit text-2xl dark:text-stone-400"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p className="mb-2 text-justify font-inter text-xl leading-8" {...props} />
  ),
  img: ({ ...props }) => (
    <img {...props} loading="lazy" className="my-16 flex" alt={props.alt} />
  ),
  code: ({ ...props }) => (
    <code
      className="inline-block rounded-md bg-secondary px-2 text-base dark:bg-dark-secondary"
      {...props}
    />
  ),
};

export default components;
