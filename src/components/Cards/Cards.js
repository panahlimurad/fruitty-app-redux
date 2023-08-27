import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { handleAddClick, handleRemoveItem } from '../../features/dataSlice';


const Cards = () => {

  const orders = useSelector((state) => state.data.orders);


   const dispatch = useDispatch();


  return (
    <div className="w-3/5 flex flex-wrap gap-7 mt-5 ml-3">
      {orders.fruits?.map((data, index) => (
        <div
          key={index}
          className="w-1/5 flex flex-col justify-center items-center border-4 gap-3"
        >
          <div className="w-2/3">
            <img src={data.img} alt="fruit" />
          </div>
          <div className="font-bold">{data.name}</div>
          <div className="font-bold">{data.price+" $"}</div>
          <div className="flex gap-2 w-full">
            <button
              onClick={() => dispatch(handleAddClick(data))}
              className="bg-lime-600 text-slate-50 w-1/2 rounded-lg hover:bg-lime-500"
            >
              Add
            </button>
            <button
              className="bg-red-600 text-slate-50 w-1/2 rounded-lg hover:bg-red-500"
              onClick={()=> dispatch(handleRemoveItem(data))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards
