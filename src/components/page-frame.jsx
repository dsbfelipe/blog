const PageFrame = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen justify-center bg-slate-50 dark:bg-slate-900 dark:text-slate-50">
      {children}
    </div>
  );
};

export default PageFrame;
