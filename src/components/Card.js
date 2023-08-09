export default function Card({ data, others = false }) {
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
            src={"https:" + data?.fields?.portada?.fields?.file?.url}
            alt="Imagen-Pelicula-Otros"
            className="mx-auto w-full border rounded-md"
          />
          <div className=" h-1/3">
            <p className=" text-xl pt-2 pb-1 font-noto font-medium ">
              {data?.fields?.titulo}
            </p>
            <div className=" text-xs font-medium pb-2 space-y-1">
              <p>
                Estreno{" "}
                <span className="font-normal">{data?.fields?.estreno}</span>
              </p>
              <p>
                Género{" "}
                <span className="font-normal">
                  {data?.fields?.clasificacion}
                </span>
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
            src={"https:" + data?.fields?.portada?.fields?.file?.url}
            alt="Imagen-Pelicula"
            className="mx-auto w-full border rounded-md"
          />
          <div className=" h-1/3">
            <p className=" text-lg pt-2 pb-1 text-blue-principal font-medium ">
              {data?.fields?.titulo}
            </p>
            <p className=" text-xs pb-1 font-medium">
              Título en inglés: {data?.fields?.titulo_original}
            </p>
            <div className=" text-xs pb-2 space-y-1">
              <p>Estreno: {data?.fields?.estreno}</p>
              <p>Género: {data?.fields?.duracion}</p>
            </div>
            <div className="w-full text-xs flex flex-wrap h-28">
              <Label
                alert={data?.fields?.clasificacion
                  .toLowerCase()
                  .includes("exclusiva")}
              >
                {data?.fields?.clasificacion}
              </Label>
              {data?.fields?.duracion && (
                <Label>{data?.fields?.duracion} Min</Label>
              )}
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
