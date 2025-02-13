import React from "react";
import SingleItem from "../SingleItem/SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //BUSCANDO A CHAVE PATHNAME (QUAL PÁGINA ESTOU) //Agora ele sabe onde está
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  //Mostrar todos os items se não tiver na Home
  const finalItems = isHome ? items : Infinity;
  //isHome ? (finalItems = items) : (finalItems = Infinity);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2> {/*USANDO PROP {TITLE} */}
        {/*'Mostrar Mais' SÓ SE TIVER NA HOME*/}
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((valorAtual, index) => index < finalItems)
          .map((objAtual, index) => (
            <SingleItem
              {...objAtual}
              idPath={idPath}
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
