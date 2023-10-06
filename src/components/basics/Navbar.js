import React, { Fragment } from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
