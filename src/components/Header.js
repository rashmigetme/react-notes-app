import React from "react";
const Header=({handleToggleDarkMode})=>{
 return(
    // <div className="header">
        <header>
            <h1>Notes</h1>
            <button className="headerButton"
            onClick={()=>{handleToggleDarkMode((prevMode)=> !prevMode)}}>Toggle Mode</button>
        </header>
    // </div>
 );
};

export default Header;