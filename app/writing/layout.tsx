const WritingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <main className="max-w-5xl w-full ">{children}</main>
    </div>
  );
};

export default WritingLayout;

