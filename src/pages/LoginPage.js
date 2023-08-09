import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import {withAuthenticator, Auth } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';



Amplify.configure(awsconfig);

function LoginPage({ authState, user }) {
  console.log("QUESO",authState)
  console.log("HOLA",user)
  return (
    <div className="App">
      <p>Estado: {authState}</p>

    </div>
  );
}

export default withAuthenticator(LoginPage, {
  socialProviders: ["google", "facebook"],
});
