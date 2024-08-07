import React, { useState } from 'react';
import classNames from 'classnames';

function PizzaCard({ name, sizes, price, category, rating, imageUrl, types }) {
  const availableTypes = ['Тонкое', 'Традиционное'];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const activeTypeToggler = (index) => {
    setActiveType(index);
  };
  const activeSizeToggler = (index) => {
    setActiveSize(index);
  };
  return (
    <React.Fragment>
      <div className="pizza-block">
        
        <div className="pizza-blockTop">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <h4 className="pizza-block__title">{name}</h4>

        <div className="pizza-block__selector">
          <ul>
            {availableTypes.map((type, index) => (
              <li
                onClick={() => activeTypeToggler(index)}
                key={index}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}
              >
                {type}
              </li>
            ))}
          </ul>

          <ul>
            {availableSizes.map((size, index) => (
              <li
                key={index}
                onClick={() => activeSizeToggler(index)}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(size),
                })}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от 395 ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8Vnpm 2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
        <div className="pizza-blockWrapper"></div>
      </div>
    </React.Fragment>
  );
}

export default PizzaCard;
