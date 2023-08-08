const PrincipalButton = ({ action, children = "Ver todo" }) => {
  return (
    <>
      <button
        onClick={() => action()}
        className="flex rounded-full py-3 px-6 font-roboto text-base font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal"
      >
        {children}
        <i className="fas ml-3 fa-chevron-right text-xs my-auto" />
      </button>
    </>
  );
};

const OptionsButton = ({ active = false, action, children }) => {
  return (
    <>
      <div
        onClick={() => action()}
        className={`lg:w-auto w-full py-3 px-4 tracking-wide flex flex-col text-center cursor-pointer justify-center font-roboto text-white hover:bg-blue-secondary xl:rounded-full rounded-2xl text-xs xl:text-sm ${
          active ? " bg-blue-secondary" : "bg-blue-principal"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const SecondaryButton = ({ type, action, children }) => {
  return (
    <>
      <button
        type={type}
        onClick={() => action()}
        className="flex cursor-pointer justify-center rounded-full py-3 px-6 font-roboto text-center text-sm font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal"
      >
        {children}
        <i className="fas ml-3 fa-chevron-right text-xs my-auto" />
      </button>
    </>
  );
};

export { PrincipalButton, SecondaryButton, OptionsButton };
