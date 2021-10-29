import React from "react";
//? Contex
import { useGithubContext } from "../context/context";
//? Icons
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
//? Styles
import "../styles/info.scss";

const Info = () => {
  const { githubUser } = useGithubContext();
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section info-section ">
      <div className="item__wrapper">
        {items.map(({ icon, label, value, color, id }) => {
          return (
            <article key={id} className="item">
              <span className={`item__icon ${color}`}>{icon}</span>
              <div className="item__info">
                <h3 className="item__value">{value}</h3>
                <p className="item__label">{label}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
