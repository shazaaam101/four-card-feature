import React from "react";

const Card = ({ title, detail, svgSrc, colorTheme }) => {
  return (
    <div className="Card">
      <h3 className="title">{title}</h3>
      <p className="light">{detail}</p>
      <img src={svgSrc} alt={svgSrc} />
      <div className={`${colorTheme} line`}></div>
    </div>
  );
};

export default Card;
