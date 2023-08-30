import { OptionsButton } from "./Buttons";
const BuyTickets = () => {
  return (
    <>
      <div className="flex flex-col px-12 space-y-7 pt-5">
        <div className="flex">
          <label for="date" className="text-center w-1/2 text-sm font-medium">
            Fecha
          </label>
          <select
            id="date"
            className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
          >
            <option selected>Escoja una fecha</option>
            <option value="1">22/08/2023</option>
            <option value="2">23/08/2023</option>
            <option value="3">24/08/2023</option>
            <option value="4">25/08/2023</option>
          </select>
        </div>
        <div className="flex">
          <label for="hour" className="text-center w-1/2 text-sm font-medium">
            Hora
          </label>
          <select
            id="hour"
            className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
          >
            <option selected>Escoja un horario</option>
            <option value="1">2:30 pm</option>
            <option value="2">4:00 pm</option>
            <option value="3">8:00 pm</option>
            <option value="4">9:30 pm</option>
          </select>
        </div>
        <div className="flex">
          <label
            for="quantity"
            className=" text-center text-sm w-1/2 font-medium"
          >
            Cantidad
          </label>
          <select
            id="quantity"
            className="bg-blue-principal w-1/2 ml-auto text-white outline-none text-sm rounded-lg p-2.5"
          >
            <option selected>Escoja cuantas boletas</option>
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
        <OptionsButton>Comprar</OptionsButton>
      </div>
    </>
  );
};

export default BuyTickets;
