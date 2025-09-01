const PageFrame = ({ children }) => {
  return (
    <div className="flex min-h-screen w-dvw justify-center bg-gray-200 dark:bg-gray-950 dark:text-gray-50">
      {children}
    </div>
  );
};

export default PageFrame;
