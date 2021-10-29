import React from "react";
//? Components
import { EarthLoop, Info, Repos, Search, User } from "./components";
//? Context
import { useGithubContext } from "./context/context";
//? Styles
import "./styles/app.scss";

const App = () => {
  const { isLoading } = useGithubContext();

  if (isLoading) {
    return (
      <>
        <EarthLoop />
        <Search />
      </>
    );
  }
  return (
    <>
      <EarthLoop />
      <Search />
      <main>
        <User />
        <Info />
        <Repos />
      </main>
    </>
  );
};

export default App;
