import React from 'react'
import { useSelector } from "react-redux";



const CardsList = () => {


  const basket = useSelector((state) => state.data.basketList);


  return (
    <div className="w-2/5 ">
      <div className="flex flex-col w-50% border-4 mt-4">
        <div className="flex justify-around">
          <p className="font-bold">BasketList</p>
        </div>
        {basket.map((data, index) => (
          <div key={index} className="flex mt-6">
            <div className="w-1/4">
              <img alt="fruit" src={data.product.img} />
            </div>
            <div className="w-2/4 flex items-center justify-center font-bold">
              <p>{ data.product.name}</p>
            </div>
            <div className="w-1/4 flex items-center justify-center font-bold">
              <p>{data.product.price+" $" }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsList
