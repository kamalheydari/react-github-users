import React from "react";
import personImg from "../assets/person.png";
import "../styles/user.scss";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { useGithubContext } from "../context/context";

const User = () => {
  const { githubUser } = useGithubContext();
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <section className="user-section">
      <article className="user">
        <header className="user__header">
          <img
            src={avatar_url || personImg}
            alt={name}
            className="header__img"
          />
          <div className="header__info">
            <h3>{name}</h3>
            {twitter_username && (
              <p>
                <IoLogoTwitter /> @{twitter_username}
              </p>
            )}
          </div>
          <div className="header__link">
            <a href={html_url}>follow</a>
          </div>
        </header>
        <div className="user__bio">{bio && <p>{bio}</p>}</div>
        <div className="user__links">
          {company && (
            <p>
              <MdBusiness className="user__icon" /> {company}
            </p>
          )}
          {location && (
            <p>
              <MdLocationOn className="user__icon" /> {location}
            </p>
          )}
          {blog && (
            <p>
              <a href={`https://${blog}`}>
                <MdLink className="user__icon" /> {blog}
              </a>
            </p>
          )}
        </div>
      </article>
    </section>
  );
};

export default User;
