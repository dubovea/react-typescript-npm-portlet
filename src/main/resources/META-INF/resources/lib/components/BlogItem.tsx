import React from "react";
import { IBlogItem } from "../../@types/blog";

const ArrowIcon = () => {
  return (
    <svg
      width="30.000000"
      height="14.000000"
      viewBox="0 0 30 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="0.000000"
          y1="6.499992"
          x2="30.219509"
          y2="6.499992"
          id="paint_linear_587_2255_0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.006472" stopColor="#ECE4B2" stopOpacity="0.098039" />
          <stop offset="0.795546" stopColor="#BFB990" />
          <stop offset="1.000000" stopColor="#CBC5B3" stopOpacity="0.603922" />
        </linearGradient>
      </defs>
      <path
        id="Форма 20"
        d="M0 6.5L28 6.5M21.65 13L28 6.5L21.65 0"
        stroke="url(#paint_linear_587_2255_0)"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
      />
    </svg>
  );
};
const BlogItem = (item: IBlogItem) => {
  return (
    <div className="card">
      <div className="card__image" />
      <div className="card__info">
        <div className="card__title">{item.header}</div>
        <div className="card__desc">{item.desc}</div>
        <div className="card__footer">
          <p>{item.date}</p>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
