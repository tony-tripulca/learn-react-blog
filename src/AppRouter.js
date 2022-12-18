import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import MainNav from "./components/MainNav";
import ListArticles from "./modules/articles/ListArticles";

function AppRouter(props) {
  const location = useLocation();

  return (
    <React.Fragment>
      {switchNav(location.pathname)}
      <Routes>
        <Route exact path="/articles" element={<ListArticles />} />

        {/** Fallabck route */}
        <Route
          exact
          path="/"
          element={<Navigate to="/articles"></Navigate>}
        ></Route>
      </Routes>
    </React.Fragment>
  );
}

function switchNav(pathname) {
  let path = pathname.split("/");

  if (path.includes("actor")) {
    
  } else {
    return (
      <React.Fragment>
        <MainNav />
      </React.Fragment>
    );
  }
}

export default AppRouter;
