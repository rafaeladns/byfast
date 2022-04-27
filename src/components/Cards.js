import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Confira os nossos serviços</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/entrega.jpg"
              text="Rastreie a sua encomenda a qualquer hora do dia, com atualização em tempo real."
              label="Rastreamento de encomenda"
            />
            <CardItem
              src="images/caminhoneiro.jpg"
              text="Seja um de nossos entregadores parceiros, venha para byFast."
              label="Seja nosso parceiro"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/international.jpg"
              text="Enviamos a sua encomenda para mais de 154 países."
              label="byFast Internacional"
            />
            <CardItem
              src="images/entrega-encomenda.jpg"
              text="Serviço que avisa o horário de entrega das encomendas e com a possiblidade de entrega com dia e hora marcada."
              label="Entrega Personalizada"
            />
            <CardItem
              src="images/entrega-documentos.jpg"
              text="Modalidade para envio de documentos na medida para você."
              label="byFast DOC"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
