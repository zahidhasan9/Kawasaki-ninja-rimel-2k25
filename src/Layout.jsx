import React from 'react';
import Carousel from './Component/Carousel';
import Offer from './Component/Offer_promo';
import Featured from './Component/Featured';
import Accessories from './Component/Accessories';
const Layout = () => {
  return (
    <>
      <div>
        <Carousel />
        <Offer />
        <Featured />
        <Accessories />
      </div>
    </>
  );
};

export default Layout;
