const InnerContent = ({ children }) => {
  return (
    <div className="min-h-screen w-full max-w-[1366px] flex-1 overflow-hidden px-4">
      {children}
    </div>
  );
};

export default InnerContent;
