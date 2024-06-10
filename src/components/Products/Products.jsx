import React from 'react'
import Heading from '../Shared/Heading';
import ProductsCard from './ProductsCard';

//Images import
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';
import Img6 from '../../assets/product/p-6.jpg';
import Img7 from '../../assets/product/p-7.jpg';


const ProductsData = [
    {
        id: 1,
        img: Img5,
        title: "Boat headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img6,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img7,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img5,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]


const ProductsData2 = [
    {
        id: 1,
        img: Img1,
        title: "Boat headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
]



const Products = () => {
  return (
      <div>
        <div className="container">
            {/* Header section */}
            <Heading title="Our Products"
            subtitle={"Expore Our Products"} 
            />
            {/* Body section */}
            <ProductsCard data={ProductsData} />
            <ProductsCard data={ProductsData2} />
        </div>
      </div>
  )
}

export default Products;
