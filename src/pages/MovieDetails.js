import React, { useEffect, useState } from "react";
import axios from "axios";
import client from "../contentful";
import { useParams } from "react-router-dom";
import MainStructure from "../components/MainStructure";
import BuyTickets from "../components/BuyTickets";

const Label = ({ alert = false, children }) => {
  return (
    <>
      <div
        style={{ fontSize: "11px" }}
        className={`bg-gray-200 normal-case text-black rounded-sm mr-2 mb-2 h-max px-3 py-1.5 tracking-normal font-medium  ${
          alert ? "text-red-600" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default function MovieDetails() {
  const [step, setStep] = useState(0);
  const [bought, setBought] = useState(0);
  const [click, setClick] = useState(0);
  const { title } = useParams();
  const [rate, setRate] = useState(0);
  useEffect(() => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const rate = getRandomInt(11);
    setRate(rate);
  }, []);

  const [movie, setMovie] = useState({});
  const [functions, setFunctions] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    async function getMovie() {
      await client
        .getEntries({
          content_type: "peliculas", // Reemplaza con el nombre de tu content model
          "fields.titulo": title, // Reemplaza con el nombre del campo y el valor que deseas buscar
        })
        .then((response) => {
          setMovie(response.items[0].fields);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getMovie();

    axios
      .get(
        `https://k6i768dm9k.execute-api.us-east-1.amazonaws.com/movie?titulo=${title}`
      )
      .then((response) => {
        setFunctions(response.data.funciones);
        setPrice(parseInt(response.data.precio, 10));
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [title]);

  return (
    <MainStructure showCarrouselBot={false} showCarrouselTop={false}>
      <section className="flex flex-col relative pt-14  bg-gradient-to-b from-black to-50% from-50% to-white ">
        {/* Imagen que resalta */}
        <div className="absolute xl:h-130 rounded-2xl xl:top-9 xl:left-14 lg:top-3 lg:left-10 lg:h-96">
          <img
            alt="Cineco-Peli"
            src={"https:" + movie?.portada?.fields?.file?.url}
            className="shadow-black xl:h-130 shadow-2xl rounded-2xl"
          ></img>
        </div>
        {/* Cuadro del lado */}
        <div className="h-128 flex w-full bg-blue-terciary">
          <div className="w-1/3" />
          <div className="w-2/3 pr-10 flex flex-col justify-center">
            <div className=" font-roboto w-full rounded-3xl p-7  bg-blue-principal shadow-md shadow-blue-quaterny space-x-7 flex">
              <div className="w-1/2 text-white flex flex-col">
                <p className="font-thin h-1/2 text-blue-principal">
                  Qui laboris dolor in Lorem mollit. Laborum sunt do nostrud
                  cupidatat ut esse culpa culpa ipsum. Eu aute laborum commodo
                  excepteur. Mollit ullamco velit non reprehenderit voluptate
                  ut.
                </p>
                <div className="h-1/2 w-full block">
                  <p
                    title={title}
                    className="text-5xl cursor-default font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    {title}
                  </p>
                  <p className=" text-xl pb-5 font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                    Título en inglés:{" "}
                    <span className="font-thin text-lg">
                      {movie.titulo_original}
                    </span>
                  </p>
                  <div className=" text-lg pb-2 space-y-1 font-medium">
                    <p>
                      Estreno:{" "}
                      <span className="font-normal text-base">
                        {movie.estreno}
                      </span>
                    </p>
                    <p>
                      Género:{" "}
                      <span className="font-normal text-base">
                        {movie.genero}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="w-full text-xs flex flex-wrap h-28">
                    <Label>{movie.clasificacion}</Label>
                    {movie.duracion && (
                      <Label>
                        {movie.duracion}
                        Min
                      </Label>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-white rounded-xl shadow-inner shadow-black ">
                <p className="text-4xl pt-5 text-center font-medium ">
                  COMPRAR BOLETAS
                </p>
                <BuyTickets
                  step={step}
                  setStep={setStep}
                  setBought={setBought}
                  bought={bought}
                  functions={functions}
                  price={price}
                ></BuyTickets>
              </div>
            </div>
            <div className="flex mx-auto text-2xl font-roboto pt-5">
              <p className=" font-medium mr-10 text-white">Calificación: </p>
              <div className="flex space-x-1">
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 1) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 1 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 2) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 2 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 3) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 3 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 4) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 4 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 5) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 5 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 6) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 6 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 7) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 7 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 8) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 8 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 9) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate >= 9 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <button
                  className={`${
                    bought > 0 && click === 0
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                  onClick={() => {
                    bought > 0 && click === 0
                      ? setRate((rate + 10) / 2)
                      : setRate(rate);
                    setClick(1);
                  }}
                >
                  <i
                    className={`fas fa-star my-auto ${
                      rate === 10 ? "text-yellow-300" : "text-gray-300"
                    }`}
                  />
                </button>{" "}
                <p className="ml-2 font-medium text-gray-500 dark:text-gray-400">
                  {rate} de 10
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainStructure>
  );
}
