import logo from "../assets/images/logo_cineco.svg";
import SearchInput from "./Inputs/SearchInput";
import { OptionsButton } from "./Buttons";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Navbar({signOut, authkey}) {
  const navigate = useNavigate();
  return (
    <>
      <div className=" lg:absolute lg:block hidden z-50 top-0 left-0 w-full h-24 bg-black">
        <div className="w-full flex h-full  xl:px-0 px-10 py-6">
          <div className="ml-5 xl:ml-0 xl:w-1/5">
            <img
              src={logo}
              onClick={() => navigate("/")}
              className="cursor-pointer h-full xl:ml-auto py-2"
              alt="CineCol-logo"
            />
          </div>
          <div className="xl:w-4/5 lg:flex hidden xl:pl-60 xl:pr-20 xl:py-1.5 ">
            <div className="flex space-x-2 xl:space-x-4">
              <OptionsButton>Carteleras2</OptionsButton>
              <OptionsButton>Pronto</OptionsButton>
              <OptionsButton>Cineco Alternativo</OptionsButton>
              <OptionsButton>Comidas</OptionsButton>
            </div>
            <div className="flex flex-col px-8 justify-center">
              <SearchInput></SearchInput>
            </div>
            <div className="xl:ml-auto flex flex-col justify-center">
              {authkey?.username ?<button className="flex cursor-pointer justify-center rounded-full py-3 px-6 font-roboto text-center text-sm font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal" onClick={signOut}>Cerrar Sesión</button> : <Login></Login>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex rounded-br-3xl lg:hidden z-50 top-0 left-0 w-full h-16 bg-black">
        <div className="w-1/3" />
        <div className="w-1/3  flex flex-col justify-center">
          <img
            src={logo}
            onClick={() => navigate("/")}
            className="mx-auto h-7"
            alt="CineCol-logo"
          />
        </div>
        <div className="w-1/3 flex justify-end pr-6">
        {authkey?.username ?<button className="flex cursor-pointer justify-center rounded-full py-3 px-6 font-roboto text-center text-sm font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal" onClick={signOut}>Cerrar Sesión</button> : <Login></Login>}
        </div>
      </div>
    </>
  );
}
