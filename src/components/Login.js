import { useState } from "react";
import { OptionsButton, SecondaryButton } from "./Buttons";

import { Auth } from "aws-amplify";

export default function Login() {
  const [active, SetActive] = useState(false);
  const [hover, SetHover] = useState(false);

  async function changePage() {
    await Auth.federatedSignIn();
  }
  return (
    <>
      <div
        onClick={() => SetActive(!active)}
        onMouseOver={() => SetHover(true)}
        onMouseOut={() => SetHover(false)}
        className="flex relative z-50 text-white"
      >
        <div className="flex flex-col justify-center">
          <div
            className={`rounded-l-full text-center ${
              hover ? "bg-blue-secondary" : "bg-blue-principal"
            } flex flex-col h-5 w-6 cursor-pointer justify-center `}
          >
            {active ? (
              <i className="fas fa-chevron-up text-2xs"></i>
            ) : (
              <i className="fas fa-chevron-down text-2xs"></i>
            )}
          </div>
        </div>
        <div className="flex flex-col -ml-1 justify-center">
          <div
            className={`rounded-full cursor-pointer p-1.5 ${
              hover ? "bg-blue-secondary" : "bg-blue-principal"
            } `}
          >
            <div className="rounded-full flex flex-col h-6 w-6 justify-center text-center bg-blue-quaterny relative">
              <i className="fas fa-user text-2xs"></i>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <>
          <div
            onClick={() => SetActive(false)}
            className="absolute top-0 left-0 h-screen w-full bg-black opacity-60"
          ></div>
          <div className="sm:w-96 sm:h-80 w-80 h-72 absolute bg-blue-principal lg:right-24 sm:right-14 md:right-10 right-8 rounded-xl flex flex-col lg:top-20 md:top-14 sm:top-12 top-14 pb-6">
            <div className="w-full h-1/3 flex flex-col">
              <p className="my-auto text-white text-2xl font-semibold px-20 text-center">
                Bienvenido a Cine Colombia
              </p>
            </div>
            <div className="w-full h-2/3 bg-white">
              <div className="flex h-full flex-col px-20 justify-center space-y-5">
                <OptionsButton action={changePage}>Ingresar</OptionsButton>
                <SecondaryButton action={changePage}>
                  Registrarse
                </SecondaryButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
