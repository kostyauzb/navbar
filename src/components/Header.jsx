import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPlus, faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [cards, setCards] = useState([{ id: 1 }]);
  const cardIdCounter = React.useRef(2);

  const handleAddCard = () => {
    setCards((prevCards) => [...prevCards, { id: cardIdCounter.current++ }]);
  };

  const handleRemoveCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <>
      <div className="main w-[100%] text-[#fff]">
        <div className="start flex items-center gap-4 p-3 bg-[#462A68]">
          <div className="a w-10 h-10 rounded-xl bg-[#6D41A1] flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon className="text-[13px]" icon={faChevronDown} />
          </div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="card flex justify-between items-center p-2 w-48 rounded-lg bg-[#6D41A1]"
            >
              <p>Новая вкладка</p>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faX}
                onClick={() => handleRemoveCard(card.id)}
              />
            </div>
          ))}
          <div className="card flex justify-between items-center p-2 w-48 rounded-lg bg-[#6D41A1]">
            <p>Новая вкладка</p>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faPlus}
              onClick={handleAddCard}
            />
          </div>
        </div>
        <div className="search justify-center p-3 flex gap-2 items-center bg-[#6D41A1]">
          <input
            type="text"
            className="w-[70%] text-[#fff] p-3 rounded-3xl bg-[#462A68] outline-none"
            placeholder="Введите поисковый запрос в Google или укажите URL"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
