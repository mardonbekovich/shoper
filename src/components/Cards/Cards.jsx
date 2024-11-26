import React from 'react';
import s from './Cards.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Products from '/public/products.json';
const Cards = () => {
  return (
    <>
      <section className={s.Cards}>
        <div className="container">
          <SectionTitle orient="center">New Arrivals</SectionTitle>
          <div className={s.wrapper}>
            {Products.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                price={card.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
