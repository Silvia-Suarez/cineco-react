export default function Input({ value, onChangeInput, placeholder }) {
  return (
    <>
      <label
        aria-label="normal-Input"
        className="font-roboto text-sm text-gray-secondary"
      >
        Correo Electrónico
      </label>
      <div className="my-auto flex text-blue-principal bg-blue-fifth px-3 py-3 lg:py-2 rounded-full justify-between">
        <input
          id="normal-Input"
          value={value}
          onChange={(e) => onChangeInput(e.target.value)}
          className="font-roboto w-full bg-blue-fifth text-sm lg:text-xs hover:appearance-none placeholder-blue-extra font-normal outline-none"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
