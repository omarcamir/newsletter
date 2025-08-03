const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-t-gray-700 border-gray-200 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
