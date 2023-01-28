import "./App.css";
import axios from "axios";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/logIn/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetPassword } from "./pages/resetPassword/ResetPassword";
import { UserInfo } from "./components/userInfo/UserInfo";
import { SearchBar } from "./components/sarchBar/SearchBar";
import { FileReaders } from "./components/fileReader/FileReaders";
import { useState } from "react";
import { Main } from "./pages/main/Main";

function App() {
  const [iseLogged, setLoggedIn] = useState(false);
  return (
    <>
      {/* <SideBar /> */}
      <BrowserRouter>
        <Routes>
          {iseLogged && <Route path="/" element={<Main />} />}
          {!iseLogged && <Route path="Register" element={<Register />} />}
          {!iseLogged && <Route path="/" element={<Login />} />}
          {!iseLogged && (
            <Route path="reset-password" element={<ResetPassword />} />
          )}
          {iseLogged && <Route path="main/*" element={<Main />} />}
        </Routes>
      </BrowserRouter>
      {/* <HomePage/> */}
      {/* <UserInfo/>
      <SearchBar/> */}
      {/* <FileReaders/> */}
    </>
  );
}

export default App;

{
  /* <div className="main-wrapper"> */
}
{
  /* </div> */
}
