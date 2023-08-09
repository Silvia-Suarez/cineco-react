import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import {withAuthenticator,} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';



function App (){
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Router>
    );
  };


export default App;
