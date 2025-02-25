
import React from 'react';
import "./HorizontalCard.css";

const HorizontalCard = ({ cardsData =[]}) => {
  console.log("Cards Data:", cardsData);
  return (
    <div className="image-card1">
      {cardsData.map((card, index) => (
        <div key={index} className="image-container1">
          <img src={card.image} alt={card.title} />
          <h5>{card.title}</h5>
          {card.description && <p>{card.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
