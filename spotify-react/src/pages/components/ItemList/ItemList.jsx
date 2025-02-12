import React from "react";
import SingleItem from "../SingleItem/SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2> {/*USANDO PROP {TITLE} */}
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((valorAtual, index) => index < items)
          .map((objAtual, index) => (
            <SingleItem
              idPath={idPath}
              {...objAtual}
              key={`${title}-${index}`}
            /> /*IDENTIFICADOR OBIRGADORIO SENÃO DA ERRO */
          ))}
      </div>
    </div>
  );
};

export default ItemList;

//
//  Array(items)
//           .fill() /*PRA CADA items VAI COLOCAR UM ITEM NO ARRAY (inicialmente vazio) */
//           .map((valorAtual, index) => (
//             <SingleItem
//               key={`${title}-${index}`}
//             /> /*IDENTIFICADOR OBIRGADORIO SENÃO DA ERRO */
//           ))
//
