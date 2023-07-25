import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/main";
import Actors from "./components/employee_components/actors/Actors";
import Authors from "./components/employee_components/authors/Authors";
import Conductors from "./components/employee_components/conductors/Conductors";
import Producers from "./components/employee_components/producers/Producers";
import Slider from "./components/Slider/imageslider";
import Admin from "./components/admin/Admin";
import {
  orchestras,
  authors,
  conductors,
  actors,
  performances,
  producers,
  tickets,
} from "./components/tables/index.js";
import Sort from "./components/tables/sort/Sort";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const showHeaderAndFooter =
    path === "/admin" ||
    path === "/actors_table" ||
    path === "/authors_table" ||
    path === "/performances_table" ||
    path === "/conductors_table" ||
    path === "/producers_table" ||
    path === "/tickets_table" ||
    path === "/orchestras_table";

  console.log(path)
  console.log(showHeaderAndFooter)

  return (
    <div className="App">
      {!showHeaderAndFooter ? <Header /> : null}
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/actors" Component={Actors} />
        <Route path="/authors" Component={Authors} />
        <Route path="/conductors" Component={Conductors} />
        <Route path="/producers" Component={Producers} />
        <Route path="/performances" Component={Slider} />
        <Route path="/admin" Component={Admin} />
        <Route path="/actors_table" Component={actors} />
        <Route path="/authors_table" Component={authors} />
        <Route path="/performances_table" Component={performances} />
        <Route path="/conductors_table" Component={conductors} />
        <Route path="/producers_table" Component={producers} />
        <Route path="/tickets_table" Component={tickets} />
        <Route path="/orchestras_table" Component={orchestras} />
      </Routes>
      {!showHeaderAndFooter ? <Footer /> : null}
    </div>
  );
}

export default App;
