import React, { useEffect, useState } from "react";
import "./styles.css";
export const SearchAutoComplete = () => {
  const [loding, setLoding] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      setLoding(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data.users);

      if (data && data.users && data.users.length) {
        setLoding(false);
        setErrorMessage(null);
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setLoding(false);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSearchParam = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
          setFilteredUsers(filterData);
          setShowDropDown(true);
    }else{
        setFilteredUsers([]);
        setShowDropDown(false);
    }
  };

  const handleSelectedUser = (event) => {
    // console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([])
  }

  if(loding){
    return <h1>User Data is Loding Please Wait.....</h1>
  }
  if(errorMessage !== null){
    return <h1>Error Ocuured - {errorMessage}</h1>
  }
  return (
    <div className="search-auto-complete-container">
      <input
        type="text"
        placeholder="Enter User Name to serch ...."
        value={searchParam}
        onChange={handleSearchParam}
      />
      {
        showDropDown && filteredUsers.map((filteredItem, index) => <p key={index} onClick={handleSelectedUser}>{filteredItem}</p>)
      }
    </div>
  );
};
