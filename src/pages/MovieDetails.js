import MainStructure from "../components/MainStructure";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import BuyTickets from "../components/BuyTickets";

export default function MovieDetails() {
  const { title } = useParams();
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const rate = getRandomInt(11);

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

  axios
    .get("https://8rud6k9lwe.execute-api.us-east-1.amazonaws.com/api/boletas")
    .then((response) => {
      console.log("Datos de la respuesta:", response.data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });

  return (
    <MainStructure showCarrouselBot={false} showCarrouselTop={false}>
      <section className="flex flex-col relative pt-14 pb-32  bg-gradient-to-b from-black to-50% from-50% to-white ">
        <div className="absolute xl:h-130  border rounded-2xl w-96 xl:top-3 xl:left-14 lg:top-3 lg:left-10 lg:h-96">
          <img
            alt="Cineco-Peli"
            src=""
            className="shadow-black shadow-2xl rounded-2xl"
          ></img>
        </div>
        <div className="h-128 flex w-full bg-white">
          <div className="w-1/3" />
          <div className="w-2/3 pr-10 flex flex-col justify-center">
            <div className=" font-roboto w-full rounded-3xl p-7  bg-blue-principal space-x-7 flex">
              <div className="w-1/2 text-white flex flex-col">
                <p className="font-thin h-1/2">
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
                  <p
                    title={title}
                    className=" text-xl pb-5 font-medium text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    Título original:{" "}
                    <span className="font-thin text-lg">{title}</span>
                    {/* Título en inglés: {data?.fields?.titulo_original} */}
                  </p>
                  <div className=" text-lg pb-2 space-y-1 font-medium">
                    <p>
                      Estreno: <span className="font-thin">{"title"}</span>
                    </p>
                    <p>
                      Género: <span className="font-thin">{"title"}</span>{" "}
                    </p>
                  </div>
                  <div className="w-full text-xs flex flex-wrap h-28">
                    <Label
                    // alert={data?.fields?.clasificacion
                    //   .toLowerCase()
                    //   .includes("exclusiva")}
                    >
                      Para todo el Público
                      {/* {data?.fields?.clasificacion} */}
                    </Label>
                    {/* {data?.fields?.duracion && ( */}
                    <Label>
                      {/* {data?.fields?.duracion}  */}
                      114 Min
                    </Label>
                    {/* )} */}
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-white rounded-xl ">
                <p className="text-4xl pt-5 text-center font-medium ">
                  COMPRAR BOLETAS
                </p>
                <BuyTickets></BuyTickets>
              </div>
            </div>
            <div className="flex mx-auto text-2xl font-roboto py-3">
              <p className=" font-medium mr-4">IMDB: </p>
              <div className="flex space-x-1">
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 1 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 2 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 3 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 4 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 5 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 6 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 7 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 8 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate >= 9 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
                <i
                  className={`fas fa-star my-auto ${
                    rate === 10 ? "text-yellow-300" : "text-gray-300"
                  }`}
                ></i>{" "}
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
