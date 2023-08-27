import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Header = () => {


  const headerBasket = useSelector((state) => state.data.basketList);

  const [basketCount, setBasketCount] = useState(0);
  
  const updateBasketCount = () => {
    const count = headerBasket.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setBasketCount(count);
  };

  useEffect(() => {
    updateBasketCount();
  }, [headerBasket]);


  return (
    <div className="w-full bg-red-600 h-20 flex items-center">
      <div className="ml-5 font-bold text-slate-50 text-xl">Basket</div>
        <div className="bg-amber-400 w-5 ml-2 rounded-full text-center">
          <span className="text-slate-50 font-bold">{basketCount}</span>
        </div>
    </div>
  );
}

export default Header
