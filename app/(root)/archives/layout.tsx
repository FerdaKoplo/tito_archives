const ArchiveLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#8A9A86] w-full min-h-screen flex flex-col justify-center items-center">
      <main className="max-w-5xl w-full ">{children}</main>
    </div>
  );
};

export default ArchiveLayout;
