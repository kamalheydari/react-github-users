import React, { useState } from "react";
import { useGithubContext } from "../context/context";
import "../styles/search.scss";

const Search = () => {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } = useGithubContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      searchGithubUser(user);
    }
  };

  return (
    <header className="header">
      <h1 className="header__tilte">Github Search User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="form__input"
          placeholder="e.g. nelsonic, bebraw, ornicar, andrew, fabpot ..."
        />
        {requests > 0 && !isLoading && (
          <button className="form__btn" type="submit">
            search
          </button>
        )}
      </form>
      <p className='header__error' >{error.show && error.msg}</p>
    </header>
  );
};

export default Search;
