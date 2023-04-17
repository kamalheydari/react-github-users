import React, { createContext, useContext, useEffect, useState } from "react";

const GithubContext = createContext();
const rootUrl = "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState({});
  const [repos, setRepos] = useState([]);
  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  //? get user
  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    try {
      const response = await fetch(`${rootUrl}/users/${user}`);
      const data = await response.json();
      if (response.status !== 404) {
        setGithubUser(data);
        const { login } = data;
        //?get repos
        const response = await fetch(
          `${rootUrl}/users/${login}/repos?per_page=100`
        );
        setRepos(await response.json());
      } else {
        toggleError(true, "there is no user with that username");
      }
    } catch (error) {
      //console.log(error);
    }
    checkRequests();
    setIsLoading(false);
  };

  //?  check rate
  const checkRequests = async () => {
    const response = await fetch(`${rootUrl}/rate_limit`);
    let {
      rate: { remaining },
    } = await response.json();
    setRequests(remaining);
    if (remaining === 0) {
      toggleError(true, "sorry, you have exceeded your hourly rate limit!");
    }
  };

  //? error function
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  useEffect(() => {
    checkRequests();
  }, []);

  useEffect(() => {
    searchGithubUser("kamalheydari")
  }, []);
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
