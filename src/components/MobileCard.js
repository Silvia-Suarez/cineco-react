export default function MobileCard({
  title,
  o_title,
  id,
  date,
  clasification,
  duration,
  gender,
  image,
  others = false,
}) {
  const Label = ({ alert = false, children }) => {
    return (
      <>
        <div
          style={{ fontSize: "11px" }}
          className={`bg-gray-200 normal-case rounded-sm mr-2 mb-2 h-max px-3 py-1.5 tracking-normal font-medium  ${
            alert ? "text-red-600" : ""
          }`}
        >
          {children}
        </div>
      </>
    );
  };
  return (
    <>
      <div
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        className="w-full mb-2.5 font-roboto justify-start capitalize flex bg-white px-5 py-4 rounded-md tracking-wide"
      >
        <img
          src={image}
          alt="Imagen-Pelicula"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          className="mx-auto w-1/3 border rounded-md"
        />
        <div className="w-2/3 pl-4">
          <p className=" text-lg pb-1 font-medium ">{title}</p>
          <p className=" text-xs pb-1 font-medium">
            Título en inglés: {o_title}
          </p>
          <div className=" text-xs pb-2 space-y-1">
            <p>Estreno: {date}</p>
            <p>Género: {gender}</p>
          </div>
          <div className="w-full text-xs flex flex-wrap h-28">
            <Label alert={clasification.toLowerCase().includes("exclusiva")}>
              {clasification}
            </Label>
            {duration && <Label>{duration} Min</Label>}
          </div>
        </div>
      </div>
    </>
  );
}
