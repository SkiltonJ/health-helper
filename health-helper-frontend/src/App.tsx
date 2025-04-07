import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./_auth/forms/SignupForm";
import { VerificationCode } from "./_auth/forms/VerificationCode";
import TableTopics from "./pages/TableTopics";
import Home from "./pages/Home";
import RootLayout from "./_root/RootLayout";
import SoulDesires from "./pages/SoulDesires";

function App() {
  return (
    <Routes>
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/verify' element={<VerificationCode />} />
      <Route element={<RootLayout />}>
        <Route path='/table-topics' element={<TableTopics />} />
        <Route path='/' element={<Home />} />
        <Route path='/soul-desires' element={<SoulDesires />} />
      </Route>
    </Routes>
  );
}

export default App;
