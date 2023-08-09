import { Amplify } from "aws-amplify";

 

import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

 

import awsExports from "../aws-exports";

Amplify.configure(awsExports);

 

export default function LoginPage() {

  return <Authenticator>{({ signOut, user }) => null}</Authenticator>;
}