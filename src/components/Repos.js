import React from "react";
import { useGithubContext } from "../context/context";
import { Pie, Column, Bar, Doughnut } from "./Charts";
import "../styles/repos.scss";
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
