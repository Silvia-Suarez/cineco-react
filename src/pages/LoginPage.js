import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import { useEffect } from "react";

function LoginPage() {
  useEffect(() => {
    Auth.federatedSignIn();
  }, []);

  return <></>;
}

export default withAuthenticator(LoginPage, {
  socialProviders: ["google", "facebook"],
});
// export default LoginPage;
