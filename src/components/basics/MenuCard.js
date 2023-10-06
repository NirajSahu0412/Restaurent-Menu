import React, { Fragment } from "react";

const MenuCard = ({ menuData }) => {
  return (
    <Fragment>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {
            id,
            name,
            course,
            category,
            type,
            price,
            description,
            image,
          } = curElem;
          return (
            <Fragment>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{course}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-price">{price}$</span>
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </Fragment>
          );
        })}
      </section>
    </Fragment>
  );
};

export default MenuCard;
