export default function SearchInput() {
  return (
    <>
      <div className="my-auto flex text-blue-principal bg-blue-fifth px-3 py-3 lg:py-2 rounded-full justify-between">
        <input
          id="search-Input"
          className="font-roboto w-32 bg-blue-fifth text-sm lg:text-xs hover:appearance-none placeholder-blue-extra font-normal outline-none"
          placeholder="Buscar "
        />
        <i className="fas fa-search text-sm pr-2"></i>
      </div>
    </>
  );
}
