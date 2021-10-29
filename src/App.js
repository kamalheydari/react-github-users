import React from "react";
import { EarthLoop, Info, Repos, Search, User } from "./components";
import { useGithubContext } from "./context/context";
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
