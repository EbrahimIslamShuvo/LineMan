import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-2xl">
      <div
        className=" transform duration-700 hover:scale-110 bg-cover bg-center rounded-2xl overflow-hidden relative h-[300px] w-[500px] shadow-lg"
        style={{ backgroundImage: `url(${card.images[0]})` }}
      >
        <div className="absolute inset-0 bg-transparent flex flex-col justify-end p-5 text-white">
          <p className="text-xl font-bold">
            {card.id < 10 ? `0${card.id}` : card.id}
          </p>
          <NavLink to={`/service/${card.id}`}>
            <h1 className="text-2xl font-semibold">{card.name}</h1>
          </NavLink>
          <p className="text-sm">{card.short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
