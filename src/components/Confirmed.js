import React, { useContext, useState } from "react";
import { AccountContext } from "./Account";

const Confirmed = () => {
  const [email, SetEmail] = useState("");
  const [code, SetCode] = useState("");

  const { verificated } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    verificated(email, code);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => SetEmail(event.target.value)}
        ></input>
        <label htmlFor="code">Codigo de seguridad</label>
        <input
          value={code}
          onChange={(event) => SetCode(event.target.value)}
        ></input>

        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
};

export default Confirmed;
