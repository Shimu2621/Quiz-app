import React from "react";
import { Link } from "react-router-dom";
import "./CategoryStyle.scss";

const CategoryStyle = (props) => {
  const { name, image, apiVal } = props.category;
  const color = props.colors;

  const CategoryBackStyle = {
    background: `${color}`,
    borderRadius: "5px",
  };
  return (
    <Link
      to={`/selection/${name}/${apiVal}`}
      className="col-lg-4 col-md-6 category-container mt-4 mb-5"
    >
      <div className="category-name">
        <h2 className="px-4 py-1" style={CategoryBackStyle}>
          {name}
        </h2>
      </div>

      <div className="category-image text-center">
        <img src={image} alt="" />
      </div>
    </Link>
  );
};

export default CategoryStyle;
