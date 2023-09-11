import { useState } from "react";
import Swal from "sweetalert2";
import { Auth } from "aws-amplify";

const BuyTickets = ({ functions, price }) => {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState("");
  const [tickets, setTickets] = useState(0);
  function alertNoSesionError() {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos,",
      text: "Ya no hay funciones de esta película",
    });
  }
  function alertNoSesionError() {
    Swal.fire({
      icon: "error",
      title: "Noop,",
      text: "No puedes comprar una boleta sin iniciar sesión",
      footer: "Tampoco tan concucho, colabore",
    });
  }
  return (
    <>
      {step === 2 ? (
        <>
          <div className="text-center pt-24 w-full">
            <i className="fas fa-check-circle text-14xl text-emerald-400 "></i>
            <p className="font-roboto font-medium pt-8 text-sm">
              Su compra fue realizada con éxito
            </p>
            <a
              className=" cursor-pointer text-xs underline font-noto font-medium text-blue-extra"
              onClick={() => setStep(0)}
            >
              Comprar nuevamente
            </a>
          </div>
        </>
      ) : step === 1 ? (
        <div className="w-full px-12 h-full">
          <div className="w-full flex flex-col pt-12 h-full">
            <p className="text-lg text-justify font-roboto">
              Su compra se realizará por <b>{tickets} boletas</b>, para la
              fecha: <b>{date}</b> a la hora <b>{schedule}</b>
            </p>
            <p className="text-xl font-normal pt-5 text-center font-roboto">
              Total: <b>$ {price * tickets}</b>
            </p>
            <div className="flex mx-auto space-x-10 pt-8">
              <button
                onClick={() => setStep(0)}
                className={`bg-white border border-blue-principal lg:w-auto w-full py-3 px-4 tracking-wide flex flex-col text-center cursor-pointer justify-center font-roboto text-blue-principal hover:bg-blue-secondary hover:border-blue-secondary hover:text-white xl:rounded-full rounded-2xl text-xs xl:text-sm`}
              >
                Cancelar
              </button>
              <button
                onClick={() => setStep(2)}
                className={`bg-blue-principal lg:w-auto w-full py-3 px-4 tracking-wide flex flex-col text-center cursor-pointer justify-center font-roboto text-white hover:bg-blue-secondary xl:rounded-full rounded-2xl text-xs xl:text-sm`}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-12 space-y-7 pt-5">
          <div className="flex">
            <label
              htmlFor="date"
              className="text-center w-1/2 text-sm font-medium"
            >
              Fecha
            </label>
            <select
              id="date"
              disabled={functions.length === 0}
              className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
              onChange={(e) => setDate(e.currentTarget.value)}
            >
              {functions.length === 0 ? (
                <option defaultValue={"0"}>No hay fechas disponibles</option>
              ) : (
                <>
                  <option defaultValue={"0"}>Escoja una fecha</option>
                  {functions.map((fun, i) => (
                    <option key={fun._id + "key"} value={`${i + 10}/09/2023`}>
                      {i + 10}/09/2023
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <div className="flex">
            <label
              htmlFor="hour"
              className="text-center w-1/2 text-sm font-medium"
            >
              Hora
            </label>
            <select
              id="hour"
              disabled={functions.length === 0}
              className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
              onChange={(e) => setSchedule(e.currentTarget.value)}
            >
              {functions.length === 0 ? (
                <option defaultValue={"0"}>No hay fechas disponibles</option>
              ) : (
                <>
                  <option defaultValue={"0"}>Escoja una fecha</option>
                  {functions.map((fun, i) => (
                    <option key={fun._id + "key"} value={fun.horario}>
                      {fun.horario}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <div className="flex">
            <label
              htmlFor="quantity"
              className=" text-center text-sm w-1/2 font-medium"
            >
              Cantidad
            </label>
            <select
              id="quantity"
              disabled={functions.length === 0}
              className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
              onChange={(e) => setTickets(parseInt(e.currentTarget.value, 10))}
            >
              <option defaultValue={"0"}>Numero de boletas</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div
            onClick={() => {
              Auth?.user
                ? alertNoSesionError()
                : functions.length === 0
                ? alertError()
                : setStep(1);
            }}
            className={`bg-blue-principal lg:w-auto w-full py-3 px-4 tracking-wide flex flex-col text-center cursor-pointer justify-center font-roboto text-white hover:bg-blue-secondary xl:rounded-full rounded-2xl text-xs xl:text-sm`}
          >
            Comprar
          </div>
        </div>
      )}
    </>
  );
};

export default BuyTickets;
