import Navbar from '../components/Navbar';
import MainStructure from '../components/MainStructure';
  import { Amplify } from "aws-amplify";
  import awsconfig from "../aws-exports";
  import {withAuthenticator } from "@aws-amplify/ui-react";
  import '@aws-amplify/ui-react/styles.css';
  Amplify.configure(awsconfig);



function LoginPage({ signOut, user }) {  
  return (
    <>
    <MainStructure showCarrouselBot={false} showCarrouselTop= {false} >

    </MainStructure>
      {/* <div className="App">
        <p>key: {user.username}</p>
      </div> */}
    
    </>
  );
}

export default LoginPage;
