export default function AltCard({ image, id }) {
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0,0,0,.1)" }}
      className=" w-full font-roboto capitalize px-5 py-4 flex flex-col "
    >
      <img
        src={image}
        alt="Imagen-Pelicula"
        className="mx-auto w-full border rounded-md"
      />
    </div>
  );
}
