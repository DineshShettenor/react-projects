import React, { useEffect, useState } from "react";
import { User } from "./User";
import './styles.css'

export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("DineshShettenor");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      const data = await response.json();
      if(data){
        setUserData(data);
        setLoading(false);
        setUserName('');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait...</h1>;
  }
  if (errorMessage !== null) {
    return <h1>Something went Wrong - {errorMessage}</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};
