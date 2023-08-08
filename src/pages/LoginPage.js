import React, { useState, useContext } from "react";
import MainStructure from "../components/MainStructure";
import Input from "../components/Inputs/Input";
import PasswordInput from "../components/Inputs/PasswordInput";
import { SecondaryButton } from "../components/Buttons";

export default function LoginPage({}) {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <>
      <MainStructure showCarrouselTop={false} showCarrouselBot={false}>
        <section className="flex justify-center py-20 w-full">
          <div className="rounded-3xl w-96 flex flex-col shadow-lg py-10 px-10">
            <h1 className="text-6xl">Login</h1>
            <form className="flex-col pt-5 flex space-y-4">
              <div>
                <Input
                  value={email}
                  onChangeInput={SetEmail}
                  placeholder={"Ingrese su correo"}
                ></Input>
              </div>
              <div>
                <PasswordInput
                  value={password}
                  onChangeInput={SetPassword}
                  placeholder={"Ingrese su contraseña"}
                ></PasswordInput>
              </div>
              <SecondaryButton>Ingresar</SecondaryButton>
            </form>
          </div>
        </section>
      </MainStructure>
    </>
  );
}
