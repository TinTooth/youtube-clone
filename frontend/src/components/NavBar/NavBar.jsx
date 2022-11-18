import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({setSearch,search}) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navBar">
        <div className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h3>Youtube Clone</h3>
          </Link>
        </div>
        <div className="searchbar">
          <SearchBar search = {search} setSearch={setSearch}></SearchBar>
        </div>
        <div className="log">
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
    </div>
  );
};

export default Navbar;
