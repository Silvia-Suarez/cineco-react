export default function Card({
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
      {others ? (
        <div
          style={{ boxShadow: "0 0 10px rgba(0,0,0,.1)" }}
          className=" h-full font-roboto capitalize xl:w-80 w-64 px-5 py-4 flex flex-col tracking-wide"
        >
          <img
            src={image}
            alt="Imagen-Pelicula-Otros"
            className="mx-auto w-full border rounded-md"
          />
          <div className=" h-1/3">
            <p className=" text-xl pt-2 pb-1 font-noto font-medium ">{title}</p>
            <div className=" text-xs font-medium pb-2 space-y-1">
              <p>
                Estreno <span className="font-normal">{date}</span>
              </p>
              <p>
                Género <span className="font-normal">{gender}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          // onClick={() => router.push(`/movie-detail/${id}`)}
          style={{ boxShadow: "0 0 10px rgba(0,0,0,.1)" }}
          className=" h-full font-roboto capitalize w-80 px-5 py-4 flex flex-col rounded-md tracking-wide"
        >
          <img
            src={image}
            alt="Imagen-Pelicula"
            className="mx-auto w-full border rounded-md"
          />
          <div className=" h-1/3">
            <p className=" text-lg pt-2 pb-1 text-blue-principal font-medium ">
              {title}
            </p>
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
      )}{" "}
    </>
  );
}
