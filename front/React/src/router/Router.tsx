import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login/Login";
import { MainPage } from "../components/pages/Main/MainPage";
import { Register } from "../components/pages/Register/Register";
import { ResultPage } from "../components/pages/Result/ResultPage";
import { GameStart } from "../components/pages/Start/GameStart";
import { UserPage } from "../components/pages/User/UserPage";
import { NotFound } from "../components/pages/ErrorPages/NotFound";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="gamestart" element={<GameStart />} />
        <Route path="userpage" element={<UserPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
