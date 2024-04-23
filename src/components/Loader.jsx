
const dizi=new Array(99).fill("oha")
const Loader = () => {
  return dizi.map((i, izle)=> (
    <div key={izle} className="p-4 md:p-6 animate-pulse">
      <div className="h-56 bg-gray-700 rounded" />
      <div className="flex items-center mt-4 gap-4">
        <div className="h-12 w-12 bg-gray-700 rounded-full" />
        <div className="flex-1">
          <div className="h-3 w-full bg-gray-700 rounded-full" />
          <div className="h-3 w-44 my-3 bg-gray-700 rounded-full" />
          <div className="flex gap-2">
            <div className="h-2 w-28 bg-gray-700 rounded-full" />
            <div className="h-2 w-28 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
