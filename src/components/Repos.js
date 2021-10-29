import React from "react";
//? Contex
import { useGithubContext } from "../context/context";
//? Components
import { Pie, Column, Bar, Doughnut } from "./Charts";
//? Styles
import "../styles/repos.scss";
//? Utils
import { chartData } from "../utils/helpers";

const Repos = () => {
  const { repos } = useGithubContext();
  const { mostUsedLanguages, mostPopularLanguage, stars, forks } =
    chartData(repos);

  return (
    <section className="section-repos ">
      <div className="chart-container">
        <Column data={stars} />
      </div>
      <div className="chart-container">
        <Pie data={mostUsedLanguages} />
      </div>
      <div className="chart-container">
        <Bar data={forks} />
      </div>
      <div className="chart-container">
        <Doughnut data={mostPopularLanguage} />
      </div>
    </section>
  );
};

export default Repos;
