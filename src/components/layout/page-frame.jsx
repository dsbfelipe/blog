const PageFrame = ({ children }) => {
  return (
    <div className="flex min-h-screen w-dvw justify-center bg-primary text-text dark:bg-dark-primary dark:text-dark-text">
      {children}
    </div>
  );
};

export default PageFrame;
