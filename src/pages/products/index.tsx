// Component SSR

import { GetServerSideProps } from "next";
import React from "react";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface productProps {
  products: IProduct[];
}

// Berjalan sisi client
function Index({ products }: productProps) {
  console.log("component", products);
  return (
    <div>
      <h1>products Page</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <img src={item.image} />
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}

// getServerSideProps kan berjalan dari sisi server
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log("server", products);
  return {
    props: {
      products,
    },
  };
};

export default Index;
