import React, { Fragment, useState } from "react";
import "./style.css";
import Menu from "./MenuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.course;
    })
  ),
  "All",
];
console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (course) => {
    if (course === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.course === course;
    });
    setMenuData(updatedList);
  };
  return (
    <Fragment>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </Fragment>
  );
};

export default Resturant;
